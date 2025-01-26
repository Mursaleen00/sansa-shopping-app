import React from 'react';
import { useTranslation } from 'react-i18next';
interface HeadingProps {
  title: string;
  className?: string;
}

const Heading = ({ title, className }: HeadingProps) => {
  const { t } = useTranslation();

  return (
    <p className={`${className} md:text-3xl text-xl text-secondary-700`}>
      {t(title)}
    </p>
  );
};

export default Heading;
