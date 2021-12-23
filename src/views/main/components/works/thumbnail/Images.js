import styled from 'styled-components'
import cn from 'classnames';

export default function Images({ item }) {
  const { hasLink } = item;

  return (
    <Container href={item.url} className={cn({ hasLink })} target={hasLink ? '_blank' : ''}>
      <ImageWrapper>
        <img src={item.imageUrl} alt="" />
      </ImageWrapper>
    </Container>
  )
}

const Container = styled.a`
  display: block;
  &:not(.hasLink) {
    cursor: default;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  background-color: #999;
  margin: 0 50px 30px 0;
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
