import styled from "styled-components";

export const StyledIcon = styled.div<{ color?: string; size?: string }>`
  display: flex;
  padding: 10px;  
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.size || '24px'};
`;

