import {html, css, LitElement, nothing} from 'lit';

import {sharedStyles} from '../styles';

export class Banner extends LitElement {
  static styles = [
    sharedStyles,
    css`
      .banner {
        padding: 12px;
        border-radius: 5px;
        min-height: 24px;
        display: flex;
        align-items: center;
      }

      .banner:hover {
        box-shadow: inset rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      .banner-announcement {
        background-color: rgb(66, 82, 110);
        color: rgb(255, 255, 255);
      }
      .banner-warning {
        background-color: rgb(255, 171, 0);
        color: rgb(23, 43, 77);
      }
      .banner-error {
        background-color: rgb(222, 53, 11);
        color: rgb(255, 255, 255);
      }

      svg {
        padding-right: 12px;
      }
    `,
  ];

  static properties = {
    type: {type: String},
    text: {type: String},
  };
  constructor() {
    super();
    this.type = 'announcement';
  }

  getIcon() {
    if (this.type === 'warning') {
      return html` <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        role="presentation"
      >
        <g fill-rule="evenodd">
          <path
            d="M12.938 4.967c-.518-.978-1.36-.974-1.876 0L3.938 18.425c-.518.978-.045 1.771 1.057 1.771h14.01c1.102 0 1.573-.797 1.057-1.771L12.938 4.967z"
            fill="currentColor"
          ></path>
          <path
            d="M12 15a1 1 0 01-1-1V9a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2"
            fill="inherit"
          ></path>
        </g>
      </svg>`;
    } else if (this.type === 'error') {
      return html`<svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        role="presentation"
      >
        <g fill-rule="evenodd">
          <path
            d="M13.416 4.417a2.002 2.002 0 00-2.832 0l-6.168 6.167a2.002 2.002 0 000 2.833l6.168 6.167a2.002 2.002 0 002.832 0l6.168-6.167a2.002 2.002 0 000-2.833l-6.168-6.167z"
            fill="currentColor"
          ></path>
          <path
            d="M12 14a1 1 0 01-1-1V8a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2"
            fill="inherit"
          ></path>
        </g>
      </svg>`;
    } else {
      return html`${nothing}`;
    }
  }

  render() {
    return html`<div class="banner banner-${this.type} box-shadow">
      ${this.getIcon()} <span>${this.text}</span>
    </div>`;
  }
}
customElements.define('ds-banner', Banner);
