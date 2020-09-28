import { screen } from '@testing-library/react'
import 'jest-styled-components'
import { renderWithTheme } from '../../utils/tests/helpers'
import Logo from '.'

describe('<Logo />', () => {
  // reinderizar o componente `render`
  // selecionar o elemento a ser testado `screen` (queries) -- getByLabel
  // expect - assetion - assercao - comparacao - analise (espero que reinderize a logo branca)

  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a back label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      height: '3.3rem'
    })
  })

  it('should render a normal logo', () => {
    renderWithTheme(<Logo size="normal" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/Won Games/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', { media: '(max-width: 768px)' })
  })
})
