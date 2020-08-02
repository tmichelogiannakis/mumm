import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  typography,
  space,
  layout,
  position,
  flexbox,
  border,
  color,
  TypographyProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
  FlexboxProps,
  BorderProps,
  ColorProps
} from 'styled-system';

export type BoxProps = TypographyProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  FlexboxProps &
  BorderProps &
  ColorProps & { className?: string };

const Box: FunctionComponent<BoxProps> = styled('div', {
  shouldForwardProp
})(typography, space, layout, position, flexbox, border, color) as FunctionComponent<BoxProps>;

export default Box;
