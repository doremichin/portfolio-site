import styled from 'styled-components'

import cn from 'classnames';

import { useMediaMatch } from 'rooks';

import { useScrollPoint } from '../../../hooks/useScrollPoint';

export default function Visual() {
  const scrolled = useScrollPoint(700);
  const isTablet = useMediaMatch('(max-width: 1050px)');
  const isMobile = useMediaMatch('(max-width: 768px)');

  return (
    <Container name="visual">
      <Screen />
      <Title className={cn({ scrolled, isTablet, isMobile })}>
        안녕하세요
        <br />
        <span>웹 프론트엔드 개발자 김광면</span>
        입니다.
        <br />
        <Desc>
          UI/UX에 대한 고민을 통해 사용자에게 보다 더 나은 서비스를 제공할 수 있도록 개발 하는 것이 목표입니다.
        </Desc>
      </Title>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  background:  url('https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80') 50% / cover fixed no-repeat;
  height: 100vh;
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;
const Title = styled.div`
  padding-right: 10%;
  display: inline-block;
  position: sticky;
  top: 37%;
  left: 100%;
  color: #fff;
  font-weight: 300;
  font-size: 34px;
  line-height: 2;
  transition: 0.4s;
  span{
    font-weight: 500;
  }
  &.scrolled{
    opacity: 0;
  }
  &.isTablet {
    font-size: 28px;
    padding-right: 5%;
    top: 40%;
  }
  &.isMobile {
    font-size: 24px;
  }
`;
const Desc = styled.p`
  font-size: 19px;
  color: #dedede;
  line-height: 2.4;
  max-width: 450px;
  .isTablet &{
    font-size: 18px;
  }
  .isMobile &{
    font-size: 16px;
  }
`;
