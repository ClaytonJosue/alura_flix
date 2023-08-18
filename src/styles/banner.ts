import styled from "styled-components";
import theme from "./global";

export const Banner = styled.div`
  position: relative;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100vh;
`;

export const BannerFront = styled.div`
  position: absolute;
  top: 110px;
  display: flex;
  padding: 0 15px 0 45px;
  color: ${theme.colors.grayLigth}
`;

export const BannerContent = styled.section`
  h3 {
    padding: 30px 0 15px;
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  p {
    width: 600px;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;