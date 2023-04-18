import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  render: (props) => {
    return (
        <Button {...props}>
            {props.value}
        </Button>
    )
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    theme: "primary",
    value: "Hello world."
  },
};