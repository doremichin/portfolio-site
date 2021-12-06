import styled from 'styled-components'
import { useMediaMatch } from 'rooks';
import cn from 'classnames';

export default function WorksItem({ item }) {
  const isTablet = useMediaMatch('(max-width: 1050px)');

  return (
    <Container className={cn({ isTablet })}>
      <Contents>
        <Image href={item.url}>
          {
            item.imageUrl
            && <img src={item.imageUrl} alt="" />
          }
        </Image>
        <Desc>
          <Title href={item.url}>
            {item.name}
            {' '}
          </Title>
          {
            item.description.map((desc) => (
              <p>
                -&nbsp;
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
  margin-bottom: 80px;
  border-bottom: 1px solid #dedede;
  padding: 0 10px 80px;
`;
const Title = styled.a`
  display: flex;
  align-items: center;
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 20px;
  transition: 0.3s;
  
`;
const Contents = styled.div`
  display: flex;
  .isTablet & {
    align-items: center;
    flex-direction: column;
  }
`;
const Image = styled.a`
  display: block;
  flex-shrink: 0;
  width: 550px;
  height: 320px;
  background-color: #999;
  margin-right: 20px;
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
const Desc = styled.div`
  line-height: 1.8;
  text-transform: capitalize;
  white-space: nowrap;
`;
