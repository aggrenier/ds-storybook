import {html, css, LitElement} from 'lit';
import {Avatar} from '../avatar/avatar';

export class AvatarGroup extends LitElement {
  static styles = css`
    .ds-avatar-group {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ds-avatar {
      display: inline-block;
    }

    .small ds-avatar:not(:first-child) {
      margin-left: -30px;
    }

    .medium ds-avatar:not(:first-child) {
      margin-left: -30px;
    }

    .large ds-avatar:not(:first-child) {
      margin-left: -30px;
    }
  `;

  static properties = {
    appearance: {type: String},
    size: {type: String},
    avatars: {
      type: Array,
    },
  };

  // prettier-ignore
  getSize() {
    switch (this.size) {
    case 'large':
      return 'large';
  
    case 'medium':
      return 'medium';
  
    default:
      return 'small';
    }
  }

  constructor() {
    super();
  }
  render() {
    let counter = this.avatars.length;
    return html`<div class="ds-avatar-group ${this.getSize()}">
      ${this.avatars.map((avatar) => {
        let returnHtml = html`<ds-avatar
          appearance="${this.appearance}"
          size="${this.size}"
          profilePicture=${avatar.profilePicture}
          style="z-index: ${counter}"
        ></ds-avatar>`;
        counter--;
        return returnHtml;
      })}
    </div>`;
  }
}
customElements.define('ds-avatar-group', AvatarGroup);
