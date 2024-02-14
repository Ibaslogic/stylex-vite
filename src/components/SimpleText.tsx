import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    color: 'blue',
    fontSize: 30,
  },
  colorRed: {
    color: 'red',
  },
});

export function SimpleText() {
  return (
    <h1 {...stylex.props(styles.base, styles.colorRed)}>
      I am a heading text
    </h1>
  );
}
