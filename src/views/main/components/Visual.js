import styled from 'styled-components'

export default function Visual() {
  return (
    <Container name="visual">
      <Screen />
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
