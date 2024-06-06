"use client";

import { CSSProperties, PropsWithChildren } from "react";
import { StyledStack } from "./styled";

type Props = PropsWithChildren<{
  paddinghorizontal?: number;
  paddingvertical?: number;
  flexDirection?: CSSProperties["flexDirection"];
  justifycontent?: CSSProperties["justifyContent"];
  alignitems?: CSSProperties["alignItems"];
  flex?: number;
  wrap?: boolean;
  gap?: number;
  className?: string;
  onClick?: (params?: any) => void;
}>;

export const Stack = ({
  flexDirection = "row",
  justifycontent = "center",
  alignitems,
  flex,
  wrap,
  gap,
  paddingvertical = 0,
  paddinghorizontal = 0,
  className,
  children,
  onClick,
}: Props) => {
  return (
    <StyledStack
      className={className} // Pass className to StyledStack
      flexDirection={flexDirection}
      justifycontent={justifycontent}
      alignitems={alignitems}
      wrap={wrap}
      flex={flex}
      gap={gap}
      paddinghorizontal={paddinghorizontal}
      paddingvertical={paddingvertical}
      onClick={onClick}
    >
      {children}
    </StyledStack>
  );
};
