import styled from 'styled-components';

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionContainer = styled.div`
  min-height: 100vh;
  padding: 90px 0;

  &:nth-child(odd) {
    background: #f5f5f5;
  }
`;
