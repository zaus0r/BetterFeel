import { motion, HTMLMotionProps } from 'framer-motion';
import React from 'react';

type AnimationProps = HTMLMotionProps<'div'> & {
  children: React.ReactNode;
  useFramer?: boolean;
};

const Animation: React.FC<AnimationProps> = ({ 
  children, 
  useFramer = true,
  ...props 
}) => {
  if (!useFramer) {
    return (
      <div className={props.className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  );
};

export default Animation; 