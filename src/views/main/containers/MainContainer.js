import styled from 'styled-components'

import Visual from '../components/Visual';
import About from '../components/about/About';
import Works from '../components/works/Works';

export default function MainContainer() {
  return (
    <Container>
      <Visual />
      <About />
      <Works />
    </Container>
  )
}

const Container = styled.div`

`;
