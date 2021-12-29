import styled, { css } from 'styled-components'
import cn from 'classnames';

import Images from './thumbnail/Images';
import { screenLg, screenMd } from '../../../../style/Responsive';

export default function WorksItem({ item }) {
  const { hasLink } = item;

  return (
    <Container>
      <Contents>
        <Images item={item} />

        <Desc>
          <Title href={item.url} className={cn({ hasLink })} target={hasLink ? '_blank' : ''}>
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
              <GitLink href={item.github} target={hasLink ? '_blank' : ''}>
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
  margin: 0 auto 80px;
  padding-bottom: 50px;
  max-width: 700px;
  border-bottom: 1px solid #dedede;
  &.hasLink {
    cursor: default;
  }
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;
const Desc = styled.div`
`;
const Title = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
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
  ${screenMd(css`
    font-size: 22px;
  `)}
  ${screenLg(css`
    font-size: 22px;
  `)}
`;
const Info = styled.div`
  line-height: 1.3;
  margin-bottom: 15px;
  p{
    margin-bottom: 13px;
  }
`;
const GitLink = styled.a`
  font-size: 15px;
  span{
    text-decoration: underline;
  }
`;

const Tags = styled.p`
  
`;
