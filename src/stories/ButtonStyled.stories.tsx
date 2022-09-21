import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './ButtonStyled';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonStyled',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
