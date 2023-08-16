import theme from "./global"

const themeButton = {
  headerButton: {
    "width": "180px",
    "background-color": theme.colors.transparent,
    "border": `1px solid ${theme.colors.grayLigth}`,
    "border-radius": "4px",
    "color": theme.colors.white,
    "font-size": "21px",
    "padding": "10px 15px",
    "cursor": "pointer"
  },
  saveButton: {
    "width": "180px",
    "background-color": theme.colors.primary,
    "border": "none",
    "border-radius": "4px",
    "color": theme.colors.white,
    "padding": "5px 3px",
    "font-size": "21px",
    "cursor": "pointer"
  },
  newCategoryButton: {
    "width": "210px",
    "background-color": theme.colors.primary,
    "border": "none",
    "border-radius": "4px",
    "color": theme.colors.white,
    "padding": "5px 3px",
    "font-size": "21px",
    "cursor": "pointer"
  },
  cleanButton: {
    "width": "180px",
    "background-color": theme.colors.blackLighter,
    "border": "none",
    "border-radius": "4px",
    "color": theme.colors.white,
    "padding": "5px 3px",
    "font-size": "21px",
    "cursor": "pointer"
  }
}

export default themeButton