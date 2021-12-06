import styled from 'styled-components'

export default function MyInfo() {
  return (
    <Container>
      <Title>
        Front End Developer
      </Title>
      <Name>
        <Emoticon>🧑‍💻</Emoticon>
        김광면 / 28
      </Name>
      <Desc>
        - 새로운 것을 배우고 도전하는 것을 좋아합니다
        <br />
        - 서비스를 이용하는 사람의 입장에서 고민하며 개발하려고 합니다
        <br />
        - 신입 프론트엔드 개발자로 React와 Github,Jira 를 이용하여 프로젝트의 설계부터 배포까지 경험 했습니다
      </Desc>
      <Contact>
        <Title>Contact</Title>
        <p>
          <Emoticon>📬</Emoticon>
          johnkim994@naver.com
          <br />
          <Emoticon>📞</Emoticon>
          010-7300-5689
        </p>
      </Contact>
    </Container>
  )
}

const Container = styled.div`

`;
const Title = styled.h2`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Name = styled.div`
  font-size: 17px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
`;
const Contact = styled.div`
  margin-top: 30px;
  border-top: 1px solid #dedede;
  padding-top: 30px;
`;
const Emoticon = styled.span`
  margin-right: 10px;
`;
