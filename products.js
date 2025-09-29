// products.js - iCOSTA Product Database with Complete iPhone Pricing
// Pricing Formula: Cost Price + Profit Margin (Sealed: R800-1200, Pre-owned: R600-900)

const products = {
    sealed: [

         {
            id: "iphone-16-128gb-sealed",
            name: "iPhone 16 128GB",
            price: 16499, // 15499 + 1000
            cost: 15499,
            profit: 1000,
            description: "Brand new sealed with Dynamic Island and 48MP Main camera",
            storage: "128GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: true,
            image: "https://images.unsplash.com/photo-1729331435024-90762a474330?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTUgMTI4R0I8L3RleHQ+PC9zdmc+"
        },

            {
            id: "iphone-16-pro-max-256gb-sealed",
            name: "iPhone 16 Pro Max 256GB",
            price: 25499, // 24499 + 1000
            cost: 24499,
            profit: 1000,
            description: "Brand new sealed Titanium finish with Dynamic Island and ProMotion display",
            storage: "256GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: true,
            image: "https://scontent.cdninstagram.com/v/t51.29350-15/462454552_419483314518338_3219586658657122709_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=X2NeWQklWt4Q7kNvwEd7Muu&_nc_oc=AdlXyRAPSpjJGHmEHVJKBjhSPgh8cWdM3a5rI7bh0lE0lejXAGNDyZjCPUNztrDg1Vc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=RAwY_mnN0cbBgWHfwAuCHA&oh=00_AfbyZLqcv5jdhJy6RPc5fHG0aohQPASYhLgKPCQ7ainpyQ&oe=68E0A393",
            fallbackImage: "https://images.unsplash.com/photo-1720357632099-6d84cd7ee044?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lJTIwMTUlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: "iphone-17-pro-256gb-sealed",
            name: "iPhone 17 Pro 256GB",
            price: 28999, // 27999 + 1000
            cost: 27999,
            profit: 1000,
            description: "Brand new sealed with Titanium design and Advanced camera system",
            storage: "128GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: true,
            image: "https://images.unsplash.com/photo-1758327059270-fdff7314104c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTUgUHJvIDEyOEdCPC90ZXh0Pjwvc3ZnPg=="
        },


        {
            id: "iphone-15-pro-max-256gb-sealed",
            name: "iPhone 15 Pro Max 256GB",
            price: 32999, // 31999 + 1000
            cost: 31999,
            profit: 1000,
            description: "Brand new sealed Titanium finish with Dynamic Island and ProMotion display",
            storage: "256GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: false,
            image: "https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            fallbackImage: "https://images.unsplash.com/photo-1720357632099-6d84cd7ee044?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lJTIwMTUlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: "iphone-15-pro-128gb-sealed",
            name: "iPhone 15 Pro 128GB",
            price: 27999, // 26999 + 1000
            cost: 26999,
            profit: 1000,
            description: "Brand new sealed with Titanium design and Advanced camera system",
            storage: "128GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: true,
            image: "https://images.unsplash.com/photo-1702289613007-8b830e2520b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTUgUHJvIDEyOEdCPC90ZXh0Pjwvc3ZnPg=="
        },
        {
            id: "iphone-15-128gb-sealed",
            name: "iPhone 15 128GB",
            price: 21999, // 20999 + 1000
            cost: 20999,
            profit: 1000,
            description: "Brand new sealed with Dynamic Island and 48MP Main camera",
            storage: "128GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: false,
            image: "https://images.unsplash.com/photo-1695048132839-33b4a915083c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTUgMTI4R0I8L3RleHQ+PC9zdmc+"
        },
        {
            id: "iphone-14-pro-max-256gb-sealed",
            name: "iPhone 14 Pro Max 256GB",
            price:  18499, // 17499 + 1000
            cost: 17499,
            profit: 1000,
            description: "Brand new sealed with Always-On display and Emergency SOS via satellite",
            storage: "256GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: true,
            image: "https://scontent.cdninstagram.com/v/t51.29350-15/341307485_616651656650356_872907121966073292_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=fXlHWE1ghSMQ7kNvwFCDOhT&_nc_oc=AdkxvOM3G8DsIYRfltaJKowZ3slazbDwgZl3-A5ZOkkGbbnKeU3-ruptO6EHEptu9go&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EjX9ScsFcEa7WQAPFdZd0g&oh=00_AfZFAzyTT9LaDMGeVCbvI_6GsDFQJeo9B7KSHPaVjddurw&oe=68E0BF20",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTQgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        },
         {
            id: "iphone-14-pro-128gb-sealed",
            name: "iPhone 14 Pro 128GB",
            price:  16499, // 15499 + 1000
            cost: 15499,
            profit: 1000,
            description: "Brand new sealed with Always-On display and Emergency SOS via satellite",
            storage: "128GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: true,
            image: "https://images.unsplash.com/photo-1678625502522-0cb82e3d0d8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTQgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        },
        {
            id: "iphone-14-plus-128gb-sealed",
            name: "iPhone 14 plus 128GB",
            price: 14199, // 13199 + 1000
            cost: 13199,
            profit: 1000,
            description: "Brand new sealed with improved cameras and crash detection",
            storage: "128GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: false,
            image: "https://images.unsplash.com/photo-1663491336030-916d5e5c9f6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTQgMTI4R0I8L3RleHQ+PC9zdmc+"
        },
        {
            id: "iphone-13-pro-128gb-sealed",
            name: "iPhone 13 Pro 128GB",
            price: 13499, // 12499 + 1000
            cost: 12499,
            profit: 1000,
            description: "Brand new sealed with ProMotion display and Cinematic mode",
            storage: "128GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: false,
            image: "https://images.unsplash.com/photo-1632661674596-618e45e56c53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMzc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTMgUHJvIDI1NkdCPC90ZXh0Pjwvc3ZnPg=="
        },
         {
            id: "iphone-13-pro-max-128gb-sealed",
            name: "iPhone 13 Pro Max 128GB",
            price: 14499, // 13499 + 1000
            cost: 13499,
            profit: 1000,
            description: "Brand new sealed with Cinematic mode",
            storage: "128GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: false,
            image: "https://images.unsplash.com/photo-1641460232841-e283da213de6?q=80&w=805&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMzc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTMgUHJvIDI1NkdCPC90ZXh0Pjwvc3ZnPg=="
        },
         {
            id: "iphone-13-128gb-sealed",
            name: "iPhone 13 128GB",
            price: 10499, // 9499 + 1000 
            cost: 9499,
            profit: 1000,
            description: "Brand new sealed with ProMotion display and Cinematic mode",
            storage: "128GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: true,
            image: "https://images.unsplash.com/photo-1639313265378-1c51cf8cfebd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMzc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTMgUHJvIDI1NkdCPC90ZXh0Pjwvc3ZnPg=="
        },
         {
            id: "iphone-12-pro-128gb-sealed",
            name: "iPhone 12 Pro 128GB",
            price: 10999, // 9999 + 1000  
            cost: 9999,
            profit: 1000,
            description: "Brand new sealed with LiDAR scanner and Night mode",
            storage: "128GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: true,
            image: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMzc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTMgUHJvIDI1NkdCPC90ZXh0Pjwvc3ZnPg=="
        },
         {
            id: "iphone-12-pro-max-128gb-sealed",
            name: "iPhone 12 Pro Max 128GB",
            price: 12699, // 11699 + 1000
            cost: 11699,
            profit: 1000,
            description: "Brand new sealed with LiDAR scanner and Night mode",
            storage: "128GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: true,
            image: "https://images.unsplash.com/photo-1606541133802-257821b63813?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMzc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTMgUHJvIDI1NkdCPC90ZXh0Pjwvc3ZnPg=="
        },
         {
            id: "iphone-12-64gb-sealed",
            name: "iPhone 12 64GB",
            price: 8499, // 7499 + 1000 
            cost: 7499,
            profit: 1000,
            description: "Brand new sealed with ProMotion display and Cinematic mode",
            storage: "64GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: true,
            image: "https://scontent.cdninstagram.com/v/t51.29350-15/332553512_3380389455563291_2525675095499793090_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=xe47ug7mo3MQ7kNvwHT3wAC&_nc_oc=Adm62-XVc4quwxBcBgp-LeiepCYcPhHLmwSCb5yLvkkWZAeMxL3lENMbcYXgOIgDBkQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EjX9ScsFcEa7WQAPFdZd0g&oh=00_AfYaZnLi9yGDxtfslaLvxFiApa_xa-QCY1FQNR491VyFLw&oe=68E0AC2A",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMzc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTMgUHJvIDI1NkdCPC90ZXh0Pjwvc3ZnPg=="
        },
         {
            id: "iphone-11-pro-256gb-sealed",
            name: "iPhone 11 Pro 256GB",
            price: 8299, // 7299 + 1000
            cost: 7299,
            profit: 1000,
            description: "Brand new sealed with Super Retina XDR display and Triple-camera system",
            storage: "256GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: true,
            image: "https://scontent.cdninstagram.com/v/t51.29350-15/277893495_129506796078557_4583227559068414311_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=6WJ5ewUpZz4Q7kNvwF3X0PQ&_nc_oc=AdknSNHNZJqdxXxCNc7gzgbM5yqe5YWaImwcCtI_M8h9G4ZyOrs4I_-y7r2bFBxLYjQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=QJ92N9EHsGtqsdAcwjPHjg&oh=00_AfamXuBRWgiW7NXJI-UBBfP71OUUf6W2XLDpUFlzSevSKQ&oe=68E0B614",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMzc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTMgUHJvIDI1NkdCPC90ZXh0Pjwvc3ZnPg=="
        },
         {
            id: "iphone-11-pro-max-64gb-sealed",
            name: "iPhone 11 Pro Max 64GB",
            price: 9499, // 8499 + 1000
            cost: 8499,
            profit: 1000,
            description: "Brand new sealed with Super Retina XDR display and Triple-camera system",
            storage: "64GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: false,
            image: "https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTElMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMzc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTMgUHJvIDI1NkdCPC90ZXh0Pjwvc3ZnPg=="
        },
         {
            id: "iphone-11-64gb-sealed",
            name: "iPhone 11 64GB",
            price: 6699, // 5699 + 1000
            cost: 5699,
            profit: 1000,
            description: "Brand new sealed with Liquid Retina HD display and Dual-camera system",
            storage: "64GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: true,
            image: "https://images.unsplash.com/photo-1569429594806-192f16855a0e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwMTF8ZW58MHx8MHx8fDA%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMzc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTMgUHJvIDI1NkdCPC90ZXh0Pjwvc3ZnPg=="
        },
              {
            id: "iphone-XR-64gb-sealed",
            name: "iPhone XR 64GB",
            price: 5850, // 4850 + 1000
            cost: 4850,
            profit: 1000,
            description: "Brand new sealed with Liquid Retina HD display and Dual-camera system",
            storage: "64GB",
            condition: "Sealed",
            battery: "100%",
            warranty: "1 year iCOSTA warranty",
            category: "sealed",
            featured: false,
            image: "https://images.unsplash.com/photo-1632661674596-618e45e56c53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMzc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTMgUHJvIDI1NkdCPC90ZXh0Pjwvc3ZnPg=="
        },
    ],
    
    preowned: [
      

         {
            id: "iphone-15-preowned 128GB",
            name: "iPhone 15 128GB",
            price:  11999, // 10999 + 1000 
            cost: 10499,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "128GB",
            condition: "Pre-owned",
            battery: "90+%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: true,
            image: "https://images.unsplash.com/photo-1747037139550-72ab7ddaf97c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        }, 
         {
            id: "iphone-15-plus-preowned 128GB",
            name: "iPhone 15 plus 128GB",
            price:  13499, // 12799 + 700
            cost: 12799,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "128GB",
            condition: "Pre-owned",
            battery: "90+%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: false,
            image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        },
        
        {
            id: "iphone-15-pro-256gb-preowned",
            name: "iPhone 15 Pro Max 256GB",
            price: 15499, // 14899 + 700
            cost: 14899,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "256GB",
            condition: "Pre-owned",
            battery: "90%+",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: false,
            image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        }, {
            id: "iphone-15-pro-max-256gb-preowned",
            name: "iPhone 15 Pro Max 256GB",
            price: 19299, // 18599 + 700
            cost: 18499,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "256GB",
            condition: "Pre-owned",
            battery: "90+%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: false,
            image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        },
          {
            id: "iphone-14-preowned 128GB",
            name: "iPhone 14 128GB",
            price:  10299, // 9499 + 800
            cost: 9499,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "128GB",
            condition: "Pre-owned",
            battery: "90+%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: true,
            image: "https://scontent.cdninstagram.com/v/t51.82787-15/550797615_17940847851061661_3155672488106539635_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=jvHtolutlmsQ7kNvwEiPicO&_nc_oc=AdlHsZc4g93vYIDlgM7V0HE1uxhUwUIlxC3u3PePr39wZmgLJAnlhJ2T2UVSVaJ6pOg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EjX9ScsFcEa7WQAPFdZd0g&oh=00_AfbnmPsTm3JyyFG18g48oncti1MhH7T5IYzhTR9897VUWA&oe=68E09E42",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        }, 
         {
            id: "iphone-14-plus-preowned 128GB",
            name: "iPhone 14 plus 128GB",
            price:  11299, // 10499 + 800
            cost: 10499,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "128GB",
            condition: "Pre-owned",
            battery: "90+%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: false,
            image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        },
        
        {
            id: "iphone-14-pro-256gb-preowned",
            name: "iPhone 14 Pro Max 256GB",
            price: 12999, // 12499 + 700
            cost: 12499,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "256GB",
            condition: "Pre-owned",
            battery: "90%+",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: false,
            image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        }, {
            id: "iphone-14-pro-max-256gb-preowned",
            name: "iPhone 14 Pro Max 256GB",
            price: 15499, // 14499 + 700
            cost: 14499,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "256GB",
            condition: "Pre-owned",
            battery: "90+%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: false,
            image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        },
          {
            id: "iphone-13-preowned 128GB",
            name: "iPhone 13 128GB",
            price:  8899, // 7999 + 900
            cost: 7999,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "128GB",
            condition: "Pre-owned",
            battery: "90+%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: true,
            image: "https://images.unsplash.com/photo-1670264273680-1a968ee79c3d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        }, 
        
        {
            id: "iphone-13-pro-256gb-preowned",
            name: "iPhone 13 Pro 256GB",
            price: 11599, // 10899 + 700
            cost: 10899,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "256GB",
            condition: "Pre-owned",
            battery: "90%+",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: true,
            image: "https://scontent.cdninstagram.com/v/t51.82787-15/545027945_17934080913076111_3340818306434198025_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=I-S91lvu6GIQ7kNvwGr0Evo&_nc_oc=AdlRGAnawa--nibwHCKYSptCAAb77RiUX7PIUunmJPeQtRymgJT0nK_yfDy1Wp9mUUI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EjX9ScsFcEa7WQAPFdZd0g&oh=00_AfZ88wJaNgI1lsVaIcG7_ZOx4QZv1q5NfEwrOOhFQfDvxQ&oe=68E0ACCD",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        }, {
            id: "iphone-13-pro-max-256gb-preowned",
            name: "iPhone 13 Pro Max 256GB",
            price: 13599, // 10899 + 700
            cost: 12499,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "256GB",
            condition: "Pre-owned",
            battery: "90+%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: false,
            image: "https://images.unsplash.com/photo-1665406514892-16dccc45aaf8?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        },
                  {
            id: "iphone-12-preowned 128GB",
            name: "iPhone 12 128GB",
            price:  6699, //6199 + 500
            cost: 6199,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "128GB",
            condition: "Pre-owned",
            battery: "90+%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: true,
            image: "https://images.unsplash.com/photo-1642944082901-4eead3110f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        }, 
        
        {
            id: "iphone-12-pro-256gb-preowned",
            name: "iPhone 12 Pro Max 256GB",
            price: 8799, // 7999 + 800
            cost: 7999,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "256GB",
            condition: "Pre-owned",
            battery: "90%+",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: true,
            image: "https://images.unsplash.com/photo-1605457212378-968478b57218?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        }, {
            id: "iphone-12-pro-max-256gb-preowned",
            name: "iPhone 11 Pro Max 256GB",
            price: 11399, // 10699 + 700
            cost: 10699,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "256GB",
            condition: "Pre-owned",
            battery: "90+%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: false,
            image: "https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTIlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        },

                  {
            id: "iphone-11-preowned 128GB",
            name: "iPhone 11 128GB",
            price:  5699, // 4999 + 700
            cost: 4999,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "128GB",
            condition: "Pre-owned",
            battery: "90+%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: true,
            image: "https://images.unsplash.com/photo-1596558450426-f4a167918877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDExfGVufDB8fDB8fHww",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        }, 
        
        {
            id: "iphone-11-pro-256gb-preowned",
            name: "iPhone 11 Pro Max 256GB",
            price: 7099, // 6399 + 700
            cost: 6399,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "256GB",
            condition: "Pre-owned",
            battery: "90%+",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: false,
            image: "https://images.unsplash.com/photo-1593158066451-95a10517b62d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTElMjBwcm98ZW58MHx8MHx8fDA%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        }, {
            id: "iphone-11-pro-max-256gb-preowned",
            name: "iPhone 11 Pro Max 256GB",
            price: 8499, // 7699 + 700
            cost: 7699,
            profit: 700,
            description: "Excellent condition, 90%+ battery health, 3-month warranty",
            storage: "256GB",
            condition: "Pre-owned",
            battery: "90+%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: true,
            image: "https://images.unsplash.com/photo-1603898037225-1bea09c550c0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lJTIwMTElMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgMTIgUHJvIE1heCAyNTZHQjwvdGV4dD48L3N2Zz4="
        },
        
        {
            id: "iphone-xr-64gb-preowned",
            name: "iPhone XR 64GB",
            price: 4699, // 4199 + 500
            cost: 4199,
            profit: 500,
            description: "Fair condition, 80% battery health, 3-month warranty",
            storage: "64GB",
            condition: "Pre-owned",
            battery: "80%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: true,
            image: "https://images.unsplash.com/photo-1576087317272-798fb5cb70b5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lJTIweHJ8ZW58MHx8MHx8fDA%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgWCA2NEdCPC90ZXh0Pjwvc3ZnPg=="
        },
        
        {
            id: "iphone-x-64gb-preowned",
            name: "iPhone X 64GB",
            price: 4499, // 3999 + 500
            cost: 3999,
            profit: 500,
            description: "Fair condition, 80% battery health, 3-month warranty",
            storage: "64GB",
            condition: "Pre-owned",
            battery: "80%",
            warranty: "3 months iCOSTA warranty",
            category: "preowned",
            featured: true,
            image: "https://images.unsplash.com/photo-1515054562254-30a1b0ebe227?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIweHxlbnwwfHwwfHx8MA%3D%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5pUGhvbmUgWCA2NEdCPC90ZXh0Pjwvc3ZnPg=="
        },
      
    ],
    
    accessories: [
         {
            id: "airpods",
            name: " AirPods Pro 4 (Brand New)",
            price: 150, // 100 + 50
            cost: 50,
            profit: 500,
            description: "Brand new with Wired Charging Case",
            category: "Brand New",
            featured: true,
            image: "https://scontent.cdninstagram.com/v/t51.29350-15/501361222_702839088993603_8827997773609509108_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=BZ5bZb5sa2oQ7kNvwGwFz-b&_nc_oc=AdlFE73dbUCgluCumOJqk0KW2ltM6z6qMe36yCRdhPkoCENWY78jtXI6gSjL4UBOXJU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=fGNaoi0-n32ggYA1kPwoGg&oh=00_Afb-rreUjPmSOffW7ksA2BiF3j47umx4EVJ9rbNO8zskEA&oe=68E0BA12",
            fallbackImage: "https://cdn.pixabay.com/photo/2020/06/09/14/59/headphones-5278701_640.jpg"
        }, 
        
        {
            id: "airpods",
            name: "TWS i12 Wireless Earphones (Brand New)",
            price: 100, // 50 + 50
            cost: 50,
            profit: 500,
            description: "Brand new with Charging Case",
            category: "Brand New",
            featured: true,
            image: "https://scontent.cdninstagram.com/v/t51.82787-15/540495706_18406988953112725_2120558712362367558_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=2doYgT3hb9EQ7kNvwHYnj2I&_nc_oc=AdkDYLZxpMLnGVqWjdCZjIDYEgZjMgURItn6lkUTZlAmWZz7rMU1qoeQ7BhR3mvkO4U&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=fGNaoi0-n32ggYA1kPwoGg&oh=00_AfZoYeJ7ByFnDeiYJYsLJqwLIHMuyTGuAzZzCXcwcmevMQ&oe=68E0CCE0",
            fallbackImage: "https://cdn.pixabay.com/photo/2020/06/09/14/59/headphones-5278701_640.jpg"
        },
        
        {
            id: "airpods",
            name: " AirPods Pro 3 (Brand New)",
            price: 250, // 200 + 50
            cost: 50,
            profit: 500,
            description: "Brand new with and Wireless Charging Case",
            category: "Brand New",
            featured: true,
            image: "https://scontent.cdninstagram.com/v/t51.75761-15/475349288_18376930561112725_8631150232561441097_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=bp8ityIgdZoQ7kNvwFCt6Ic&_nc_oc=AdnGZnQDCgOxHI29NSVwM9IHCQRXtCzM7EJ7mbuEeWExkjj7mRlx-Ne6-fVPh0jOkNs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=fGNaoi0-n32ggYA1kPwoGg&oh=00_AfaAd0H94Km3r0g7yYEmk80FhqNwNO6HfwbQ7lcZJG505Q&oe=68E0C85F",
            fallbackImage: "https://cdn.pixabay.com/photo/2020/06/09/14/59/headphones-5278701_640.jpg"
        },
        
         {
            id: "Privacy-Screen-Protector",
            name: " Privacy Tempered Glass Screen Protector",
            price: 150, // 100 + 50
            cost: 10,
            profit: 500,
            description: "High-quality privacy tempered glass screen protector for iPhone & Android phones",
            category: "accessories",
            featured: true,
            image: "https://scontent.cdninstagram.com/v/t51.29350-15/502744015_701561375606990_797909893167672458_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=RAc9wXXH0MMQ7kNvwHCg4x3&_nc_oc=AdnRl69983DHS9LOoOkvdVDqhxUeluyH7ep5oMQu8NPnuj8J_aQqxepBvV0Z5tH4v4M&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=fGNaoi0-n32ggYA1kPwoGg&oh=00_AfZNjkaCqUd2tpd1t2qC69Sl-E6HolSuh-f1EulTdnnoAA&oe=68E0B264",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BaXJQb2RzIFBybyAybmQgR2VuPC90ZXh0Pjwvc3ZnPg=="
        },
         {
            id: "fast charging power adapter",
            name: " Fast Charging Power Adapter",
            price: 149, 
            cost: 30,
            profit: 50,
            description: "15W USB-C Power Adapter for fast charging",
            category: "accessories",
            featured: false,
            image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BaXJQb2RzIFBybyAybmQgR2VuPC90ZXh0Pjwvc3ZnPg=="
        },
         {
            id: "fast charging cable",
            name: " Fast Charging Cable",
            price: 99,
            cost: 30,
            profit: 50,
            description: "1m USB-C to USB-C/Lightning Cable for fast charging",
            category: "accessories",
            featured: true,
            image: "https://images.unsplash.com/photo-1603625953383-c75907506658?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BaXJQb2RzIFBybyAybmQgR2VuPC90ZXh0Pjwvc3ZnPg=="
        },


        {
            id: "apple-watch-series-9",
            name: "Apple Watch Series 9 45mm",
            price: 8999, // 8399 + 600
            cost: 8399,
            profit: 600,
            description: "Brand new with Double Tap feature and S9 SiP chip",
            category: "accessories",
            featured: false,
            image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BcHBsZSBXYXRjaCBTOSA0NW1tPC90ZXh0Pjwvc3ZnPg=="
        },
        {
            id: "magsafe-charger",
            name: "Apple MagSafe Charger",
            price: 999, // 799 + 200
            cost: 799,
            profit: 200,
            description: "Original Apple MagSafe Charger with fast charging capability",
            category: "accessories",
            featured: false,
            image: "https://images.unsplash.com/photo-1609091839311-d5365f2e0c5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5NYWdTYWZlIENoYXJnZXI8L3RleHQ+PC9zdmc+"
        },
        {
            id: "iphone-clear-case",
            name: "Clear Case for all iPhones/Androids",
            price: 150, // 100 + 50
            cost: 10,
            profit: 300,
            description: "Clear Case with MagSafe compatibility",
            category: "accessories",
            featured: true,
            image: "https://scontent.cdninstagram.com/v/t51.29350-15/455626496_8370273703030314_9039707180371859362_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=GSvcPNwadPQQ7kNvwG09uSZ&_nc_oc=Admz8jPOjm2ZKRHf-qPXbRcTRD2eFcwJngnTa0Sw20zZ2JG38Uo5qpfKcW7THriRJGc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=fGNaoi0-n32ggYA1kPwoGg&oh=00_AfZiM0s7t6c_BLKoJLe3kkUWOubEZrm8v26tHBsKA3so7g&oe=68E0AAA3",
            fallbackImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5MZWF0aGVyIENhc2UgZm9yIGlQaG9uZSAxNTwvdGV4dD48L3N2Zz4="
        }
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
    
    // Add featured accessories
    products.accessories.forEach(product => {
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
        console.log(`Loaded ${products.accessories.length} accessories`);
        console.log(`Featured products: ${getFeaturedProducts().length}`);
        
        return {
            success: true,
            sealedCount: products.sealed.length,
            preownedCount: products.preowned.length,
            accessoriesCount: products.accessories.length,
            featuredCount: getFeaturedProducts().length
        };
    } catch (error) {
        console.error("Error loading products:", error);
        return {
            success: false,
            error: error.message,
            sealedCount: 0,
            preownedCount: 0,
            accessoriesCount: 0,
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
