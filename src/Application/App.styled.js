import styled from 'styled-components';

export const StyledPageContainer = styled.div`
  margin-left: ${({ open }) => open ? '36vh' : '0'};
  transition: margin-left 0.3s ease-in-out;
`;