import React, { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import Box, { BoxProps } from '../box';

type RowProps = BoxProps & { display?: string; flexWrap?: string };

const Row: FunctionComponent<RowProps> = ({ className, children, ...otherProps }) => {
  const { gutter } = useTheme();

  return (
    <Box className={className} mr={`-${gutter}`} ml={`-${gutter}`} {...otherProps}>
      {children}
    </Box>
  );
};

Row.defaultProps = {
  display: 'flex',
  flexWrap: 'wrap'
};

export default Row;
