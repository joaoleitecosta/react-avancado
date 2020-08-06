import {StoryFn} from '@storybook/addons'
import GlobalStyles from '../src/styles/global'

const widhGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)

export default widhGlobalStyles;
