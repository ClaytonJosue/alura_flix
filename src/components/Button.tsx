import styled from "styled-components";
import themeButton from "../styles/buttons";

const Button = styled.button<{
  headerButton?: boolean;
  newCategoryButton?: boolean;
  saveButton?: boolean;
  cleanButton?: boolean;
}>`
  ${(props) => (props.headerButton ? themeButton.headerButton : "")}
  ${(props) => (props.newCategoryButton ? themeButton.newCategoryButton : "")}
  ${(props) => (props.saveButton ? themeButton.saveButton : "")}
  ${(props) => (props.cleanButton ? themeButton.cleanButton : "")}
`;

type ButtonProps = {
  children: string;
  headerButton?: boolean;
  newCategoryButton?: boolean;
  saveButton?: boolean;
  cleanButton?: boolean;
};

function ButtonComponent({
  headerButton,
  newCategoryButton,
  saveButton,
  cleanButton,
  children,
}: ButtonProps) {
  return (
    <Button
      headerButton={headerButton}
      newCategoryButton={newCategoryButton}
      saveButton={saveButton}
      cleanButton={cleanButton}
    >
      {children}
    </Button>
  );
}

export default ButtonComponent;
