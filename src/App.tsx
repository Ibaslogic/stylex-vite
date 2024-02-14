import * as stylex from '@stylexjs/stylex';

import { Button } from './components/Button';
import { SimpleText } from './components/SimpleText';
import { useState } from 'react';

const styles = stylex.create({
  button: {
    width: {
      default: 200,
      '@media (max-width: 400px)': '100%',
    },
  },
  dynamicStyle: (value) => ({
    opacity: value,
  }),
});

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleButtonClick = async () => {
    // Simulate an asynchronous form submission
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay
    setIsSubmitting(false);
  };

  return (
    <div>
      <SimpleText />
      <br />
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="destructive" styles={styles.button}>
        Custom styles
      </Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <br />
      <br />
      <Button
        onClick={handleButtonClick}
        styles={styles.dynamicStyle(isSubmitting ? 0.5 : 1)}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </div>
  );
}
