// firebase-config.js - Enhanced for better error handling and offline support
(function() {
    'use strict';
    
    // Check if Firebase is already initialized
    if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
        console.log('Firebase already initialized');
        return;
    }

    const firebaseConfig = {
        apiKey: "AIzaSyBAfSH9FgESDvb4QHBEVF9l13zblWdLcg8",
        authDomain: "icostaplug.firebaseapp.com",
        databaseURL: "https://icostaplug-default-rtdb.firebaseio.com",
        projectId: "icostaplug",
        storageBucket: "icostaplug.appspot.com",
        messagingSenderId: "911201863766",
        appId: "1:911201863766:web:7cf34a8f189d47e9cb53f7"
    };

    try {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        console.log('Firebase initialized successfully');
        
        // Enable offline persistence
        enablePersistence();
        
        // Monitor connection state
        monitorConnection();
            
    } catch (error) {
        console.error('Firebase initialization failed:', error);
        handleFirebaseError(error);
    }

    function enablePersistence() {
        try {
            const database = firebase.database();
            
            // Enable offline persistence
            database.ref('.info/connected').on('value', function(snapshot) {
                if (snapshot.val() === true) {
                    console.log('Firebase connected - online');
                    // Sync any offline data when connection is restored
                    syncOfflineData();
                } else {
                    console.log('Firebase disconnected - working offline');
                    // Show offline indicator to user
                    showOfflineIndicator();
                }
            });
            
            console.log('Firebase persistence enabled');
        } catch (error) {
            console.warn('Firebase persistence setup:', error);
            // Continue without persistence
        }
    }

    function monitorConnection() {
        try {
            const database = firebase.database();
            const connectedRef = database.ref(".info/connected");
            
            connectedRef.on("value", (snap) => {
                if (snap.val() === true) {
                    console.log("Firebase connected");
                    hideOfflineIndicator();
                } else {
                    console.log("Firebase disconnected");
                    showOfflineIndicator();
                }
            });
        } catch (error) {
            console.warn('Connection monitoring failed:', error);
        }
    }

    function syncOfflineData() {
        // Sync any locally stored data that needs to be pushed to Firebase
        try {
            // Sync spin data
            const localSpins = JSON.parse(localStorage.getItem('pendingSpins') || '[]');
            if (localSpins.length > 0) {
                console.log(`Syncing ${localSpins.length} pending spins`);
                syncSpins(localSpins);
            }
            
            // Sync user data updates
            const userUpdates = JSON.parse(localStorage.getItem('pendingUserUpdates') || '[]');
            if (userUpdates.length > 0) {
                console.log(`Syncing ${userUpdates.length} user updates`);
                syncUserUpdates(userUpdates);
            }
        } catch (error) {
            console.error('Error syncing offline data:', error);
        }
    }

    function syncSpins(spins) {
        const database = firebase.database();
        const spinsRef = database.ref('spins');
        
        spins.forEach(spin => {
            spinsRef.push(spin)
                .then(() => {
                    console.log('Spin synced successfully:', spin.code);
                    // Remove from pending spins
                    removeFromPendingSpins(spin.code);
                })
                .catch(error => {
                    console.error('Error syncing spin:', error);
                    // Don't remove from pending if sync failed - will retry later
                });
        });
    }

    function syncUserUpdates(updates) {
        const database = firebase.database();
        
        updates.forEach(update => {
            const userRef = database.ref('users/' + update.phone);
            userRef.update(update.data)
                .then(() => {
                    console.log('User update synced successfully:', update.phone);
                    // Remove from pending updates
                    removeFromPendingUpdates(update.phone);
                })
                .catch(error => {
                    console.error('Error syncing user update:', error);
                    // Don't remove from pending if sync failed - will retry later
                });
        });
    }

    function removeFromPendingSpins(code) {
        try {
            const pendingSpins = JSON.parse(localStorage.getItem('pendingSpins') || '[]');
            const updatedSpins = pendingSpins.filter(spin => spin.code !== code);
            localStorage.setItem('pendingSpins', JSON.stringify(updatedSpins));
        } catch (error) {
            console.error('Error removing from pending spins:', error);
        }
    }

    function removeFromPendingUpdates(phone) {
        try {
            const pendingUpdates = JSON.parse(localStorage.getItem('pendingUserUpdates') || '[]');
            const updatedUpdates = pendingUpdates.filter(update => update.phone !== phone);
            localStorage.setItem('pendingUserUpdates', JSON.stringify(updatedUpdates));
        } catch (error) {
            console.error('Error removing from pending updates:', error);
        }
    }

    function showOfflineIndicator() {
        // Check if document is ready before manipulating DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', showOfflineIndicator);
            return;
        }
        
        // Create or show offline indicator
        let indicator = document.getElementById('offline-indicator');
        if (!indicator && document.body) {
            indicator = document.createElement('div');
            indicator.id = 'offline-indicator';
            indicator.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: #ff9900;
                color: #000;
                padding: 10px 15px;
                border-radius: 5px;
                z-index: 10000;
                font-weight: bold;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            `;
            indicator.innerHTML = '⚠️ Offline Mode - Working locally';
            document.body.appendChild(indicator);
        } else if (indicator) {
            indicator.style.display = 'block';
        }
    }

    function hideOfflineIndicator() {
        // Check if document is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', hideOfflineIndicator);
            return;
        }
        
        const indicator = document.getElementById('offline-indicator');
        if (indicator) {
            indicator.style.display = 'none';
        }
    }

    function handleFirebaseError(error) {
        console.error('Firebase Error:', error);
        
        // Safe error handling without ErrorHandler dependency
        setTimeout(() => {
            if (typeof ErrorHandler !== 'undefined') {
                try {
                    ErrorHandler.handle({
                        message: 'Failed to initialize database connection',
                        error: error,
                        severity: 'warning'
                    }, 'firebase_init');
                } catch (e) {
                    // Fallback if ErrorHandler itself is broken
                    showSimpleError('Connection issue - working offline');
                }
            } else {
                // Fallback error notification
                showSimpleError('Connection issue - working offline');
            }
        }, 2000);
    }

    function showSimpleError(message) {
        // Check if document is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => showSimpleError(message));
            return;
        }
        
        if (!document.body) return;
        
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff4444;
            color: white;
            padding: 15px;
            border-radius: 5px;
            z-index: 10000;
            max-width: 300px;
        `;
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 5000);
    }

    // Utility function to save data for offline sync
    function saveForOfflineSync(data, type) {
        try {
            if (type === 'spin') {
                const pendingSpins = JSON.parse(localStorage.getItem('pendingSpins') || '[]');
                pendingSpins.push(data);
                localStorage.setItem('pendingSpins', JSON.stringify(pendingSpins));
            } else if (type === 'userUpdate') {
                const pendingUpdates = JSON.parse(localStorage.getItem('pendingUserUpdates') || '[]');
                pendingUpdates.push(data);
                localStorage.setItem('pendingUserUpdates', JSON.stringify(pendingUpdates));
            }
        } catch (error) {
            console.error('Error saving for offline sync:', error);
        }
    }

    // Enhanced Firebase database reference with offline support
    function getDatabaseRef(path) {
        try {
            const database = firebase.database();
            const ref = database.ref(path);
            
            // Add offline capability
            ref.onDisconnect().cancel();
            return ref;
        } catch (error) {
            console.error('Error getting database reference:', error);
            // Return a mock ref for offline use
            return {
                set: () => Promise.reject('Offline'),
                update: () => Promise.reject('Offline'),
                push: () => ({ set: () => Promise.reject('Offline') }),
                on: () => {},
                off: () => {},
                once: () => Promise.reject('Offline')
            };
        }
    }

    // Export for testing and global access
    if (typeof window !== 'undefined') {
        window.FirebaseHelper = {
            config: firebaseConfig,
            saveForOfflineSync: saveForOfflineSync,
            getDatabaseRef: getDatabaseRef,
            syncOfflineData: syncOfflineData,
            showOfflineIndicator: showOfflineIndicator,
            hideOfflineIndicator: hideOfflineIndicator
        };
    }

    // Export for Node.js/testing
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { 
            firebaseConfig, 
            firebase,
            FirebaseHelper: {
                saveForOfflineSync,
                getDatabaseRef,
                syncOfflineData,
                showOfflineIndicator,
                hideOfflineIndicator
            }
        };
    }
})();
