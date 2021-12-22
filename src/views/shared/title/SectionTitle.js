import styled, { css } from 'styled-components'

import { screenLg } from '../../../style/Responsive';

export default function SectionTitle({ title, subTitle }) {
  return (
    <Container>
      <h2>{title}</h2>
      {
        subTitle
        && <p>{subTitle}</p>
      }
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  margin-bottom: 50px;
  h2{
    font-size: 27px;
    margin-bottom: 10px;
    color: #333;
    font-weight: 500;
    text-transform: capitalize;
    ${screenLg(css`
      font-size: 30px;
    `)}
  }
  p{
    font-size: 17px;
    line-height: 1.6;
    color: #777;
  }
`;
