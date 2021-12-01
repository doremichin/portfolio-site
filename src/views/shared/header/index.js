import styled from 'styled-components'
import { Link } from 'react-scroll'

import { useState } from 'react';

import cn from 'classnames'

import { AiOutlineMenu } from 'react-icons/ai';

import { useMediaMatch } from 'rooks';

import Nav from './Nav';
import { useScrollPoint } from '../../../hooks/useScrollPoint';

export default function Header() {
  const pages = [
    {
      name: 'main',
      to: '/',
      isActive: true,
    },
    {
      name: 'blog',
      to: '/blog',
      isActive: false,
    },
    {
      name: 'main',
      to: '/',
      isActive: true,
    },
  ]
  const isMobile = useMediaMatch('(max-width: 768px)');
  const [openMenu, setOpenMenu] = useState(false);
  const scrolled = useScrollPoint(800);

  const handleMenu = () => {
    setOpenMenu((v) => !v)
  }
  return (
    <Container className={cn({ scrolled, isMobile, openMenu })}>
      <Logo
        activeClass="isActive"
        to="visual"
        spy
        smooth
        offset={-70}
        duration={500}
        ignoreCancelEvents
        onClick={() => setOpenMenu(false)}
      >
        Myeoni🙂
      </Logo>
      <Nav onCloseMenu={handleMenu} />
      {
        isMobile
        && (
          <>
            <ButtonMenu onClick={handleMenu}>
              <AiOutlineMenu />
            </ButtonMenu>
            <Screen onClick={handleMenu} />
          </>
        )
      }
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  transition: 0.4s;
  &.scrolled {
    background: #fff;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  }
`;

const Logo = styled(Link)`
  cursor: pointer;
  color: #fff;
  text-transform: capitalize;
  font-size: 22px;
  font-weight: 500;
  .scrolled & {
    color: #333;
  }
  &:hover{
    animation: animate 1s linear infinite
  }
  @keyframes animate {
    0%{
      transform: translateY(0);
    }
    50%{
      transform: translateY(-3px);
    }
    100%{
      transform: translateY(0);

    }

  }

`;

const ButtonMenu = styled.div`
  font-size: 24px;
  color: #fff;
  display: flex;
  cursor: pointer;
  .scrolled & {
    color: #333;
  }
`;
const Screen = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: none;

  .openMenu & {
    display: block;
  }
`;
