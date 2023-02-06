import {html, css, LitElement} from 'lit';

import {sharedStyles} from '../styles';

export class Button extends LitElement {
  static styles = [
    sharedStyles,
    css`
      .button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;

        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
        padding: 10px 14px;
        border-radius: 5px;
      }

      .button-default {
        background: rgba(255, 255, 255, 0.35);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      .button-default:hover {
        box-shadow: rgba(100, 100, 100, 0.35) 0px 5px 15px;
        background: rgba(255, 255, 255, 0.15);
      }

      .button-default:active {
        box-shadow: inset rgba(0, 0, 0, 0.25) 0px 5px 15px;
        transform: translateY(4px);
      }

      .button-subtle {
        border: 1px solid transparent;
        background: white;
      }

      .button-subtle:hover {
        border: 1px solid rgba(100, 100, 100, 0.35);
        background: rgba(255, 255, 255, 0.15);
      }

      .button-subtle:active {
        border: 1px solid rgba(100, 100, 100, 0.35);
        box-shadow: inset rgba(0, 0, 0, 0.25) 0px 5px 15px;
        transform: translateY(4px);
      }

      .rounded{
        border-radius: 25px;
        padding: 10px 20px;
      }
    `,
  ];

  static properties = {
    type: {type: String},
    text: {type: String},
    rounded: {type: String},
  };
  constructor() {
    super();
    this.type = 'default';
    this.rounded = 'false';
  }

  getRounded(){
    return this.rounded === 'true' ? 'rounded': '';
  }

  render() {
    return html`<button class="button button-${this.type} ${this.getRounded()}">
      <slot></slot>
    </button>`;
  }
}
customElements.define('ds-button', Button);
