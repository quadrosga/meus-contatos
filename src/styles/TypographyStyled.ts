import styled from 'styled-components';

export const Typography = styled.h4<{ align?: string }>`
  margin: 60px;
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme }) => theme.colors.primary || '#000'};
  font-size: 2rem;
`;
