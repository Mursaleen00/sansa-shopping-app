import React from 'react';
interface ParagraphProps {
  text: string;
}

const Paragraph = ({ text }: ParagraphProps) => {
  return <p className='text-secondary-500 md:text-base text-sm'>{text}</p>;
};

export default Paragraph;
