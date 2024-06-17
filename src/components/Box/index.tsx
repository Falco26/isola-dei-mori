import { CSSProperties } from "styled-components";
import { StyledBox } from "./styled";
import { Stack } from "../Stack";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  bordercolor: string;
  borderwidth: number;
  borderstyle: CSSProperties["borderStyle"];
  className?: string;
  onClick?: () => void;
}>;

export const Box = ({
  bordercolor,
  borderstyle,
  borderwidth,
  className,
  onClick,
  children,
}: Props) => {
  return (
    <StyledBox
      bordercolor={bordercolor}
      borderstyle={borderstyle}
      borderwidth={borderwidth}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledBox>
  );
};
