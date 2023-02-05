import {html, css, LitElement, nothing} from 'lit';

export class Avatar extends LitElement {
  static styles = css`
    .ds-avatar {
      /* background-color: pink; */
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 10px;
    }

    .border {
      border: 2px solid rgba(149, 157, 165, 0.25);
      /* background-color: rgba(149, 157, 165, 0.5); */
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .type-circle,
    .type-circle .profile {
      border-radius: 50px;
    }
    .type-square .type-square .profile {
      border-radius: 5px;
    }

    .small,
    .small svg {
      width: 28px;
      height: 28px;
      max-width: 28px;
    }
    .small .profile {
      width: 26px;
      height: 26px;
      max-width: 26px;
    }

    .medium,
    .medium svg {
      width: 36px;
      height: 36px;
      max-width: 36px;
    }
    .medium .profile {
      width: 34px;
      height: 34px;
      max-width: 34px;
    }

    .large,
    .large svg {
      width: 48px;
      height: 48px;
      max-width: 48px;
    }
    .large .profile {
      width: 48px;
      height: 48px;
      max-width: 48px;
    }

    .profile {
      animation: fadein 0.5s;
    }
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    svg {
      width: fit-content;
    }
  `;

  static properties = {
    appearance: {type: String},
    size: {type: String},
    backgroundColor: {type: String},
    profilePicture: {type: String},
    isDisabled: {type: Boolean},
  };

  async connectedCallback() {
    super.connectedCallback();
    if (!this.profilePicture) {
      await this.fetchData();
    }
  }

  constructor() {
    super();
    this.appearance = 'circle';
    this.size = 'small';
  }

  getApperence() {
    return this.appearance === 'circle' ? 'circle' : 'square';
  }

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

  async fetchData() {
    let response = await fetch('https://randomuser.me/api/');
    const body = await response.json();
    if (body.results[0]) {
      this.profilePicture = body.results[0].picture.medium;
    }
  }

  render() {
    let profilePic;
    if (!this.profilePicture) {
      profilePic = html`${nothing}`;
    } else {
      profilePic = html`<img class="profile" src="${this.profilePicture}" />`;
    }

    return html`<div
      class="ds-avatar"
      style="background-color: ${this.backgroundColor}"
    >
      <div
        class="border type-${this.getApperence()} 
          ${this.getSize()}"
      >
        ${profilePic}
      </div>
    </div>`;
  }
}
customElements.define('ds-avatar', Avatar);
