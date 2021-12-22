import styled, { css } from 'styled-components'

import Image from 'next/image'

import SectionTitle from '../../../shared/title/SectionTitle';
import { appData } from '../../../../data';
import { ContentContainer, SectionContainer } from '../../../shared/layout/Layout.Styled';
import MyInfo from './MyInfo';
import Skills from './Skills';
import { screenLg } from '../../../../style/Responsive';

export default function About() {
  return (
    <Container name="about">
      <ContentContainer>
        <SectionTitle title={appData.about.title} />
        <Wrapper>
          <ImageWrapper>
            <Image src="https://drive.google.com/uc?id=1AA8WO9mWeZJlk9EZMlgeODQ_FuHI_C0p" width={500} height={500} />
          </ImageWrapper>
          <Contents>
            <MyInfo />
            <Skills />
          </Contents>
        </Wrapper>
      </ContentContainer>
    </Container>
  )
}

const Container = styled(SectionContainer)`
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #eee;
  flex-shrink: 0;
  margin-bottom: 40px;
  ${screenLg(css`
    width: 250px;
    height: 250px;
    `)}
`;
const Contents = styled.div`
  p{
    line-height: 1.8;
  }
`;
