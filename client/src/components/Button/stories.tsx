import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from 'styled-icons/material-outlined'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />
Default.args = {
  children: 'Buy Now'
}

export const WidtIcon: Story = (args) => <Button {...args} />
WidtIcon.args = {
  size: 'small',
  chidren: 'By Now',
  icon: <AddShoppingCart />
}
