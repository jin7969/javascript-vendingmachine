import ProductManager from './models/ProductManger.js';
import ProductManageView from './views/ProductManageView.js';
import ChargeView from './views/ChargeView.js';
import { on } from './utils/event.js';
import { SECTION_CONTAINER } from './constants/constants.js';

export default class Controller {
  constructor() {
    this.productManager = new ProductManager();
    this.productManageView = new ProductManageView();
    this.chargeView = new ChargeView();

    on(SECTION_CONTAINER, '@submit', this.#handleProductInfo.bind(this));
    on(SECTION_CONTAINER, '@render', this.#renderSavedData.bind(this));
    on(SECTION_CONTAINER, '@modify', this.#modifySavedData.bind(this));
    on(SECTION_CONTAINER, '@delete', this.#deleteSavedData.bind(this));

    on(SECTION_CONTAINER, '@charge', this.#handleChargeCoin.bind(this));
  }

  #renderSavedData(event) {
    const { hash } = event.detail;
    if (hash === '#!manage') {
      this.productManageView.initManageDOM();
      const savedProductList = this.productManager.getProducts();
      if (savedProductList.length !== 0) {
        this.productManageView.render(savedProductList);
      }
      return;
    }
    if (hash === '#!charge') {
      this.chargeView.initChargeDOM();
    }
  }

  #handleProductInfo(event) {
    const { product } = event.detail;
    this.productManager.addProduct(product);
    this.productManageView.render(product);
    this.productManageView.resetProductInput();
  }

  #modifySavedData(event) {
    const { index, product } = event.detail;
    this.productManager.modifyProduct(index, product);
  }

  #deleteSavedData(event) {
    const { index } = event.detail;
    this.productManager.deleteProduct(index);
  }

  #handleChargeCoin(event) {
    const { amount } = event.detail;
  }
}
