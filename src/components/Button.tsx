import styled from "styled-components";

const Button = styled.button<{ width?: string; bgColor?: string | number }>`
  width: ${(props) => (props.width ? props.width : "180px")};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
`;

type ButtonProps = {
  width?: string;
  bgColor?: string | number;
  children: string;
};

function ButtonComponent({ width, bgColor, children }: ButtonProps) {
  return (
    <Button width={width} bgColor={bgColor}>
      {children}
    </Button>
  );
}

export default ButtonComponent;
