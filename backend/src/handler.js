const shopItems = require("./shop");

const getAllShopItemsHandler = () => ({
  status: "success",
  data: {
    shopItems,
  },
});

const getShopItemByIdHandler = (request, h) => {
  const { id } = request.params;

  const shopItem = shopItems.filter((n) => n.id === id)[0];

  if (shopItem !== undefined) {
    return {
      status: "success",
      data: {
        shopItem,
      },
    };
  }

  const response = h.response({
    status: "fail",
    message: "Pesanan tidak ditemukan",
  });
  response.code(404);
  return response;
};

module.exports = { getAllShopItemsHandler, getShopItemByIdHandler }