import styled, { css } from 'styled-components'

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
            <img src="https://lh3.googleusercontent.com/7TskIRpGBM_vy3lIwekMVSGKXD7qv_lri3cI-_2E1_6RrDNHrjVzt7Wdp7hdZKKUSlQx2VF-obJCiXw-blLk9XHGtmfnqjy7Oil2R9TsK7gocOgXiXwqDoVO2uZjNXetsH_CsMRS2r2RrFvmwaGZxcVW6_yVFZ7EpskWNXMstLa7Cqrfn6itjdGNP9iU_5RMpMPBZ7oeERS4r3rj7F2TznJNkVgpiEZYTICARaMcO0mS8iX6nWD1iQEJScemT07n43nQtso1OywEvx_ZnKfetafezA7AkpO8MkF-kL4a2CBFBbw1suS7gpGzmNrTCuVwO-lmm7Fk-sfaNR-4kSK1XQtLqJbuy3eoT1NSwyXp42Ps0UQA6tLRlqnvuCMPJaQnTVFz7BNCQM8QHPkLALsjnS7YV2_ryjTFIXK7-l-DXYYnXl7IgS6IOiuWmbOsf4WgXNqsZBm5qrLn1B31rgWO3kkxCxJ05Ea85ZKWiUBV-0gpW5JOofjRVokdFF-WOVhMPNrQh_q5KxgOVPdfdcTA6pTWw0DJl4fO1gWWhoBr-Mlm7Y3oH_gCgEZ2Eh4-fENtSm3AUobSRltNiwAwSThzbC7cZkJII_LRyGf6h_4w_tg_w3ew6MjZf_Qkk8H58UXZQEr95FfFzhlSLUH3B58WDHwbi_9SzaDZky120t8Lg6o2Zj3YxnPfKIwOyNYOVaFfMO-6j-Sb1bTU7DWaizpRcC0=s1920-no?authuser=0" alt="" />
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
