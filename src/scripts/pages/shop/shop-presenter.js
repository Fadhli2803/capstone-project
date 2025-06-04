export default class ShopPresenter {
  #view;
  #apiModel;
  #dbModel;

  constructor({ view, apiModel, dbModel }) {
    this.#view = view;
    this.#apiModel = apiModel;
    this.#dbModel = dbModel;
  }

  async initialGalleryAndMap() {
    try {
      const response = await this.#apiModel.getAllShopItems();
      this.#view.populateShopItemsList(response.message, response.data);
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
}
