// spin.js - Enhanced with security, error handling, and performance
class SpinGame {
    constructor() {
        this.prizes = [
            { 
                label: "R50 OFF", 
                details: "🎉 R50 OFF Your Next Repair!", 
                color: "#32CD32", 
                target: "coupon1.html?spin=success",
                prefix: "ICO50"
            },
            { 
                label: "Screen Protector", 
                details: "🛡️ Free Screen Protector!", 
                color: "#111", 
                target: "coupon2.html?spin=success",
                prefix: "ICOSCREEN"
            },
            { 
                label: "10% OFF", 
                details: "🏷️ 10% Off Next Item", 
                color: "#228B22", 
                target: "coupon3.html?spin=success",
                prefix: "ICO10"
            },
            { 
                label: "Trade-in", 
                details: "♻️ Trade-in Bonus!", 
                color: "#333", 
                target: "coupon4.html?spin=success",
                prefix: "ICOTRADE"
            },
            { 
                label: "Wildcard", 
                details: "🎴 Bring a friend, double discount!", 
                color: "#3CB371", 
                target: "coupon5.html?spin=success",
                prefix: "ICOWILD"
            }
        ];
        
        this.config = {
            SPIN_COOLDOWN: 10 * 60 * 1000, // 10 minutes
            MAX_FREE_SPINS: 2,
            TESTER_NUMBERS: ['0812345678', '0823456789'],
            ADMIN_NUMBERS: ['0672505124']
        };
        
        this.state = {
            humanVerificationPassed: false,
            spinAttempts: 0,
            freeSpinUsed: this.getLocalStorageItem('freeSpinUsed') === 'true',
            userSpins: parseInt(this.getLocalStorageItem('userSpins') || '0'),
            lastSpinTime: parseInt(this.getLocalStorageItem('lastSpinTime') || '0'),
            cooldownActive: false,
            isSpinning: false
        };
        
        this.init();
    }
    
    // Safe localStorage getter
    getLocalStorageItem(key) {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            console.error('Error accessing localStorage:', error);
            return null;
        }
    }
    
    // Safe localStorage setter
    setLocalStorageItem(key, value) {
        try {
            localStorage.setItem(key, value);
            return true;
        } catch (error) {
            console.error('Error setting localStorage:', error);
            return false;
        }
    }
    
    init() {
        try {
            // Check if Firebase is available
            if (typeof firebase !== 'undefined' && firebase.database) {
                this.database = firebase.database();
                this.spinsRef = this.database.ref('spins');
                this.usersRef = this.database.ref('users');
            } else {
                console.warn('Firebase not available, using offline mode');
                this.database = null;
                this.spinsRef = null;
                this.usersRef = null;
            }
            
            this.drawWheel();
            this.updateCooldownStatus();
            this.updateSpinButton();
            this.setupEventListeners();
            this.scheduleDailyReset();
        } catch (error) {
            console.error('Error initializing spin game:', error);
            this.showError('Failed to initialize game. Please refresh the page.');
        }
    }
    
    setupEventListeners() {
        const spinButton = document.getElementById('spinBtn');
        if (spinButton) {
            spinButton.addEventListener('click', () => this.spinWheel());
        }
        
        // Add keyboard support for accessibility
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                const spinButton = document.getElementById('spinBtn');
                if (spinButton && !spinButton.disabled && !this.state.isSpinning) {
                    this.spinWheel();
                }
            }
        });
    }
    
    // Generate secure coupon codes
    generateCouponCode(prefix) {
        const crypto = window.crypto || window.msCrypto;
        const array = new Uint8Array(6);
        
        if (crypto && crypto.getRandomValues) {
            crypto.getRandomValues(array);
        } else {
            // Fallback for older browsers
            for (let i = 0; i < 6; i++) {
                array[i] = Math.floor(Math.random() * 256);
            }
        }
        
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        const randomPart = Array.from(array, byte => 
            chars.charAt(byte % chars.length)).join('');
            
        return `${prefix}-${randomPart}`;
    }
    
    // Detect device type for personalization
    detectDeviceType() {
        const userAgent = navigator.userAgent;
        
        if (/iPhone|iPad|iPod/i.test(userAgent)) return "Apple iOS";
        if (/Android/i.test(userAgent)) return "Android";
        if (/Mac/i.test(userAgent)) return "Mac";
        if (/Windows/i.test(userAgent)) return "Windows";
        
        return "Unknown";
    }
    
    // Get personalized recommendation
    getPersonalizedRecommendation(deviceType, prize) {
        const recommendations = {
            "Apple iOS": {
                "R50 OFF": "Perfect for iPhone screen repairs!",
                "Screen Protector": "Get a premium glass protector for your iPhone",
                "10% OFF": "Great for iPhone accessories and repairs",
                "Trade-in": "Get extra for your old iPhone",
                "Wildcard": "Bring a friend for iPhone repairs"
            },
            "Android": {
                "R50 OFF": "Perfect for Samsung or other Android repairs!",
                "Screen Protector": "Get a tempered glass protector for your Android",
                "10% OFF": "Great for Android repairs and accessories",
                "Trade-in": "Get extra for your old Android device",
                "Wildcard": "Bring a friend for Android repairs"
            },
            "Mac": {
                "R50 OFF": "Perfect for MacBook repairs!",
                "Screen Protector": "Get a keyboard cover for your Mac",
                "10% OFF": "Great for Mac accessories and services",
                "Trade-in": "Get extra for your old Mac",
                "Wildcard": "Bring a friend for Mac services"
            },
            "Windows": {
                "R50 OFF": "Perfect for laptop repairs!",
                "Screen Protector": "Get a screen protector for your laptop",
                "10% OFF": "Great for computer services",
                "Trade-in": "Get extra for your old laptop",
                "Wildcard": "Bring a friend for computer repairs"
            },
            "Unknown": {
                "R50 OFF": "Perfect for your device repair!",
                "Screen Protector": "Get protection for your device",
                "10% OFF": "Great for services and accessories",
                "Trade-in": "Get extra for your old device",
                "Wildcard": "Bring a friend for discounts"
            }
        };
        
        return recommendations[deviceType]?.[prize] || "Great prize for your needs!";
    }
    
    // Update loyalty tracking
    updateLoyalty() {
        try {
            const now = new Date();
            const today = now.toDateString();
            const lastSpinDate = this.getLocalStorageItem('lastSpinDate');
            const streak = parseInt(this.getLocalStorageItem('spinStreak') || '0');
            
            // Reset streak if it's a new day after more than one day
            if (lastSpinDate && lastSpinDate !== today) {
                const lastDate = new Date(lastSpinDate);
                const dayDiff = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));
                
                if (dayDiff > 1) {
                    this.setLocalStorageItem('spinStreak', '1');
                } else {
                    const newStreak = streak + 1;
                    this.setLocalStorageItem('spinStreak', newStreak.toString());
                    
                    // Check for streak rewards
                    if (newStreak % 7 === 0) {
                        this.showStreakBonus(newStreak);
                    }
                }
            } else if (!lastSpinDate) {
                this.setLocalStorageItem('spinStreak', '1');
            }
            
            this.setLocalStorageItem('lastSpinDate', today);
        } catch (error) {
            console.error('Error updating loyalty:', error);
        }
    }
    
    showStreakBonus(streak) {
        const messageBox = document.getElementById('spin-message');
        if (messageBox) {
            const bonusElement = document.createElement('div');
            bonusElement.innerHTML = `<br><small>🎯 ${streak}-day streak bonus! Keep it up!</small>`;
            bonusElement.style.color = '#32CD32';
            messageBox.appendChild(bonusElement);
            
            // Remove after 5 seconds
            setTimeout(() => {
                if (bonusElement.parentNode) {
                    bonusElement.parentNode.removeChild(bonusElement);
                }
            }, 5000);
        }
    }
    
    // Draw wheel
    drawWheel() {
        const wheel = document.getElementById('wheelCanvas');
        if (!wheel) return;
        
        const ctx = wheel.getContext('2d');
        const center = wheel.width / 2;
        const radius = center - 20;
        const segmentAngle = (2 * Math.PI) / this.prizes.length;
        
        ctx.clearRect(0, 0, wheel.width, wheel.height);
        
        this.prizes.forEach((prize, index) => {
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
    
    // Update spin button text
    updateSpinButton() {
        const spinButton = document.getElementById('spinBtn');
        if (!spinButton) return;
        
        const currentUser = JSON.parse(this.getLocalStorageItem('currentUser') || 'null');
        
        if (!currentUser) {
            spinButton.textContent = this.state.freeSpinUsed ? "SIGN UP TO SPIN" : "SPIN NOW";
        } else if (currentUser.role === 'tester' || this.config.TESTER_NUMBERS.includes(currentUser.phone)) {
            spinButton.textContent = "SPIN NOW (TESTER)";
        } else {
            const spinsLeft = Math.max(0, this.config.MAX_FREE_SPINS - this.state.userSpins);
            spinButton.textContent = spinsLeft > 0 ? `SPIN NOW (${spinsLeft} LEFT)` : "NO SPINS LEFT";
        }
        
        // Add ARIA label for accessibility
        spinButton.setAttribute('aria-label', spinButton.textContent);
    }
    
    // Check cooldown status
    updateCooldownStatus() {
        const now = Date.now();
        const timeRemaining = (this.state.lastSpinTime + this.config.SPIN_COOLDOWN) - now;
        
        if (timeRemaining > 0) {
            this.state.cooldownActive = true;
            const spinButton = document.getElementById('spinBtn');
            if (spinButton) spinButton.disabled = true;
            
            const messageBox = document.getElementById('spin-message');
            if (messageBox) {
                const minutes = Math.ceil(timeRemaining / (60 * 1000));
                messageBox.innerHTML = `Please wait ${minutes} minute${minutes !== 1 ? 's' : ''} before spinning again`;
            }
            
            // Auto-enable when cooldown ends
            setTimeout(() => {
                this.state.cooldownActive = false;
                const spinButton = document.getElementById('spinBtn');
                if (spinButton) spinButton.disabled = false;
                
                const messageBox = document.getElementById('spin-message');
                if (messageBox) messageBox.innerHTML = "Ready to spin again!";
            }, timeRemaining);
        } else {
            this.state.cooldownActive = false;
            const spinButton = document.getElementById('spinBtn');
            if (spinButton) spinButton.disabled = false;
        }
    }
    
    // Check daily spin availability
    isDailySpinAvailable() {
        const today = new Date().toDateString();
        const lastSpinDate = this.getLocalStorageItem('lastSpinDate');
        return lastSpinDate !== today;
    }
    
    // Main spin function
    async spinWheel() {
        try {
            const currentUser = JSON.parse(this.getLocalStorageItem('currentUser') || 'null');
            const messageBox = document.getElementById('spin-message');
            const spinButton = document.getElementById('spinBtn');
            
            if (!currentUser) {
                if (messageBox) messageBox.innerHTML = "Please log in to play!";
                window.location.href = 'login.html';
                return;
            }
            
            // Check if user is a tester (unlimited spins)
            const isTester = currentUser && (
                currentUser.role === 'tester' || 
                this.config.TESTER_NUMBERS.includes(currentUser.phone)
            );
            
            if (isTester) {
                // Testers can spin unlimited times
                await this.actualSpin();
                return;
            }
            
            // Check if user has spins remaining
            if (this.state.userSpins >= this.config.MAX_FREE_SPINS) {
                if (!currentUser) {
                    this.showSignupPrompt("You've used all free spins! Sign up for more rewards.");
                } else {
                    if (messageBox) messageBox.innerHTML = "You've used all your spins for today. Come back tomorrow!";
                }
                return;
            }
            
            // If this is the first free spin, just spin
            if (!this.state.freeSpinUsed) {
                this.state.freeSpinUsed = true;
                this.setLocalStorageItem('freeSpinUsed', 'true');
                await this.actualSpin();
                return;
            }
            
            // If user has used the first spin but isn't logged in, show signup prompt
            if (this.state.freeSpinUsed && !currentUser) {
                this.showSignupPrompt("Sign up for an extra free spin!");
                return;
            }
            
            // If user is logged in and has spins remaining
            if (currentUser && this.state.userSpins < this.config.MAX_FREE_SPINS) {
                await this.actualSpin();
            }
        } catch (error) {
            console.error('Spin error:', error);
            this.showError('Failed to spin. Please try again.');
        }
    }
    
    async actualSpin() {
        const wheel = document.getElementById('wheelCanvas');
        const spinButton = document.getElementById('spinBtn');
        const messageBox = document.getElementById('spin-message');
        
        if (!wheel || !spinButton || !messageBox) return;
        
        if (this.state.cooldownActive) return;
        if (!this.isDailySpinAvailable()) {
            messageBox.innerHTML = "You've already spun today! Come back tomorrow.";
            return;
        }
        
        if (this.state.isSpinning) return;
        this.state.isSpinning = true;
        
        spinButton.disabled = true;
        messageBox.innerHTML = "<div class='spinning'>🔄 SPINNING...</div>";
        
        try {
            const winningIndex = await this.animateSpin(wheel);
            await this.finishSpin(winningIndex);
        } catch (error) {
            console.error('Spin animation error:', error);
            this.showError('Spin failed. Please try again.');
            spinButton.disabled = false;
        } finally {
            this.state.isSpinning = false;
        }
    }
    
    animateSpin(wheel) {
        return new Promise((resolve) => {
            const ctx = wheel.getContext('2d');
            const center = wheel.width / 2;
            const radius = center - 20;
            const segmentAngle = (2 * Math.PI) / this.prizes.length;
            
            const startTime = Date.now();
            const duration = 3500;
            const winningIndex = Math.floor(Math.random() * this.prizes.length);
            const winningAngle = (2 * Math.PI) - (winningIndex * segmentAngle + segmentAngle/2) - Math.PI/2;
            
            const animateFrame = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                const angle = easeProgress * 5 * 2 * Math.PI + winningAngle;
                
                ctx.save();
                ctx.clearRect(0, 0, wheel.width, wheel.height);
                ctx.translate(center, center);
                ctx.rotate(angle);
                ctx.translate(-center, -center);
                this.drawWheel();
                ctx.restore();
                
                if (progress < 1) {
                    requestAnimationFrame(animateFrame);
                } else {
                    resolve(winningIndex);
                }
            };
            
            requestAnimationFrame(animateFrame);
        });
    }
    
    async finishSpin(index) {
        this.state.userSpins++;
        this.setLocalStorageItem('userSpins', this.state.userSpins.toString());
        
        // Confetti celebration
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 200,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#32CD32', '#ffffff', '#000000']
            });
        }
        
        const deviceType = this.detectDeviceType();
        const couponCode = this.generateCouponCode(this.prizes[index].prefix);
        const expires = new Date();
        expires.setDate(expires.getDate() + 30);
        
        // Get personalized message
        const personalizedMsg = this.getPersonalizedRecommendation(deviceType, this.prizes[index].label);
        
        try {
            // 1. Store in Firebase (if available)
            if (this.spinsRef) {
                await this.logSpinToFirebase(index, couponCode, deviceType);
            }
            
            // 2. Store in localStorage for coupon page
            this.saveCouponToLocalStorage(index, couponCode, expires, personalizedMsg);
            
            // 3. Track spin in user's history
            this.updateSpinHistory(index, couponCode, deviceType);
            
            // 4. Store coupon in user's coupon list
            this.updateUserCoupons(index, couponCode, expires, personalizedMsg);
            
            // 5. Update WhatsApp button
            this.updateWhatsAppButton(index, couponCode);
            
            // 6. Update UI with personalized message
            this.updateSpinResultUI(index, personalizedMsg, couponCode);
            
            // 7. Update spin tracking
            this.updateSpinTracking();
            
            // 8. Update loyalty
            this.updateLoyalty();
            
            // 9. Update user spins in Firebase
            await this.updateUserSpinsInFirebase();
            
            // 10. Redirect after delay
            setTimeout(() => {
                window.location.href = this.prizes[index].target;
            }, 3000);
            
        } catch (error) {
            console.error('Error finishing spin:', error);
            this.showError('Prize processing failed. Contact support with this code: ' + couponCode);
            
            // Still allow user to get their prize despite logging errors
            this.saveCouponToLocalStorage(index, couponCode, expires, personalizedMsg);
            
            const spinButton = document.getElementById('spinBtn');
            if (spinButton) spinButton.disabled = false;
        }
    }
    
    async logSpinToFirebase(index, couponCode, deviceType) {
        try {
            const currentUser = JSON.parse(this.getLocalStorageItem('currentUser') || 'null');
            
            await this.spinsRef.push({
                prize: this.prizes[index].label,
                code: couponCode,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                device: navigator.userAgent,
                deviceType: deviceType,
                redeemed: false,
                userId: currentUser ? currentUser.phone : 'anonymous',
                userPhone: currentUser ? currentUser.phone : 'anonymous'
            });
            
            console.log("Spin logged to Firebase");
        } catch (error) {
            console.error("Firebase error:", error);
            // Don't throw error here - we still want to give the user their prize
        }
    }
    
    async updateUserSpinsInFirebase() {
        try {
            const currentUser = JSON.parse(this.getLocalStorageItem('currentUser') || 'null');
            
            if (currentUser && this.usersRef) {
                const userRef = this.usersRef.child(currentUser.phone);
                const snapshot = await userRef.once('value');
                
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    const updatedSpins = (userData.spins || 0) + 1;
                    
                    await userRef.update({
                        spins: updatedSpins,
                        lastSpin: firebase.database.ServerValue.TIMESTAMP
                    });
                    
                    console.log("User spins updated in Firebase");
                }
            }
        } catch (error) {
            console.error("Error updating user spins in Firebase:", error);
            // Don't throw error - this is non-critical
        }
    }
    
    saveCouponToLocalStorage(index, couponCode, expires, personalizedMsg) {
        this.setLocalStorageItem('currentCoupon', JSON.stringify({
            code: couponCode,
            prize: this.prizes[index].label,
            expires: expires.toLocaleDateString(),
            personalized: personalizedMsg
        }));
    }
    
    updateSpinHistory(index, couponCode, deviceType) {
        try {
            const spinHistory = JSON.parse(this.getLocalStorageItem('spinHistory') || '[]');
            spinHistory.push({
                prize: this.prizes[index].label,
                code: couponCode,
                timestamp: Date.now(),
                deviceType: deviceType
            });
            this.setLocalStorageItem('spinHistory', JSON.stringify(spinHistory));
        } catch (error) {
            console.error('Error updating spin history:', error);
        }
    }
    
    updateUserCoupons(index, couponCode, expires, personalizedMsg) {
        try {
            const userCoupons = JSON.parse(this.getLocalStorageItem('userCoupons') || '[]');
            userCoupons.push({
                prize: this.prizes[index].label,
                code: couponCode,
                expires: expires.toLocaleDateString(),
                personalized: personalizedMsg,
                redeemed: false
            });
            this.setLocalStorageItem('userCoupons', JSON.stringify(userCoupons));
        } catch (error) {
            console.error('Error updating user coupons:', error);
        }
    }
    
    updateWhatsAppButton(index, couponCode) {
        const whatsappBtn = document.getElementById('whatsappFloat');
        if (whatsappBtn) {
            whatsappBtn.style.display = 'flex';
            whatsappBtn.href = `https://wa.me/27672505124?text=${encodeURIComponent(
                `Hi iCOSTA, I spun and won ${this.prizes[index].label}! Code: ${couponCode}`
            )}`;
        }
    }
    
    updateSpinResultUI(index, personalizedMsg, couponCode) {
        const messageBox = document.getElementById('spin-message');
        if (messageBox) {
            messageBox.innerHTML = `
                <strong>🎉 ${this.prizes[index].label}</strong><br>
                ${this.prizes[index].details}<br>
                <small>${personalizedMsg}</small><br>
                <small>Code: ${couponCode}</small>
            `;
        }
    }
    
    updateSpinTracking() {
        this.state.lastSpinTime = Date.now();
        this.setLocalStorageItem('lastSpinTime', this.state.lastSpinTime.toString());
        this.setLocalStorageItem('lastSpinDate', new Date().toDateString());
    }
    
    showSignupPrompt(message) {
        // Create a modal or alert for signup prompt
        const messageBox = document.getElementById('spin-message');
        if (messageBox) {
            messageBox.innerHTML = `
                ${message}
                <br><br>
                <button onclick="window.location.href='login.html'" 
                    style="background: #32CD32; color: black; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                    Sign Up Now
                </button>
            `;
        }
    }
    
    showError(message) {
        const messageBox = document.getElementById('spin-message');
        if (messageBox) {
            messageBox.innerHTML = `
                <div style="color: #ff4444;">
                    ❌ ${message}
                </div>
            `;
        }
        
        const spinButton = document.getElementById('spinBtn');
        if (spinButton) spinButton.disabled = false;
    }
    
    scheduleDailyReset() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        const timeUntilMidnight = midnight - now;
        
        setTimeout(() => {
            localStorage.removeItem('lastSpinDate');
            const messageBox = document.getElementById('spin-message');
            if (messageBox && !this.state.cooldownActive) {
                messageBox.innerHTML = "New spin available!";
            }
            this.scheduleDailyReset(); // Reschedule for next day
        }, timeUntilMidnight);
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        window.spinGame = new SpinGame();
    } catch (error) {
        console.error('Failed to initialize spin game:', error);
        const messageBox = document.getElementById('spin-message');
        if (messageBox) {
            messageBox.innerHTML = "Failed to load game. Please refresh.";
        }
        
        const spinButton = document.getElementById('spinBtn');
        if (spinButton) spinButton.disabled = true;
    }
});

// Fallback for legacy code compatibility
function drawWheel() {
    if (window.spinGame) {
        window.spinGame.drawWheel();
    }
}

function spinWheel() {
    if (window.spinGame) {
        window.spinGame.spinWheel();
    }
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpinGame;
}
