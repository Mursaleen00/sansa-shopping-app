// src/Components/common/heading.tsx

// React Imports
import React from 'react';
import { useTranslation } from 'react-i18next';

// Use interface HeadingProps
interface HeadingProps {
  title: string;
  className?: string;
}

const Heading = ({ title, className }: HeadingProps) => {
  // Translation
  const { t } = useTranslation();

  return (
    // Heading
    <p className={`${className} md:text-3xl text-xl text-secondary-700`}>
      {t(title)}
    </p>
  );
};

export default Heading;
