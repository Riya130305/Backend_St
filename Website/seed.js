const Products = require('./model/Product');
const products= [
    {
        name : "Iphone 14 Pro Max",
        img : "https://m.media-amazon.com/images/I/61jLiK+qQQL._SX679_.jpg",
        description : "The iPhone 14 Pro Max is the latest flagship smartphone from Apple, released in September 2022. It features a stunning 6.7-inch Super Retina XDR display, powered by the A16 Bionic chip for lightning-fast performance. The device boasts a Pro camera system with advanced computational photography capabilities, allowing users to capture stunning photos and videos. With its sleek design, improved battery life, and enhanced security features, the iPhone 14 Pro Max offers an exceptional user experience for tech enthusiasts and Apple fans alike."
    },
    {
        name : "Samsung Galaxy S22 Ultra",
        img : "https://m.media-amazon.com/images/I/91+qj8n9sL._SX679_.jpg",
        description : "The Samsung Galaxy S22 Ultra is a high-end smartphone released in February 2022. It features a large 6.8-inch Dynamic AMOLED display with a 120Hz refresh rate, providing a smooth and immersive viewing experience. Powered by the Exynos 2200 or Snapdragon 8 Gen 1 chipset (depending on the region), it delivers exceptional performance for gaming and multitasking. The device boasts a versatile camera system with a 108MP main sensor, ultra-wide lens, and telephoto capabilities, allowing users to capture stunning photos and videos. With its sleek design, long-lasting battery, and advanced features, the Samsung Galaxy S22 Ultra is a top choice for Android enthusiasts."
    },
    {
        name : "OnePlus 10 Pro",
        img : "https://m.media-amazon.com/images/I/61jLiK+qQQL._SX679_.jpg",
        description : "The OnePlus 10 Pro is a flagship smartphone released in January 2022. It features a 6.7-inch Fluid AMOLED display with a 120Hz refresh rate, providing a smooth and vibrant visual experience. Powered by the Qualcomm Snapdragon 8 Gen 1 chipset, it delivers exceptional performance for gaming and multitasking. The device boasts a versatile camera system with a 48MP main sensor, ultra-wide lens, and telephoto capabilities, allowing users to capture stunning photos and videos. With its sleek design, fast charging capabilities, and OxygenOS software, the OnePlus 10 Pro offers an excellent user experience for Android enthusiasts."
    }
];

async function seedDB(){
    await Products.insertMany(products);
    console.log('DB Seeded');
}

module.exports= seedDB;