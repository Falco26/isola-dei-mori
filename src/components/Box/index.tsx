import { CSSProperties } from "styled-components";
import { StyledBox } from "./styled";
import { Stack } from "../Stack";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  bordercolor: string;
  borderwidth: number;
  borderstyle: CSSProperties["borderStyle"];
  className?: string;
}>;

export const Box = ({
  bordercolor,
  borderstyle,
  borderwidth,
  className,
  children,
}: Props) => {
  return (
    <StyledBox
      bordercolor={bordercolor}
      borderstyle={borderstyle}
      borderwidth={borderwidth}
      className={className}
    >
      {children}
    </StyledBox>
  );
};
