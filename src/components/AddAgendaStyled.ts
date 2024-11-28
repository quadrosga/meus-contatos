import styled from 'styled-components';

export const FormContainer = styled.div`
  margin: 20px auto;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SaveButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
