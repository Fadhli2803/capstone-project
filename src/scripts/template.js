export function generateShopItemsTemplate(item) {
  return `
      <div class="shop-item" data-itemId="${item.id}">
        <div class="shop-item__image">
          <img src="images/biorezLogo-green.png" alt="image-shop" />
        </div>
        <div class="shop-item__body">
          <h3 class="shop-item__name">${item.itemName}</h3>
          <p class="shop-item__description">Lorem ipsum dolor sit amet.</p>
          <h3 class="shop-item__price">${item.price}K</h3>
          <a href="#/shop" class="shop-item__cart-button button green-button">
            <i class="bx bx-cart"></i>
            Add to Cart
          </a>
        </div>
      </div>
    `;
}

export function generateCartItemsTemplate(item) {
  return `
    <div class="cart-box cart-item">
      <div class="cart-item__image">
        <img src="images/biorezLogo-green.png" alt="image-shop" />
      </div>
        
      <div class="cart-item__body">
        <h3 class="cart-item__name">Barang Bekas 1</h3>
        <p class="cart-item-description">
          Lorem ipsum dolor sit amet.
        </p>
        <h2 class="cart-item__price">50K</h3>
      </div>
    </div>
  `;
}

export function generateCartDetailsOrderTemplate(item) {
  return `
    <div class="cart-details-order">
      <p class="cart-details__name">Barang Bekas 1</p>
      <p class="cart-details__price">50K</p>
    </div>
  `
}