import { CSSProperties } from "styled-components";
import { StyledBox } from "./styled";
import { Stack } from "../Stack";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  bordercolor: string;
  borderwidth: number;
  borderstyle: CSSProperties["borderStyle"];
}>;

export const Box = ({
  bordercolor,
  borderstyle,
  borderwidth,
  children,
}: Props) => {
  return (
    <StyledBox
      bordercolor={bordercolor}
      borderstyle={borderstyle}
      borderwidth={borderwidth}
    >
      {children}
    </StyledBox>
  );
};
