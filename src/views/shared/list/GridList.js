import styled from 'styled-components'

export default function GridList({ children, data }) {
  return (
    <Container>
      <Row>
        {
          data.map((item) => (
            <Col>
              {children(item)}
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

const Container = styled.div`

`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
`;
const Col = styled.div`
  
`;
