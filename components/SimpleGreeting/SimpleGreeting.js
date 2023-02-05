import {html, css, LitElement} from 'lit';

export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    primary: {type: Boolean},
    label: {type: String}
  };

  constructor() {
    super();
  }

  render() {
    return html`<button>${this.primary} ${this.label}</button>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);