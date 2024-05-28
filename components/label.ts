import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
let AcmeLabel = class AcmeLabel extends LitElement {
  constructor() {
    super(...arguments);
    this.for = "";
    this.prop = "";
  }
  render() {
    return html`<label><slot></slot></label>`;
  }
};
__decorate([property()], AcmeLabel.prototype, "for", void 0);
__decorate([property()], AcmeLabel.prototype, "prop", void 0);
AcmeLabel = __decorate([customElement("acme-label")], AcmeLabel);
