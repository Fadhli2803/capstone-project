const { nanoid } = require("nanoid");

const shopItems = [
    {
        "id": nanoid(16),
        "category": "kendaraan",
        "imageUrl": "biorezLogo.png",
        "itemName": "Sepatu Second",
        "price": 50,
    },
    {
        "id": nanoid(16),
        "category": "elektronik",
        "imageUrl": "biorezLogo-green.png",
        "itemName": "TV Bekas",
        "price": 100,
    },
    {
        "id": nanoid(16),
        "category": "pakaian",
        "imageUrl": "biorezLogo-white.png",
        "itemName": "Hoodie Second",
        "price": 75,
    },
];

module.exports = shopItems;