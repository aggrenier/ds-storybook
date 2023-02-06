import {html} from 'lit-html';

// eslint-disable-next-line no-unused-vars
import {Button} from '../../../components/button/button';
export default {
  title: 'Design System/Button',
  argTypes: {
    text: {
      control: {type: 'text'},
    },
    type: {
      control: {type: 'select', options: ['default', 'warning', 'error']},
    },
    rounded: {type: 'select', options: ['false', 'true']},
  },
};

const Template = ({text, type, rounded}) =>
  html`<ds-button type="${type}" rounded="${rounded}">${text}</ds-button>`;

export const Default = Template.bind({});
Default.args = {
  text: 'Button Text',
  type: 'default',
  rounded: 'false',
};

export const DefaultRounded = Template.bind({});
DefaultRounded.args = {
  text: 'Button Text',
  type: 'default',
  rounded: 'true',
};

export const Subtle = Template.bind({});
Subtle.args = {
  text: 'Button Text',
  type: 'subtle',
  rounded: 'false',
};

export const SubtleRounded = Template.bind({});
SubtleRounded.args = {
  text: 'Button Text',
  type: 'subtle',
  rounded: 'true',
};