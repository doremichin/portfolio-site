import styled from 'styled-components'
import cn from 'classnames';

export default function Images({ item }) {
  const { hasLink } = item;

  return (
    <Container href={item.url} className={cn({ hasLink })}>
      {item.imageUrl.map((url) => (
        <Image>
          <img src={url} alt="" />
        </Image>
      ))}
    </Container>
  )
}

const Container = styled.a`
  display: block;
  &:not(.hasLink) {
    cursor: default;
  }
`;
const Image = styled.div`
  width: 550px;
  height: 320px;
  background-color: #999;
  margin: 0 30px 30px 0;
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
