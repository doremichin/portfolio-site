import styled, { css } from 'styled-components'

import cn from 'classnames';

import { useEffect, useState } from 'react';

import { useScrollPoint } from '../../../hooks/useScrollPoint';
import { screenLg, screenMd, screenSm } from '../../../style/Responsive';

export default function Visual() {
  const scrolled = useScrollPoint(700);
  const [move, setMove] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const sct = window.scrollY || window.pageYOffset
      const distance = 360;
      const finish = 600;
      setMove(distance / finish * sct)
    })
  }, []);

  return (
    <Container
      name="visual"
      style={{
        backgroundPosition: `${50 - (move / 30)}% ${50 - (move / 65)}%`,
      }}
    >
      <Screen />
      <Text
        className={cn({
          scrolled,
        })}
        style={{
          transform: `translateY(${move}px)`,
          opacity: 1.5 - (move / 350),
        }}
      >
        <Title>
          안녕하세요
          <br />
          <span>웹 프론트엔드 개발자 김광면</span>
          입니다.
        </Title>
        <Desc>
          UI/UX에 대한 고민을 통해 사용자에게 보다 더 나은 서비스를 제공할 수 있도록 개발 하는 것이 목표입니다.
        </Desc>
      </Text>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  background: url('https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80') 50% / cover fixed no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${screenSm(css`
    background-attachment: initial;
  `)}
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;
const Text = styled.div`
  padding: 0 15px;
  display: inline-block;
  text-align: center;
  color: #fff;
  font-weight: 300;
  &.scrolled{
    opacity: 0;
  }
`;
const Title = styled.div`
  line-height: 1.5;
  margin-bottom: 8px;
  font-size: 20px;
  span{
    font-weight: 500;
  }
  ${screenMd(css`
    font-size: 24px;
  `)}  
  ${screenLg(css`
    font-size: 27px;
  `)}
`;
const Desc = styled.p`
  font-size: 16px;
  color: #dedede;
  line-height: 1.5;
  max-width: 450px;
  ${screenLg(css`
    font-size: 18px;
  `)}
`;
