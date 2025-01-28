// src/Components/buttons/button.tsx
'use client';

// React import  & Next import
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

// Use interface IButton
interface IButton {
  text: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
  className?: string;
  isOutline?: boolean;
  disabled?: boolean;
  icon?: string;
}

const Button = ({
  text,
  onClick,
  type,
  className,
  isOutline,
  disabled,
  icon,
}: IButton) => {
  // Translation
  const { t } = useTranslation();

  return (
    // Button
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`
        ${isOutline ? 'border border-secondary-400 bg-transparent text-primary' : 'bg-primary text-white'}
        font-medium text-sm
        w-fit h-11
        px-6 py-2.5
        rounded-full
        flex items-center justify-center gap-x-3
        disabled:!bg-secondary-100
        ${className}
      `}
    >
      {/* image  */}
      {icon && (
        <Image
          alt=''
          src={icon}
          width={16}
          height={20}
        />
      )}
      {/* Text  */}
      {t(text)}
    </button>
  );
};

export default Button;
