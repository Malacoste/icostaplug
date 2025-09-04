// products.js - iCOSTA Product Database with Complete Pricing
// Pricing Formula: Cost Price + Profit Margin (Sealed: R800-1200, Pre-owned: R600-900)

const products = {
    sealed: [
        {
            id: "iphone-xr-64gb-sealed",
            name: "iPhone XR 64GB",
            price: 5650, // 4850 + 800
            cost: 4850,
            profit: 800,
            description: "Brand new sealed unit with 100% battery health and 1-year warranty",
            storage: "64GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year",
            category: "sealed",
            featured: true,
            image: "images/iphone-xr-sealed.jpg",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgWFIgNjRHQjwvdGV4dD48L3N2Zz4="
        },
        {
            id: "iphone-11-64gb-sealed",
            name: "iPhone 11 64GB", 
            price: 6500, // 5700 + 800
            cost: 5700,
            profit: 800,
            description: "Brand new sealed unit with 100% battery health and 1-year warranty",
            storage: "64GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year",
            category: "sealed",
            featured: true,
            image: "images/iphone-11-sealed.jpg",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTEgNjRHQjwvdGV4dD48L3N2Zz4="
        },
        // ... rest of the sealed products with fallbackImage added to each
    ],
    
    preowned: [
        {
            id: "iphone-xr-preowned",
            name: "iPhone XR",
            price: 4800, // 4200 + 600
            cost: 4200,
            profit: 600,
            description: "Excellent condition, 90%+ battery health, 6-month warranty",
            storage: "64GB",
            condition: "Pre-owned",
            battery: "90%+",
            warranty: "6 months",
            category: "preowned",
            featured: true,
            image: "images/iphone-xr-preowned.jpg",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgWFIgKFVzZWQpPC90ZXh0Pjwvc3ZnPg=="
        },
        // ... rest of the preowned products with fallbackImage added to each
    ],
    
    accessories: [
        // Will be added later
    ]
};

// Pricing configuration
const pricingConfig = {
    deliveryFee: 100,
    sealedProfitMargin: { min: 800, max: 1200 },
    preownedProfitMargin: { min: 600, max: 900 },
    currency: "ZAR",
    currencySymbol: "R"
};

// Utility functions
function calculateProfit(costPrice, sellingPrice) {
    return sellingPrice - costPrice;
}

function calculateSellingPrice(costPrice, isSealed = true) {
    const margin = isSealed ? 
        pricingConfig.sealedProfitMargin.min : 
        pricingConfig.preownedProfitMargin.min;
    
    return costPrice + margin;
}

// Get all featured products
function getFeaturedProducts() {
    const featured = [];
    
    // Add featured sealed products
    products.sealed.forEach(product => {
        if (product.featured) featured.push(product);
    });
    
    // Add featured pre-owned products
    products.preowned.forEach(product => {
        if (product.featured) featured.push(product);
    });
    
    return featured;
}

// Get products by category
function getProductsByCategory(category) {
    return products[category] || [];
}

// Get product by ID
function getProductById(id) {
    for (const category in products) {
        const product = products[category].find(p => p.id === id);
        if (product) return product;
    }
    return null;
}

// Safe image loading with fallback
function getProductImage(product, useFallback = false) {
    if (useFallback && product.fallbackImage) {
        return product.fallbackImage;
    }
    return product.image || (product.fallbackImage || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9kdWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==');
}

// Enhanced product loading with error handling
function loadProductsSafely() {
    try {
        console.log("iCOSTA products.js loaded successfully!");
        console.log(`Loaded ${products.sealed.length} sealed products`);
        console.log(`Loaded ${products.preowned.length} pre-owned products`);
        console.log(`Featured products: ${getFeaturedProducts().length}`);
        
        return {
            success: true,
            sealedCount: products.sealed.length,
            preownedCount: products.preowned.length,
            featuredCount: getFeaturedProducts().length
        };
    } catch (error) {
        console.error("Error loading products:", error);
        return {
            success: false,
            error: error.message,
            sealedCount: 0,
            preownedCount: 0,
            featuredCount: 0
        };
    }
}

// Initialize products
const productsLoadStatus = loadProductsSafely();

// Export for use in other files (if using Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        products, 
        pricingConfig, 
        calculateProfit, 
        calculateSellingPrice,
        getFeaturedProducts,
        getProductsByCategory,
        getProductById,
        getProductImage,
        productsLoadStatus
    };
}