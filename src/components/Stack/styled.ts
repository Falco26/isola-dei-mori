'use client'

import styled, { CSSProperties } from 'styled-components'

type Props = {
  paddingvertical: number
  paddinghorizontal: number
  flexDirection: CSSProperties['flexDirection']
  justifycontent: CSSProperties['justifyContent']
  alignitems?: CSSProperties['alignItems']
  flex?: number
  wrap?: boolean
  gap?: number
}

export const StyledStack = styled.div<Props>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifycontent }) => justifycontent};
  align-items: ${({ alignitems }) => alignitems};
  padding-bottom: ${({ paddingvertical }) => paddingvertical / 2}px;
  padding-top: ${({ paddingvertical }) => paddingvertical / 2}px;
  padding-right: ${({ paddinghorizontal }) => paddinghorizontal / 2}px;
  padding-left: ${({ paddinghorizontal }) => paddinghorizontal / 2}px;
  flex: ${({ flex }) => (flex ? flex : 'initial')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  gap: ${({ gap }) => gap}px;
`
