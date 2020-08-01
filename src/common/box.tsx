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
  TypographyProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
  FlexboxProps,
  BorderProps
} from 'styled-system';

export type BoxProps = TypographyProps & SpaceProps & LayoutProps & PositionProps & FlexboxProps & BorderProps & { className?: string };

const Box: FunctionComponent<BoxProps> = styled('div', {
  shouldForwardProp
})(typography, space, layout, position, flexbox, border) as FunctionComponent<BoxProps>;

export default Box;
