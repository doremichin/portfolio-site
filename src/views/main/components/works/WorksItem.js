import styled from 'styled-components'
import { useMediaMatch } from 'rooks';
import cn from 'classnames';

import Images from './thumbnail/Images';

export default function WorksItem({ item }) {
  const isTablet = useMediaMatch('(max-width: 1050px)');
  const { hasLink } = item;

  return (
    <Container className={cn({ isTablet })}>
      <Contents>
        <Images item={item} />

        <Desc>
          <Title href={item.url} className={cn({ hasLink })}>
            {item.name}
            &nbsp;
            <span>{item.startDate}</span>
          </Title>
          <Info>
            {
              item.description.map((desc) => (
                <p>
                  •&nbsp;
                  {desc}
                </p>
              ))
            }
            {
              item.tags.length > 0
              && (
                <Tags>
                  •&nbsp;
                  {item.tags.join(', ')}
                </Tags>
              )
            }
          </Info>
          {
            item.github
            && (
              <GitLink href={item.github}>
                github -
                {' '}
                <span>{item.github}</span>
              </GitLink>
            )
          }
        </Desc>
      </Contents>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 80px;
  border-bottom: 1px solid #dedede;
  padding: 0 10px 80px;
  &.hasLink {
    cursor: default;
  }
`;
const Title = styled.a`
  display: flex;
  align-items: center;
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 20px;
  transition: 0.3s;
  span{
    transform: translateY(3px);
    font-size: 13px;
    color: #777;
  }
  &:not(.hasLink) {
    cursor: default;
  }
`;
const GitLink = styled.a`
  font-size: 15px;
  span{
    text-decoration: underline;
  }
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  .isTablet & {
    align-items: center;
    flex-direction: column;
  }
`;

const Desc = styled.div`
  line-height: 1.8;
  text-transform: capitalize;
  white-space: nowrap;
`;
const Info = styled.div`
  line-height: 2.5;
  margin-bottom: 15px;
`;
const Tags = styled.p`
  
`;
