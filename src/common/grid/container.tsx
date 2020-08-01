import React, { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import Box, { BoxProps } from '../box';

type ContainerProps = BoxProps & { ml?: string; mr?: string };

const Container: FunctionComponent<ContainerProps> = ({ className, children, ...otherProps }) => {
  const { gutter } = useTheme();

  return (
    <Box className={className} pr={gutter} pl={gutter} {...otherProps}>
      {children}
    </Box>
  );
};

Container.defaultProps = {
  ml: 'auto',
  mr: 'auto'
};

export default Container;
