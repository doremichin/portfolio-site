import styled from 'styled-components'

export default function WorksItem({ item }) {
  return (
    <Container>
      <Title href={item.url}>
        {item.name}
        {' '}
        <span>바로가기</span>
      </Title>
      <Contents>
        <Image>
          image
        </Image>
        <Desc>
          {item.description}
          <p>
            -&nbsp;
            {
              item.tags.map((tag, index) => (
                <Tags key={tag}>{tag}</Tags>
              ))
            }
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
  display: block;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  span{
    font-weight: 400;
    font-size: 13px;
    border: 1px solid #000;
    border-radius: 2px;
    padding: 2px;
    cursor: pointer;
  }
`;
const Contents = styled.div`
  display: flex;
`;
const Image = styled.div`
  width: 560px;
  height: 315px;
  background-color: #999;
  margin-right: 20px;
  margin-bottom: 40px;
`;
const Desc = styled.div`
  padding-top: 30px;
`;
const Tags = styled.span`
  margin-right: 6px;
  text-transform: capitalize;
`;
