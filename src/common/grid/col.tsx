import React, { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import Box, { BoxProps } from '../box';

type ColProps = BoxProps & { size?: { [x: string]: string }; position?: { [x: string]: string } };

const Col: FunctionComponent<ColProps> = ({ className, size, children, ...otherProps }) => {
  const { gutter } = useTheme();

  const basicSizeProps: {
    flexGrow: { [key: string]: any };
    flexShrink: { [key: string]: any };
    flexBasis: { [key: string]: any };
    maxWidth: { [key: string]: any };
    width: { [key: string]: any };
  } = {
    flexGrow: { default: 1 },
    flexShrink: { default: 'unset' },
    flexBasis: { default: 0 },
    maxWidth: { default: '100%' },
    width: { default: '100%' }
  };

  console.log({ size });

  const sizeProps = size
    ? Object.entries(size).reduce(({ flexGrow, flexShrink, flexBasis, maxWidth, width }, [key, value]) => {
        if (value === 'auto') {
          flexGrow[key] = 0;
          flexShrink[key] = 0;
          flexBasis[key] = 'auto';
          maxWidth[key] = '100%';
          width[key] = 'auto';
        } else if (value === 'unset') {
          flexGrow[key] = 1;
          flexShrink[key] = 'unset';
          flexBasis[key] = 0;
          maxWidth[key] = '100%';
          width[key] = 'unset';
        } else {
          flexGrow[key] = 0;
          flexShrink[key] = 0;
          flexBasis[key] = `${value}`;
          maxWidth[key] = `${value}`;
          width[key] = 'unset';
        }

        return { flexGrow, flexShrink, flexBasis, maxWidth, width };
      }, basicSizeProps)
    : basicSizeProps;

  return (
    <Box className={className} pr={gutter} pl={gutter} {...sizeProps} {...otherProps}>
      {children}
    </Box>
  );
};

Col.defaultProps = {
  size: { default: 'unset' },
  position: { default: 'relative' }
};

export default Col;
