'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { cn } from '../../utils/cn';

export default function Counter({ end, duration = 2.5, prefix = '', suffix = '', className, ...props }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={cn("font-bold tracking-tight text-white", className)} {...props}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          separator=","
        />
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </div>
  );
}
