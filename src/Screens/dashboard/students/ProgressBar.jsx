import React from 'react';
import * as Progress from '@radix-ui/react-progress';
import { Heading, Text } from '@radix-ui/themes'
import './styles.css';

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Text>Loading AI data... </Text>
    <Progress.Root className="ProgressRoot" value={progress}>
      <Progress.Indicator
        className="ProgressIndicator"
        value="50"
        style={{ transform: `translateX(-${100 - progress}%)` }}
        data-state="loading"

      />
      
    </Progress.Root>
    </>
  );
};

export default ProgressDemo;
