// import { generateShopItemsTemplate } from '../../template';
import * as BiorezAPI from '../../data/api';
// import ShopPresenter from './shop-presenter';

export default class CartPage {
  #presenter = null;

  async render() {
    return `
        <section id="cart" class="cart">
            <div class="cart-container background-section">
                <h1 class="cart-title">Shopping Cart</h1>

                <div class="cart-item-container">
                <div class="cart-item">
                    <div class="shop-item daftar-pesanan">
                    <h2>Daftar Pesanan</h2>
                    </div>

                    <div class="shop-item cart-list">
                    <div class="cart-img">
                        <img src="images/biorezLogo-green.png" alt="image-shop" class="item-image" />
                    </div>

                    <div class="cart-description">
                        <h3 class="item-name">Barang Bekas 1</h3>
                        <p class="item-description">Lorem ipsum dolor sit amet.</p>
                        <h3 class="item-price">Rp 50.000</h3>
                    </div>
                    </div>

                    <div class="shop-item cart-list">
                    <div class="cart-img">
                        <img src="images/biorezLogo-green.png" alt="image-shop" class="item-image" />
                    </div>

                    <div class="cart-description">
                        <h3 class="item-name">Barang Bekas 1</h3>
                        <p class="item-description">Lorem ipsum dolor sit amet.</p>
                        <h3 class="item-price">Rp 50.000</h3>
                    </div>
                    </div>

                    <div class="shop-item cart-list">
                    <div class="cart-img">
                        <img src="images/biorezLogo-green.png" alt="image-shop" class="item-image" />
                    </div>

                    <div class="cart-description">
                        <h3 class="item-name">Barang Bekas 1</h3>
                        <p class="item-description">Lorem ipsum dolor sit amet.</p>
                        <h3 class="item-price">Rp 50.000</h3>
                    </div>
                    </div>

                    <div class="shop-item cart-list">
                    <div class="cart-img">
                        <img src="images/biorezLogo-green.png" alt="image-shop" class="item-image" />
                    </div>

                    <div class="cart-description">
                        <h3 class="item-name">Barang Bekas 1</h3>
                        <p class="item-description">Lorem ipsum dolor sit amet.</p>
                        <h3 class="item-price">Rp 50.000</h3>
                    </div>
                    </div>

                    <div class="shop-item cart-list">
                    <div class="cart-img">
                        <img src="images/biorezLogo-green.png" alt="image-shop" class="item-image" />
                    </div>

                    <div class="cart-description">
                        <h3 class="item-name">Barang Bekas 1</h3>
                        <p class="item-description">Lorem ipsum dolor sit amet.</p>
                        <h3 class="item-price">Rp 50.000</h3>
                    </div>
                    </div>

                    <div class="card cart-list">
                    <div class="cart-img">
                        <img src="images/biorezLogo-green.png" alt="image-shop" class="item-image" />
                    </div>

                    <div class="cart-description">
                        <h3 class="item-name">Barang Bekas 1</h3>
                        <p class="item-description">Lorem ipsum dolor sit amet.</p>
                        <h3 class="item-price">Rp 50.000</h3>
                    </div>
                    </div>
                </div>

                <div class="cart-price">
                    <div class="shop-item price">
                    <h2>Rincian</h2>
                    <p>Barang Bekas 1 Rp50.000</p>
                    <p>Barang Bekas 2 Rp25.000</p>
                    <p>Barang Bekas 3 Rp75.000</p>
                    <hr />
                    <p>Total Rp150000</p>
                    <hr />
                    <button type="button">Beli</button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    `;
  }

//   async afterRender() {
//     this.#presenter = new ShopPresenter ({
//       view: this,
//       model: BiorezAPI,
//     });

//     await this.#presenter.initialGalleryAndMap();
//   }

//   populateShopItemsList(message, items) {
//     const html = items.reduce((acc, item) => {
//       return acc.concat(generateShopItemsTemplate(item));
//     }, '');
    

//     document.getElementById('shop-list').innerHTML = `
//       <div class="shop-list">${html}</div>
//     `;
//   }
}
