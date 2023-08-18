import styled  from "styled-components";
import theme from "./global";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 35px;
  background-color: ${theme.colors.dark90};
`;

export const DivImage = styled.div`
  a {
    img {
      width: 170px;
    }
  }
  
`;