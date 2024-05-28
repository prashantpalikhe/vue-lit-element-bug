if (typeof window !== "undefined") {
  class AcmeVanillaWC extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      this.span = document.createElement("span");
      this.shadowRoot.appendChild(this.span);
    }

    // Observe the 'for' attribute
    static get observedAttributes() {
      return ["for"];
    }

    // Callback function when the attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "for") {
        this.updateForProperty(newValue);
      }
    }

    // Method to update the 'for' property
    updateForProperty(value) {
      this.span.textContent = `For: ${value}`;
    }
  }

  // Register the custom element
  customElements.define("acme-vanilla-wc", AcmeVanillaWC);
}
