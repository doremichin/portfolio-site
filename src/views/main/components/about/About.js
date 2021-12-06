import styled from 'styled-components'

import { useMediaMatch } from 'rooks';

import cn from 'classnames';

import SectionTitle from '../../../shared/title/SectionTitle';
import { appData } from '../../../../data';
import { ContentContainer, SectionContainer } from '../../../shared/layout/Layout.Styled';
import Skills from './Skills';
import MyInfo from './MyInfo';

export default function About() {
  const isTablet = useMediaMatch('(max-width: 1050px)');
  return (
    <Container name="about" className={cn({ isTablet })}>
      <ContentContainer>
        <SectionTitle title={appData.about.title} />
        <Wrapper>
          <Image />
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
  .isTablet & {
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
  }
`;
const Image = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #eee;
  flex-shrink: 0;
  margin-right: 40px;
  .isTablet & {
    margin: 0 0 30px 0;
  }
`;
const Contents = styled.div`
  p{
    line-height: 1.8;
  }
`;
