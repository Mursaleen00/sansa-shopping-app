import React from 'react';
interface HeadingProps {
  title: string;
  className?: string;
}

const Heading = ({ title, className }: HeadingProps) => {
  return (
    <p className={`${className} md:text-3xl text-xl text-secondary-700`}>
      {title}
    </p>
  );
};

export default Heading;
