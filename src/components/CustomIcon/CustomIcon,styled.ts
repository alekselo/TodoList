import styled from "styled-components";

export const StyledIcon = styled.div<{ color?: string; size?: string, padding?: string }>`
  display: flex;
  padding: ${(props) => props.padding};  
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.size || '24px'};
`;

