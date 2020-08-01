import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { typography, space, layout, variant, TypographyProps, SpaceProps, LayoutProps } from 'styled-system';

type TextProps = TypographyProps & SpaceProps & LayoutProps & { className?: string; textVariant?: 'large' | 'normal' | 'small' };

/* const textSizeVariant = variant({
  scale: 'textSizeVariants',
  prop: 'textSizeVariant'
}); */

const Text: FunctionComponent<TextProps> = styled('div', {
  shouldForwardProp
})(
  typography,
  space,
  layout,
  variant({
    prop: 'textVariant',
    scale: 'textVariants'
  })
) as FunctionComponent<TextProps>;

Text.defaultProps = {
  textVariant: 'normal'
};

export default Text;
