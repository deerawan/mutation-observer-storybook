const template = document.createElement("template");
template.innerHTML = `
<h1>Hello Budi</h1>
`;

export class ActionGroupElement extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(template.content.cloneNode(true));
  }
}

if (!window.customElements.get('bdg-action-group')) {
  window.customElements.define('bdg-action-group', ActionGroupElement);
} else {
  throw new Error('<bdg-action-group> custom element is already defined.');
}
