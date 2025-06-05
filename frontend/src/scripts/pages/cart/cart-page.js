import { generateCartDetailsOrderTemplate, generateCartItemsTemplate } from "../../template";
import CartPresenter from "./cart-presenter"
import Database from "../../database"

export default class CartPage {
  #presenter = null;

    async render() {
        return `
          <section id="cart" class="cart background-section">
            <div class="cart-container">
              <h1>Shopping Cart</h1>

              <div class="cart-list-container">
                <div class="cart-list">
                  <div class="cart-box cart-item__header">
                    <h3>Daftar Pesanan</h3>
                  </div>
                
                  <div id="cart-list-display"></div>
                </div>
              
                <div class="cart-box cart-details">
                  <h3>Rincian</h3>
                  <div id="cart-details-order-container"></div>
                  
                  <hr />
                  <div class="cart-details-order cart-details-total">
                    <p class="cart-details__name">Total</p>
                    <p class="cart-details__price">150K</p>
                  </div>
                  <hr />
                  <button class="button green-button cart-details__button">Beli</button>
                </div>
              </div>
            </div>
          </section>  
        `
    }

    async afterRender() {
      this.#presenter = new CartPresenter({
        view: this,
        model: Database,
      });
      await this.#presenter.initialGalleryAndMap();
    }

    populateShopItemsList(message, items) {
      const shopItemsHTML = items.reduce((acc, item) => {
        return acc.concat(generateCartItemsTemplate(item));
      }, '');
      
      const cartItemHTML = items.reduce((acc, item) => {
        return acc.concat(generateCartDetailsOrderTemplate(item));
      }, '');
  
      document.getElementById('cart-list-display').innerHTML = `
        <div class="cart-list-display">${shopItemsHTML}</div>
      `;
      
      document.getElementById('cart-details-order-container').innerHTML = `
        <div class="cart-details-order-container">${cartItemHTML}</div>
      `;
    }
}
