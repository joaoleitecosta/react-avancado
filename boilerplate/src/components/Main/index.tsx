import * as S from './styles'
const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="desenvolvedor de frente para tela con=m com codigo"
    />
  </S.Wrapper>
)

export default Main
