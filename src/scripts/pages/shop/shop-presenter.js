export default class ShopPresenter {
  #view;
  #apiModel;
  #dbModel;
  #allItems = [];

  constructor({ view, apiModel, dbModel }) {
    this.#view = view;
    this.#apiModel = apiModel;
    this.#dbModel = dbModel;
  }

  async initialGalleryAndMap() {
    try {
      const response = await this.#apiModel.getAllShopItems();
      this.#allItems = response.data;
      this.#view.populateShopItemsList(response.message, this.#allItems);
    } catch (error) {
      console.error('initialGalleryAndMap: error:', error);
    }
  }

  async saveReport(itemId) {
    try {
      const report = await this.#apiModel.getShopItemById(itemId);

      const reportData = {
        id: itemId,
        ...report.shopItem,
      };

      await this.#dbModel.putReport(reportData);
      // this.#view.saveToBookmarkSuccessfully('Success to save to Cart');
    } catch (error) {
      console.error('saveReport: error:', error);
    }
  }

  filterItems(searchTerm, activeFilter) {
    let filteredItems = this.#allItems;

    if (searchTerm) {
      filteredItems = filteredItems.filter((item) => item.itemName.toLowerCase().includes(searchTerm));
    }

    if (activeFilter && activeFilter !== 'All Items') {
      filteredItems = filteredItems.filter((item) => item.category && item.category.toLowerCase() === activeFilter);
    }

    this.#view.populateShopItemsList('Filtered items', filteredItems);
  }
}
