import { color } from './styles'
import styled from 'styled-components'

const Main = styled.main`
  align-content: center;
  background: ${color.darkest};
  color: ${color.lighter};
  grid-gap: 1rem;
  justify-content: center;
  max-width: 104rem;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: hidden;

  @media print {
    background: ${color.lightest};
  }
`
