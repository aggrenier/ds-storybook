import {html} from 'lit-html';

// eslint-disable-next-line no-unused-vars
import {AvatarGroup} from '../../../components/avatarGroup/avatarGroup';
export default {
  title: 'Design System/Avatar Group',
  argTypes: {
    appearance: {
      control: {type: 'select'},
      options: ['circle', 'square'],
      defaultValue: 'circle',
    },
    size: {
      control: {type: 'select'},
      options: ['small', 'medium', 'large'],
      defaultValue: 'small',
    },
    avatars: {type: Array},
  },
};

const Template = ({appearance, size, avatars}) =>
  html`<ds-avatar-group
    appearance="${appearance}"
    size="${size}"
    .avatars=${avatars}
  ></ds-avatar-group>`;

export const Default = Template.bind({});
Default.args = {
  appearance: 'circle',
  size: 'small',
  avatars: [
    {
      profilePicture: 'https://randomuser.me/api/portraits/med/women/76.jpg',
    },
    {
      profilePicture: 'https://randomuser.me/api/portraits/med/women/77.jpg',
    },
    {
      profilePicture: 'https://randomuser.me/api/portraits/med/women/78.jpg',
    },
  ],
};
