import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
  // args: {
  //   title: 'fffff',
  //   description: 'hhvbhsh'
  // }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Teste Storybook',
  description: 'teste do primeiro storybook'
}

export const Default: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Test default',
  description: 'test value default'
}
