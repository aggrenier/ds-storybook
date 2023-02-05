import {html} from 'lit-html';

// eslint-disable-next-line no-unused-vars
import {Avatar} from './avatar';
export default {
  title: 'Design System/Avatar',
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
    backgroundColor: {defaultValue: '#ffffff'},
  },
};

const Template = ({appearance, size, backgroundColor}) =>
  html`<ds-avatar
    backgroundColor=${backgroundColor}
    appearance="${appearance}"
    size="${size}"
  ></ds-avatar>`;

export const Default = Template.bind({});
Default.args = {
  appearance: 'circle',
  size: 'small',
  backgroundColor: '#ffffff',
};
