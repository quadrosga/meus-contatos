import styled from 'styled-components';

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

export const GridItem = styled.div`
  flex: 1 1 calc(50% - 16px);
  max-width: calc(50% - 16px);

  @media (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;
