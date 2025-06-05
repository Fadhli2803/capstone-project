export default class CartPresenter {
  #view;
  #model;
 
  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }
 
  async initialGalleryAndMap() {
    // this.#view.showReportsListLoading();
 
    try {
      const listOfShopItems = await this.#model.getAllShopItems();
    //   const shopItems = await Promise.all(listOfShopItems.map(reportMapper));
    const message = 'Berhasil menambahkan pesanan.';
    
    this.#view.populateShopItemsList(message, listOfShopItems);
    //   this.#view.populateBookmarkedReports(message, shopItems);
    } catch (error) {
      console.error('initialGalleryAndMap: error:', error);
    //   this.#view.populateBookmarkedReportsError(error.message);
    } finally {
    //   this.#view.hideReportsListLoading();
    }
  }
}