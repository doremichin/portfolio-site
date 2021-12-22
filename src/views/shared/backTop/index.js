import styled, { css } from 'styled-components'
import { AiOutlineArrowUp } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll'
import cn from 'classnames';

import { useScrollPoint } from '../../../hooks/useScrollPoint';
import { screenSm } from '../../../style/Responsive';

export default function BackTop() {
  const isActive = useScrollPoint(1000);

  const backToTop = () => {
    scroll.scrollToTop({
      duration: 600,
    });
  }
  return (
    <Container onClick={backToTop} className={cn({ isActive })}>
      <AiOutlineArrowUp />
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  right: 60px;
  bottom: 80px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  background: #18f;
  color: #fff;
  font-size: 22px;
  border-radius: 50%;
  transition: 0.4s;
  transform: translateY(250px);
  &.isActive {
    transform: none;
  }
  ${screenSm(css`
    right: 30px;
    bottom: 30px;
    width: 55px;
    height: 55px;
  `)}
`;
