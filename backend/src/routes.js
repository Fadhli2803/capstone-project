const { getAllShopItemsHandler, getShopItemByIdHandler } = require("./handler");

const routes = [
    {
        method: 'GET',
        path: '/shopItems',
        handler: getAllShopItemsHandler,
    },
    {
        method: 'GET',
        path: '/shopItems/{id}',
        handler: getShopItemByIdHandler,
    },
];

module.exports = routes;