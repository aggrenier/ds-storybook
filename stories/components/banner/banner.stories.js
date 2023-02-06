import {html} from 'lit-html';

// eslint-disable-next-line no-unused-vars
import {Banner} from '../../../components/banner/banner';
export default {
  title: 'Design System/Banner',
  argTypes: {
    text: {
      control: {type: 'text'},
    },
    type: {
      control: {type: 'select', options: ['announcement', 'warning', 'error']},
    },
  },
};

const Template = ({text, type}) =>
  html`<ds-banner text="${text}" type="${type}"></ds-banner>`;

export const Default = Template.bind({});
Default.args = {
  text: 'Announcement Message',
  type: 'announcement',
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'Announcement Message',
  type: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  text: 'Announcement Message',
  type: 'error',
};
