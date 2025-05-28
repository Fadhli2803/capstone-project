export default class Scanner {
  #form;

  async render() {
    return `
      <section id="scanner" class="scanner background-section">
      <form id="new-form" class="new-form">
        <div class="scanner-container">
          <h1>Klasifikasi Sampah</h1>

          <div class="new-form__documentations__container">
            <div id="camera-container" class="new-form__camera__container">
              <video id="camera-video" class="new-form__camera__video">
                Video stream not available.
              </video>
              <canvas
                id="camera-canvas"
                class="new-form__camera__canvas"
              ></canvas>

              <div class="new-form__documentations__buttons">
                <select id="camera-select"></select>

                <div class="camera-btn-container">
                  <button
                    id="documentations-input-button"
                    class="btn camera-btn"
                    type="button"
                  >
                    Ambil Gambar
                  </button>
                  <input
                    id="documentations-input"
                    class="new-form__documentations__input"
                    name="documentations"
                    type="file"
                    accept="image/*"
                    multiple
                    aria-multiline="true"
                    aria-describedby="documentations-more-info"
                  />
                  <button
                    id="open-documentations-camera-button"
                    class="btn camera-btn"
                    type="button"
                  >
                    Buka Kamera
                  </button>
                </div>
              </div>
            </div>
            <div class="camera-line"></div>
            <ul
              id="documentations-taken-list"
              class="new-form__documentations__outputs"
            >
              <li class="new-form__documentations__outputs-item">
                <div class="scan-results-image">
                  <img src="images/biorezLogo.png" alt="scan-results-image" />
                </div>
                <div class="scan-results-description">
                  <h3>Nama Sampah</h3>
                  <p class="trash-type">Organik</p>
                  <p class="trash-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent pretium, odio vitae scelerisque
                  </p>
                  <div class="delete-btn-container">
                    <button class="delete-btn">Hapus</button>
                  </div>
                </div>
              </li>

              <li class="new-form__documentations__outputs-item">
                <div class="scan-results-image">
                  <img src="images/biorezLogo.png" alt="scan-results-image" />
                </div>
                <div class="scan-results-description">
                  <h3>Nama Sampah</h3>
                  <p class="trash-type">Organik</p>
                  <p class="trash-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent pretium, odio vitae scelerisque
                  </p>
                  <div class="delete-btn-container">
                    <button class="delete-btn">Hapus</button>
                  </div>
                </div>
              </li>

              <li class="new-form__documentations__outputs-item">
                <div class="scan-results-image">
                  <img src="images/biorezLogo.png" alt="scan-results-image" />
                </div>
                <div class="scan-results-description">
                  <h3>Nama Sampah</h3>
                  <p class="trash-type">Organik</p>
                  <p class="trash-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent pretium, odio vitae scelerisque
                  </p>
                  <div class="delete-btn-container">
                    <button class="delete-btn">Hapus</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </section>
    `;
  }

  async afterRender() {
    this.#setupForm();
  }

  #setupForm() {
    this.#form = document.getElementById('new-form');

    document.getElementById('documentations-input-button').addEventListener('click', () => {
      this.#form.elements.namedItem('documentations-input').click();
    });
  }
}
