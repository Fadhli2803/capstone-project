export default class CartPage {
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
                
                  <div class="cart-list-display"></div>
                </div>
              
                <div class="cart-box cart-details">
                  <h3>Rincian</h3>
                  <div class="cart-details-order-container"></div>
                  
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
}
