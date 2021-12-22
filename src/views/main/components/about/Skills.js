import styled, { css } from 'styled-components'

import { frontSkills, softSkills } from '../../../../data';
import { screenLg } from '../../../../style/Responsive';

export default function Skills() {
  return (
    <Container>
      <Title>
        Skills
      </Title>
      <Contents>
        <Section>
          <SubTitle>
            Front End
          </SubTitle>
          <Thumb>
            {frontSkills.map((item) => (
              <Image>
                <img src={item.thumbnails} alt={item.title} />
              </Image>
            ))}
          </Thumb>
        </Section>
        <Section>
          <SubTitle>
            Soft Skill
          </SubTitle>
          <Thumb>
            {softSkills.map((item) => (
              <Image>
                <img src={item.thumbnails} alt={item.title} />
              </Image>
            ))}
          </Thumb>
        </Section>
      </Contents>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 30px;
  margin: 30px 0;
  border-top: 1px solid #dedede;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  ${screenLg(css`
    flex-direction: row;
    `)}
`;
const Section = styled.div`
  ${screenLg(css`
    &:nth-child(2){
      padding-left: 20px;
    }
    `)}
`;
const Thumb = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Image = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Title = styled.h2`
  text-transform: capitalize;
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 30px;
`;
const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
`;
