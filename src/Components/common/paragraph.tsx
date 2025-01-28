// src/Components/common/paragraph.tsx

// React Imports
import React from 'react';
import { useTranslation } from 'react-i18next';

// Use interface ParagraphProps
interface ParagraphProps {
  text: string;
}

const Paragraph = ({ text }: ParagraphProps) => {
  // Translation
  const { t } = useTranslation();

  // Paragraph
  return <p className='text-secondary-500 md:text-base text-sm'>{t(text)}</p>;
};

export default Paragraph;
