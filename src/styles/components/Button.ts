import styled from "styled-components";
import { themeColors } from "theme/colors";

interface IStyledButton {
  variant?: "contained" | "text" | "outline";
}

const getButtonStyles = ({ variant }: IStyledButton) => {
  switch (variant) {
    // case "contained":
    //   return `
    //   background: ${theme.secondary.main};
    //   color: ${theme.primary.light};
    //   border: none;
    //   `;
    // case "outline":
    //   return `
    //   background: none;
    //   color: ${theme.secondary.main};
    //   border: 1px solid rgba(38, 119, 233, 0.28);
    //   `;
    // case "text":
    //   return `
    //   background: none;
    //   color: ${theme.secondary.main};
    //   border: none;
    //   `;
    //     default:
    //       return `
    //       background: ${theme.secondary.main};
    //       color: ${theme.primary.light};
    //       border: none;
    //   `;
    default:
      return `
      background: ${themeColors.LIGHT_GREEN};
      color: ${themeColors.WHITE};
      border: none;
  `;
  }
};

export const StyledButton = styled.button<IStyledButton>`
  width: 100%;
  cursor: pointer;
  padding: 7px;
  ${({ variant }) => getButtonStyles({ variant })}
  font-size: 14px;
  border-radius: 8px;
  :hover {
    opacity: 0.5;
  }
`;
