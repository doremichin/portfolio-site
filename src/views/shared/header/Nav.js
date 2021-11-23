import styled from 'styled-components'
import { Link } from 'react-scroll'

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
        sections.map(({ name, to }) => (
          <NavLink
            activeClass="isActive"
            to={to}
            spy
            smooth
            offset={-70}
            duration={500}
            ignoreCancelEvents
            onClick={onCloseMenu}
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
  .isMobile & {
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
  }
  .isMobile.openMenu & {
    transform: none;
  }
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
  .scrolled &,.isMobile &  {
    color: #333;
  }
  .isMobile & {
    width: 100%;
    justify-content: center;
  }
`;
