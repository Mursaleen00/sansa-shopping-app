import React from 'react';
import { useTranslation } from 'react-i18next';
interface ParagraphProps {
  text: string;
}

const Paragraph = ({ text }: ParagraphProps) => {
  const { t } = useTranslation();

  return <p className='text-secondary-500 md:text-base text-sm'>{t(text)}</p>;
};

export default Paragraph;
