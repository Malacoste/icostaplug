// error-handler.js - Enhanced with offline support and better Firebase integration
class ErrorHandler {
    constructor() {
        this.initialized = false;
        this.errorCount = 0;
        this.maxErrorsBeforeReload = 50;
        this.offlineMode = false;
        this.pendingErrors = [];
        this.firebaseAvailable = false;
        this.init();
    }

    init() {
        if (this.initialized) return;
        
        // Create error container
        this.createErrorContainer();
        
        // Set up global error handlers
        this.setupGlobalHandlers();
        
        // Check Firebase availability
        this.checkFirebaseAvailability();
        
        // Set up Firebase error monitoring if available
        if (this.firebaseAvailable) {
            this.setupFirebaseMonitoring();
        }
        
        // Check online status
        this.checkOnlineStatus();
        
        // Set up online/offline event listeners
        this.setupConnectionListeners();
        
        this.initialized = true;
        console.log('Error handler initialized');
    }

    checkFirebaseAvailability() {
        this.firebaseAvailable = typeof firebase !== 'undefined' && 
                                typeof firebase.database !== 'undefined' &&
                                typeof firebase.database.ServerValue !== 'undefined';
        
        if (!this.firebaseAvailable) {
            console.warn('Firebase not available for error logging');
        }
    }

    createErrorContainer() {
        // Wait for document to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.createErrorContainer());
            return;
        }

        // Remove existing container if any
        const existingContainer = document.getElementById('global-error-container');
        if (existingContainer) {
            existingContainer.remove();
        }

        // Create error container
        this.errorContainer = document.createElement('div');
        this.errorContainer.id = 'global-error-container';
        this.errorContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
            display: none;
        `;
        
        if (document.body) {
            document.body.appendChild(this.errorContainer);
        }
    }

    setupGlobalHandlers() {
        // Window error handler
        const originalOnError = window.onerror;
        window.onerror = (message, source, lineno, colno, error) => {
            this.handleError({
                message: error?.message || message,
                filename: source,
                lineno: lineno,
                colno: colno,
                error: error,
                type: 'window_error'
            });
            
            // Call original handler if it exists
            if (typeof originalOnError === 'function') {
                return originalOnError(message, source, lineno, colno, error);
            }
            
            return false;
        };

        // Unhandled promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            this.handleError({
                message: event.reason?.message || 'Unhandled promise rejection',
                reason: event.reason,
                type: 'promise_rejection'
            });
        });

        // Network error monitoring
        this.setupNetworkMonitoring();

        // Custom error events
        this.setupCustomErrorHandling();
    }

    setupCustomErrorHandling() {
        // Listen for custom error events
        window.addEventListener('spinError', (event) => {
            this.handleError({
                message: event.detail?.message || 'Spin error occurred',
                error: event.detail?.error,
                type: 'spin_error',
                severity: event.detail?.severity || 'error'
            });
        });

        window.addEventListener('authError', (event) => {
            this.handleError({
                message: event.detail?.message || 'Authentication error',
                error: event.detail?.error,
                type: 'auth_error',
                severity: 'warning'
            });
        });

        window.addEventListener('firebaseError', (event) => {
            this.handleError({
                message: event.detail?.message || 'Firebase error',
                error: event.detail?.error,
                type: 'firebase_error',
                severity: this.offlineMode ? 'warning' : 'error'
            });
        });

        window.addEventListener('apiError', (event) => {
            this.handleError({
                message: event.detail?.message || 'API error',
                error: event.detail?.error,
                type: 'api_error',
                severity: 'error'
            });
        });
    }

    setupNetworkMonitoring() {
        // Only monitor fetch if it's available
        if (typeof window.fetch === 'function') {
            const originalFetch = window.fetch;
            window.fetch = async (...args) => {
                try {
                    const response = await originalFetch(...args);
                    if (!response.ok && response.status >= 400) {
                        this.handleError({
                            message: `HTTP ${response.status} ${response.statusText}`,
                            url: typeof args[0] === 'string' ? args[0] : args[0]?.url,
                            type: 'network_error',
                            severity: 'warning'
                        });
                    }
                    return response;
                } catch (error) {
                    // Don't log cancelled fetches or offline errors
                    if (error.name !== 'AbortError' && !this.offlineMode) {
                        this.handleError({
                            message: `Fetch error: ${error.message}`,
                            url: typeof args[0] === 'string' ? args[0] : args[0]?.url,
                            error: error,
                            type: 'network_error',
                            severity: 'warning'
                        });
                    }
                    throw error;
                }
            };
        }
    }

    setupFirebaseMonitoring() {
        if (this.firebaseAvailable) {
            try {
                const database = firebase.database();
                const connectedRef = database.ref(".info/connected");
                
                connectedRef.on("value", (snap) => {
                    if (snap.val() === true) {
                        this.offlineMode = false;
                        console.log("Firebase connected");
                        this.processPendingErrors();
                    } else {
                        this.offlineMode = true;
                        this.handleError({
                            message: "Working offline - data will sync when connection is restored",
                            type: "firebase_connection",
                            severity: "warning"
                        }, 'firebase_monitor');
                    }
                });
            } catch (error) {
                console.warn('Firebase monitoring setup failed:', error);
                this.firebaseAvailable = false;
            }
        }
    }

    setupConnectionListeners() {
        window.addEventListener('online', () => {
            this.offlineMode = false;
            this.showSuccess('Connection restored - you are back online');
            this.processPendingErrors();
        });

        window.addEventListener('offline', () => {
            this.offlineMode = true;
            this.showWarning('Connection lost - working in offline mode');
        });
    }

    checkOnlineStatus() {
        this.offlineMode = !navigator.onLine;
        if (this.offlineMode) {
            this.showWarning('You are currently offline - some features may be limited');
        }
    }

    handleError(errorInfo, context = '') {
        this.errorCount++;
        
        // Log to console (but avoid spamming for permission_denied errors)
        if (!errorInfo.message.includes('permission_denied')) {
            console.error(`Error [${context}]:`, errorInfo.error || errorInfo.message);
        }
        
        // Check if we need to reload due to too many errors
        if (this.errorCount >= this.maxErrorsBeforeReload && !this.offlineMode) {
            this.showCriticalError('Too many errors occurred. Reloading page...');
            setTimeout(() => window.location.reload(), 3000);
            return;
        }
        
        // Show user-friendly error message (skip for permission_denied to avoid spam)
        if (!errorInfo.message.includes('permission_denied')) {
            this.showErrorToUser(errorInfo, context);
        }
        
        // Log to Firebase if available and online, otherwise queue it
        if (this.firebaseAvailable && !this.offlineMode) {
            this.logErrorToFirebase(errorInfo, context);
        } else {
            this.queueErrorForLater(errorInfo, context);
        }
        
        // Return error ID for tracking
        return this.generateErrorId();
    }

    showErrorToUser(errorInfo, context = '') {
        if (!this.errorContainer || !document.body) return;
        
        const errorDiv = document.createElement('div');
        const errorId = this.generateErrorId();
        const isCritical = errorInfo.severity === 'critical';
        
        errorDiv.className = `error-message ${errorInfo.severity || 'error'}`;
        errorDiv.id = `error-${errorId}`;
        errorDiv.style.cssText = `
            background: ${isCritical ? '#ff4444' : (errorInfo.severity === 'warning' ? '#ff9900' : '#ff4444')};
            color: white;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            border-left: 4px solid ${isCritical ? '#cc0000' : (errorInfo.severity === 'warning' ? '#e68a00' : '#cc0000')};
            animation: slideIn 0.3s ease;
            cursor: pointer;
            font-family: Arial, sans-serif;
            max-width: 400px;
            word-wrap: break-word;
        `;
        
        errorDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="flex: 1;">
                    <strong>${isCritical ? '🚨 ' : (errorInfo.severity === 'warning' ? '⚠️ ' : '❌ ')}</strong>
                    ${this.getUserFriendlyMessage(errorInfo.message)}
                    ${context ? `<br><small>Context: ${context}</small>` : ''}
                    ${errorId ? `<br><small>Error ID: ${errorId}</small>` : ''}
                    ${this.offlineMode ? '<br><small>⚠️ Offline - error will be logged later</small>' : ''}
                </div>
                <button onclick="document.getElementById('error-${errorId}')?.remove()" 
                    style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; margin-left: 10px; padding: 0;">
                    ×
                </button>
            </div>
        `;
        
        // Add styles if not already added
        this.addErrorStyles();
        
        // Show container
        this.errorContainer.style.display = 'block';
        this.errorContainer.appendChild(errorDiv);
        
        // Auto-remove after 8 seconds for non-critical errors
        if (!isCritical) {
            setTimeout(() => {
                if (errorDiv.parentNode) {
                    errorDiv.remove();
                    // Hide container if no errors left
                    if (this.errorContainer.children.length === 0) {
                        this.errorContainer.style.display = 'none';
                    }
                }
            }, 8000);
        }
    }

    addErrorStyles() {
        if (!document.getElementById('error-handler-styles')) {
            const style = document.createElement('style');
            style.id = 'error-handler-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                
                .error-message {
                    transition: opacity 0.3s ease;
                }
                
                .error-message:hover {
                    opacity: 0.9;
                }
            `;
            document.head.appendChild(style);
        }
    }

    getUserFriendlyMessage(technicalMessage) {
        const messages = {
            'Failed to fetch': 'Network connection failed. Please check your internet connection.',
            'NetworkError': 'Network error occurred. Please check your connection.',
            'QuotaExceededError': 'Storage limit exceeded. Please clear some space.',
            'firebase_connection': 'Connection to server lost. Trying to reconnect...',
            'permission_denied': 'You do not have permission to perform this action.',
            'unavailable': 'Service is temporarily unavailable. Please try again later.',
            'auth/wrong-password': 'Incorrect password. Please try again.',
            'auth/user-not-found': 'No account found with this phone number.',
            'auth/too-many-requests': 'Too many attempts. Please try again later.',
            'auth/invalid-verification-code': 'Invalid verification code. Please try again.',
            'auth/invalid-phone-number': 'Invalid phone number format.',
            'auth/phone-number-already-exists': 'Phone number is already registered.',
            'auth/operation-not-allowed': 'Phone authentication is not enabled.',
            'auth/quota-exceeded': 'SMS quota exceeded. Please try again later.'
        };
        
        for (const [key, value] of Object.entries(messages)) {
            if (technicalMessage.includes(key)) {
                return value;
            }
        }
        
        // Default message for unknown errors
        return 'Something went wrong. Please try again.';
    }

    showCriticalError(message) {
        this.showErrorToUser({
            message: message,
            severity: 'critical'
        });
    }

    showSuccess(message, duration = 3000) {
        if (!this.errorContainer || !document.body) return;
        
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.cssText = `
            background: #00C851;
            color: white;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            border-left: 4px solid #007E33;
            animation: slideIn 0.3s ease;
            cursor: pointer;
            font-family: Arial, sans-serif;
        `;
        
        successDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="flex: 1;">
                    <strong>✅ </strong>
                    ${message}
                </div>
                <button onclick="this.parentNode.parentNode.remove()" 
                    style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; margin-left: 10px; padding: 0;">
                    ×
                </button>
            </div>
        `;
        
        this.errorContainer.style.display = 'block';
        this.errorContainer.appendChild(successDiv);
        
        // Auto-remove after duration
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
                if (this.errorContainer.children.length === 0) {
                    this.errorContainer.style.display = 'none';
                }
            }
        }, duration);
    }

    showWarning(message, duration = 5000) {
        if (!this.errorContainer || !document.body) return;
        
        const warningDiv = document.createElement('div');
        warningDiv.className = 'warning-message';
        warningDiv.style.cssText = `
            background: #ff9900;
            color: black;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            border-left: 4px solid #e68a00;
            animation: slideIn 0.3s ease;
            cursor: pointer;
            font-family: Arial, sans-serif;
        `;
        
        warningDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="flex: 1;">
                    <strong>⚠️ </strong>
                    ${message}
                </div>
                <button onclick="this.parentNode.parentNode.remove()" 
                    style="background: none; border: none; color: black; font-size: 18px; cursor: pointer; margin-left: 10px; padding: 0;">
                    ×
                </button>
            </div>
        `;
        
        this.errorContainer.style.display = 'block';
        this.errorContainer.appendChild(warningDiv);
        
        // Auto-remove after duration
        setTimeout(() => {
            if (warningDiv.parentNode) {
                warningDiv.remove();
                if (this.errorContainer.children.length === 0) {
                    this.errorContainer.style.display = 'none';
                }
            }
        }, duration);
    }

    async logErrorToFirebase(errorInfo, context = '') {
        // Don't log permission_denied errors to avoid infinite loops
        if (errorInfo.message.includes('permission_denied')) {
            return;
        }
        
        if (!this.firebaseAvailable || this.offlineMode) {
            this.queueErrorForLater(errorInfo, context);
            return;
        }
        
        try {
            const database = firebase.database();
            const errorsRef = database.ref('errors');
            
            await errorsRef.push({
                message: errorInfo.message,
                type: errorInfo.type || 'unknown',
                context: context,
                severity: errorInfo.severity || 'error',
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                userAgent: navigator.userAgent,
                url: window.location.href,
                userId: this.getUserId(),
                errorCount: this.errorCount,
                offline: this.offlineMode
            });
        } catch (firebaseError) {
            console.warn('Failed to log error to Firebase:', firebaseError);
            this.queueErrorForLater(errorInfo, context);
        }
    }

    queueErrorForLater(errorInfo, context = '') {
        try {
            const pendingErrors = JSON.parse(localStorage.getItem('pendingErrors') || '[]');
            
            // Don't queue duplicate permission_denied errors
            if (errorInfo.message.includes('permission_denied')) {
                const hasSimilarError = pendingErrors.some(error => 
                    error.errorInfo.message.includes('permission_denied')
                );
                
                if (hasSimilarError) {
                    return;
                }
            }
            
            pendingErrors.push({
                errorInfo: errorInfo,
                context: context,
                timestamp: Date.now(),
                userId: this.getUserId()
            });
            
            localStorage.setItem('pendingErrors', JSON.stringify(pendingErrors));
            
            if (!errorInfo.message.includes('permission_denied')) {
                console.log('Error queued for later sync. Total pending:', pendingErrors.length);
            }
        } catch (error) {
            console.warn('Failed to queue error:', error);
        }
    }

    async processPendingErrors() {
        if (this.offlineMode || !this.firebaseAvailable) return;
        
        try {
            const pendingErrors = JSON.parse(localStorage.getItem('pendingErrors') || '[]');
            if (pendingErrors.length === 0) return;
            
            console.log(`Processing ${pendingErrors.length} pending errors...`);
            
            const newPendingErrors = [];
            
            for (const error of pendingErrors) {
                try {
                    // Skip permission_denied errors
                    if (error.errorInfo.message.includes('permission_denied')) {
                        continue;
                    }
                    
                    await this.logErrorToFirebase(error.errorInfo, error.context);
                } catch (error) {
                    // Keep error in queue if logging failed
                    newPendingErrors.push(error);
                    console.warn('Failed to process pending error:', error);
                }
            }
            
            // Update pending errors list
            localStorage.setItem('pendingErrors', JSON.stringify(newPendingErrors));
            
        } catch (error) {
            console.warn('Failed to process pending errors:', error);
        }
    }

    getUserId() {
        try {
            const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
            return currentUser ? currentUser.phone || 'anonymous' : 'anonymous';
        } catch (error) {
            return 'anonymous';
        }
    }

    generateErrorId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }

    // Public API
    static handle(error, context = '') {
        if (!window.globalErrorHandler) {
            window.globalErrorHandler = new ErrorHandler();
        }
        return window.globalErrorHandler.handleError(error, context);
    }

    static showSuccess(message, duration) {
        if (!window.globalErrorHandler) {
            window.globalErrorHandler = new ErrorHandler();
        }
        window.globalErrorHandler.showSuccess(message, duration);
    }

    static showWarning(message, duration) {
        if (!window.globalErrorHandler) {
            window.globalErrorHandler = new ErrorHandler();
        }
        window.globalErrorHandler.showWarning(message, duration);
    }

    static showCritical(message) {
        if (!window.globalErrorHandler) {
            window.globalErrorHandler = new ErrorHandler();
        }
        window.globalErrorHandler.showCriticalError(message);
    }

    static getOfflineStatus() {
        if (!window.globalErrorHandler) {
            window.globalErrorHandler = new ErrorHandler();
        }
        return window.globalErrorHandler.offlineMode;
    }
}

// Initialize automatically when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.globalErrorHandler = new ErrorHandler();
    });
} else {
    window.globalErrorHandler = new ErrorHandler();
}

// Export for Node.js/testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ErrorHandler;
}
