import styled from 'styled-components'

export default function SingleImage({ item }) {
  return (
    <Container>
      <Image href={item.url || '#;'}>
        <img src={item.imageUrl[0]} alt="" />
      </Image>
    </Container>
  )
}

const Container = styled.div`

`;
const Image = styled.a`
  display: block;
  flex-shrink: 0;
  width: 550px;
  height: 320px;
  background-color: #999;
  margin-right: 30px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .isTablet &{
    margin-bottom: 30px;
  }
`;
