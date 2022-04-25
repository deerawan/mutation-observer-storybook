const template = document.createElement("template");
template.innerHTML = `<h1>Hello</h1><div><slot></slot></div>`;

export class ActionGroupElement extends HTMLElement {
  private observer!: MutationObserver;

  constructor() {
    super();

    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log('connectedCallback');
    if (!this.observer) {
      console.log('observer init');
      this.observer = new MutationObserver((mutations) => {
        console.log('mutations', mutations);
      });
    }
    console.log('observer observe');
    this.observer.observe(this, { childList: true, subtree: true });
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }
}

if (!window.customElements.get('bdg-action-group')) {
  window.customElements.define('bdg-action-group', ActionGroupElement);
} else {
  throw new Error('<bdg-action-group> custom element is already defined.');
}
