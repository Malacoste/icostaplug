// Initialize Firebase database reference
const db = firebase.database();
const spinsRef = db.ref('spins');
// Generate random coupon codes
function generateCouponCode(prefix) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const randomPart = Array.from({length: 6}, () => 
    chars.charAt(Math.floor(Math.random() * chars.length))).join('');
  return `${prefix}-${randomPart}`;
}

document.addEventListener('DOMContentLoaded', function() {
  // Prize Configuration
  const prizes = [
    { label: "R50 OFF", details: "🎉 R50 OFF Your Next Repair!", color: "#32CD32", target: "coupon1.html" },
    { label: "Screen Protector", details: "🛡️ Free Screen Protector!", color: "#111", target: "coupon2.html" },
    { label: "10% OFF", details: "🏷️ 10% Off Next Item", color: "#228B22", target: "coupon3.html" },
    { label: "Trade-in", details: "♻️ Trade-in Bonus!", color: "#333", target: "coupon4.html" },
    { label: "Wildcard", details: "🎴 Bring a friend, double discount!", color: "#3CB371", target: "coupon5.html" }
  ];

  // Get DOM elements
  const wheel = document.getElementById('wheel');
  const ctx = wheel.getContext('2d');
  const spinButton = document.getElementById('spinButton');
  const messageBox = document.getElementById('spin-message');

  // Cooldown variables
  const SPIN_COOLDOWN = 10 * 60 * 1000; // 10 minutes in milliseconds
  let lastSpinTime = parseInt(localStorage.getItem('lastSpinTime') || '0');
  let cooldownActive = false;

  // Set canvas size
  wheel.width = Math.min(400, window.innerWidth - 40);
  wheel.height = wheel.width;
  const center = wheel.width / 2;
  const radius = center - 20;
  const segmentAngle = (2 * Math.PI) / prizes.length;

  // Draw wheel
  function drawWheel() {
    ctx.clearRect(0, 0, wheel.width, wheel.height);
    
    prizes.forEach((prize, index) => {
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, index * segmentAngle, (index + 1) * segmentAngle);
      ctx.fillStyle = prize.color;
      ctx.fill();
      
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(index * segmentAngle + segmentAngle/2);
      ctx.textAlign = 'right';
      ctx.fillStyle = index % 2 === 0 ? '#000' : '#fff';
      ctx.font = 'bold 16px Arial';
      ctx.fillText(prize.label, radius - 30, 10);
      ctx.restore();
    });
    
    ctx.beginPath();
    ctx.arc(center, center, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#111";
    ctx.fill();
    ctx.fillStyle = "limegreen";
    ctx.font = "bold 20px Arial";
    ctx.textAlign = "center";
    ctx.fillText("SPIN", center, center + 7);
  }

  // Check cooldown status
  function updateCooldownStatus() {
    const now = Date.now();
    const timeRemaining = (lastSpinTime + SPIN_COOLDOWN) - now;
    
    if (timeRemaining > 0) {
      cooldownActive = true;
      spinButton.disabled = true;
      const minutes = Math.ceil(timeRemaining / (60 * 1000));
      messageBox.innerHTML = `Please wait ${minutes} minute${minutes !== 1 ? 's' : ''} before spinning again`;
      
      // Auto-enable when cooldown ends
      setTimeout(() => {
        cooldownActive = false;
        spinButton.disabled = false;
        messageBox.innerHTML = "Ready to spin again!";
      }, timeRemaining);
    } else {
      cooldownActive = false;
      spinButton.disabled = false;
    }
  }

  // Check daily spin availability
  function isDailySpinAvailable() {
    const today = new Date().toDateString();
    const lastSpinDate = localStorage.getItem('lastSpinDate');
    return lastSpinDate !== today;
  }

  // Spin function
  function spinWheel() {
    if (cooldownActive) return;
    if (!isDailySpinAvailable()) {
      messageBox.innerHTML = "You've already spun today! Come back tomorrow.";
      return;
    }

    spinButton.disabled = true;
    messageBox.innerHTML = "<div class='spinning'>🔄 SPINNING...</div>";
    
    const startTime = Date.now();
    const duration = 3500;
    const winningIndex = Math.floor(Math.random() * prizes.length);
    const winningAngle = (2 * Math.PI) - (winningIndex * segmentAngle + segmentAngle/2) - Math.PI/2;
    
    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const angle = easeProgress * 5 * 2 * Math.PI + winningAngle;
      
      ctx.save();
      ctx.clearRect(0, 0, wheel.width, wheel.height);
      ctx.translate(center, center);
      ctx.rotate(angle);
      ctx.translate(-center, -center);
      drawWheel();
      ctx.restore();
      
      if (progress < 1) requestAnimationFrame(animate);
      else finishSpin(winningIndex);
    }
    
    function finishSpin(index) {
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#32CD32', '#ffffff', '#000000']
      });

      const couponCode = generateCouponCode(`ICOSTA-${prizes[index].label.substring(0,3)}`);
       const expires = new Date();
  expires.setDate(expires.getDate() + 30); // 30 days from now

  // Log to Firebase
  spinsRef.push({
    prize: prizes[index].label,
    code: couponCode,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
    device: navigator.userAgent.slice(0, 100) // Truncate long user agent
  }).catch(error => {
    console.error("Firebase error:", error);
  });
}
  // Store coupon data in localStorage
  const couponData = {
    code: couponCode,
    expires: expires.toLocaleDateString(),
    prize: prizes[index].label
  };
  localStorage.setItem('currentCoupon', JSON.stringify(couponData));
     
   const spinData = JSON.parse(localStorage.getItem('spinData') || '{"spins":[]}');
  spinData.spins.push({
    timestamp: Date.now(),
    prize: prizes[index].label,
    code: couponCode
  });
  localStorage.setItem('spinData', JSON.stringify(spinData));

  
  messageBox.innerHTML = `
        <strong>🎉 ${prizes[index].label}</strong><br>
        ${prizes[index].details}<br>
        <small>Code: ${couponCode}</small>
      `;
      
      // Update spin tracking
      lastSpinTime = Date.now();
      localStorage.setItem('lastSpinTime', lastSpinTime);
      localStorage.setItem('lastSpinDate', new Date().toDateString());
      
      // Start cooldown
      updateCooldownStatus();
      
      setTimeout(() => {
        window.location.href = prizes[index].target;
      }, 3000);
    }
    
    animate();
  }

  // Initial setup
  drawWheel();
  updateCooldownStatus();
  
  // Event listeners
  spinButton.addEventListener('click', spinWheel);

  // Reset at midnight
  function scheduleDailyReset() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const timeUntilMidnight = midnight - now;
    
    setTimeout(() => {
      localStorage.removeItem('lastSpinDate');
      if (!cooldownActive) {
        messageBox.innerHTML = "New spin available!";
      }
      scheduleDailyReset(); // Reschedule for next day
    }, timeUntilMidnight);
  }
  
  scheduleDailyReset();

});



