"use client";

import { CSSProperties, PropsWithChildren, RefObject } from "react";
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
  ref?: RefObject<HTMLDivElement>;
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
  ref,
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
      ref={ref}
    >
      {children}
    </StyledStack>
  );
};
