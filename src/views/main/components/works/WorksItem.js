import styled from 'styled-components'

export default function WorksItem({ item }) {
  return (
    <Container>
      <Contents>
        <Image>
          <img src={item.imageUrl} alt="" />
        </Image>
        <Desc>
          <Title href={item.url}>
            {item.name}
            {' '}
            <span>바로가기</span>
          </Title>
          {
            item.description.map((desc) => (
              <p>
                {desc}
              </p>
            ))
          }
          <p>
            -&nbsp;
            {item.tags.join(', ')}
          </p>

        </Desc>
      </Contents>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 50px;
  border-bottom: 1px solid #dedede;
  padding: 0 10px;
`;
const Title = styled.a`
  display: flex;
  align-items: center;
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 20px;
  span{
    margin-left: 8px;
    font-weight: 400;
    font-size: 13px;
    border: 1px solid #000;
    border-radius: 2px;
    padding: 2px 4px;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      background: #333;
      color: #fff;
    }
  }
`;
const Contents = styled.div`
  display: flex;
`;
const Image = styled.div`
  flex-shrink: 0;
  width: 550px;
  height: 320px;
  background-color: #999;
  margin-right: 20px;
  margin-bottom: 40px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Desc = styled.div`
  line-height: 1.8;
  text-transform: capitalize;
`;
