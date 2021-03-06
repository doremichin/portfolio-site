import styled from 'styled-components'

export default function MyInfo() {
  return (
    <Container>
      <Title>
        Front End Developer
      </Title>
      <Name>
        <Emoticon>π§βπ»</Emoticon>
        κΉκ΄λ©΄ / 28
      </Name>
      <Character>
        β’ μλ‘μ΄ κΈ°μ μ λμ νκ³  λ°°μ°λ κ²μ μ’μν©λλ€.
        <br />
        β’ κΉλνκ³  μ¬μ©μ± λμ UIλ₯Ό λ§λ€μ΄μ μ¬μ©μκ° μλΉμ€λ₯Ό μ¬λ°κ³  νΈλ¦¬νκ² μ΄μ©ν  μ μλλ‘ κ°λ° νκ³  μΆμ΅λλ€.
        <br />
        β’ μ μ νλ‘ νΈμλ κ°λ°μλ‘ Reactμ Github,Jira λ₯Ό μ΄μ©νμ¬ νλ‘μ νΈμ μ€κ³λΆν° λ°°ν¬κΉμ§ κ²½ν νμ΅λλ€.
      </Character>
      <Contact>
        <Title>Contact</Title>
        <Desc>
          <Emoticon>π¬</Emoticon>
          johnkim994@naver.com
          <br />
          <Emoticon>π</Emoticon>
          010-7300-5689
          <br />
          <Emoticon>π»</Emoticon>
          <a href="https://github.com/doremichin" target="_blank" rel="noreferrer">https://github.com/doremichin</a>
        </Desc>
      </Contact>
    </Container>
  )
}

const Container = styled.div`
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;
const Name = styled.div`
  font-size: 16px;
  margin-bottom: 12px;
`;
const Character = styled.div`
  line-height: 1.7;
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
  line-height: 2.0;

`;
