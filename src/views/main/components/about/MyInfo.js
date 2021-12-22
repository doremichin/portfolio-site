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
      <Character>
        • 새로운 기술에 도전하고 배우는 것을 좋아합니다.
        <br />
        • 깔끔하고 사용성 높은 UI를 만들어서 사용자가 서비스를 재밌고 편리하게 이용할 수 있도록 개발 하고 싶습니다.
        <br />
        • 신입 프론트엔드 개발자로 React와 Github,Jira 를 이용하여 프로젝트의 설계부터 배포까지 경험 했습니다.
      </Character>
      <Contact>
        <Title>Contact</Title>
        <Desc>
          <Emoticon>📬</Emoticon>
          johnkim994@naver.com
          <br />
          <Emoticon>📞</Emoticon>
          010-7300-5689
          <br />
          <Emoticon>💻</Emoticon>
          <a href="https://github.com/doremichin" target="_blank" rel="noreferrer">https://github.com/doremichin</a>
        </Desc>
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
const Character = styled.div`
  line-height: 2.5;
`;
const Contact = styled.div`
  margin-top: 30px;
  border-top: 1px solid #dedede;
  padding-top: 30px;
  
`;
const Emoticon = styled.span`
  margin-right: 10px;
`;
const Desc = styled.div`
  line-height: 2.5;

`;
