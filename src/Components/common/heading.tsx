import React from 'react';
interface HeadingProps {
  title: string;
  className?: string;
}

const Heading = ({ title, className }: HeadingProps) => {
  return (
    <div className={`${className} text-3xl text-secondary-700`}>{title}</div>
  );
};

export default Heading;
