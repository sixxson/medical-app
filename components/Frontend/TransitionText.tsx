"use client"
import React from 'react'
import TextTransition, { presets } from 'react-text-transition';

export default function TransitionText({TEXTS,className}:{TEXTS:string[], className?:string}) {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
  
    return (
      <span>
        <TextTransition className={className} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </span>
    );
}
