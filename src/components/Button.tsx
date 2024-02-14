import { ComponentProps } from 'react';
import * as stylex from '@stylexjs/stylex';

import { colors, spacing } from '../../tokens.stylex';

type CustomButtonProps = {
  variant?: 'outline' | 'destructive' | 'ghost';
  styles?: stylex.StyleXStyles;
} & ComponentProps<'button'>;

const btnStyles = stylex.create({
  default: {
    color: colors.primaryColor,
    border: 'none',
    backgroundColor: colors.primaryDarkColor,
    borderRadius: spacing.sizeSm,
    height: spacing.sizeXl,
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    opacity: {
      default: 1,
      ':hover': 0.8,
    },
  },
  outline: {
    color: colors.primaryDarkColor,
    backgroundColor: {
      default: colors.primaryColor,
      ':hover': colors.lightGreyColor,
    },
    border: '1px solid #dbdbdb',
  },
  destructive: {
    backgroundColor: '#f15756',
  },
  ghost: {
    color: colors.primaryDarkColor,
    backgroundColor: {
      default: 'transparent',
      ':hover': '#f3f3f3',
    },
  },
});

export function Button({
  variant,
  styles,
  ...props
}: CustomButtonProps) {
  return (
    <button
      {...stylex.props(
        btnStyles.default,
        variant && btnStyles[variant],
        styles
      )}
      {...props}
    />
  );
}
