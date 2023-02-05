import {html} from 'lit-html';

// eslint-disable-next-line no-unused-vars
import {SimpleGreeting} from './SimpleGreeting';
export default {
  title: 'Design System/Simple Greeting',
  argTypes: {
    primary: {
      control: {type: 'select'},
      options: [true, false],
    },
    label: '',
  },
};
//👇 We create a “template” of how args map to rendering
const Template = ({primary, label}) =>
  html`<simple-greeting ?primary=${primary} .label=${label}></simple-greeting>`;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  label: 'Button-args',
};
