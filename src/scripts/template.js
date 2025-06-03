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
    `
}