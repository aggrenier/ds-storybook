import {Button} from './Button';
export default {
  title: 'Button',
  argTypes: {
    backgroundColor: {control: 'color'},
    onClick: {action: 'onClick'},
    size: {
      control: {type: 'select'},
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args) => Button(args);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
