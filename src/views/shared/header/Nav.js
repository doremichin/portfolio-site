import styled, { css } from 'styled-components'
import { Link } from 'react-scroll'

import { screenSm } from '../../../style/Responsive';

export default function Nav({ onCloseMenu }) {
  const sections = [
    {
      name: 'visual',
      to: 'visual',
    },
    {
      name: 'about',
      to: 'about',
    },
    {
      name: 'works',
      to: 'works',
    },
  ]

  return (
    <Container className="Nav">
      {
        sections.map(({ name, to }, index) => (
          <NavLink
            activeClass="isActive"
            to={to}
            spy
            smooth
            offset={-70}
            duration={500}
            ignoreCancelEvents
            onClick={onCloseMenu}
            key={index}
          >
            {name}
          </NavLink>
        ))
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.4s;
  ${screenSm(css`
    flex-direction: column;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    width: 300px;
    background: #fff;
    transform: translateX(-100%);
    .openMenu & {
      transform: none;
    }
  `)}
`;
const NavLink = styled(Link)`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 70px;
  color: #fff;
  cursor: pointer;
  transition: 0.4s;
  &:hover{
    color: #18f;
  }
  .scrolled &{
    color: #333;
  }
  ${screenSm(css`
    color: #333;
    width: 100%;
    justify-content: center;
  `)}
  
`;
