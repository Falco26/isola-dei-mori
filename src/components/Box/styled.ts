import { CSSProperties } from 'react'
import styled from 'styled-components'

type Props = {
  bordercolor: string
  borderwidth: number
  borderstyle: CSSProperties['borderStyle']
}

export const StyledBox = styled.div<Props>`
  border-color: ${({ bordercolor }) => bordercolor};
  border-width: ${({ borderwidth }) => borderwidth}px;
  border-style: ${({ borderstyle }) => borderstyle};
`
