import styled from 'styled-components'
import { Props } from './index'

export const P = styled.p<Props>`
  color: ${(props) =>
    props.type === 'principal'
      ? props.theme.mainColor
      : props.theme.secondaryColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
`
