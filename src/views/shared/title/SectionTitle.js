import styled from 'styled-components'

export default function SectionTitle({ title, subTitle }) {
  return (
    <Container>
      <h2>{title}</h2>
      {
        subTitle
        && <p>{subTitle}</p>
      }
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  margin-bottom: 70px;
  h2{
    font-size: 32px;
    margin-bottom: 10px;
    color: #333;
    font-weight: 500;
    text-transform: capitalize;
  }
  p{
    font-size: 17px;
    line-height: 1.6;
    color: #777;
  }
`;
