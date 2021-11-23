import styled from 'styled-components'

import SectionTitle from '../../shared/title/SectionTitle';
import { appData } from '../../../data';
import { SectionContainer } from '../../shared/layout/Layout.Styled';

export default function About() {
  return (
    <Container name="about">
      <SectionTitle title={appData.about.title} subTitle={appData.about.subTitle} />

    </Container>
  )
}

const Container = styled(SectionContainer)`

`;
