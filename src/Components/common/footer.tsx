'use client';
import Sansa from '@/../public/image/Sansa.png';
import { FooterData } from '@/constant/FooterData';
import { urls } from '@/constant/urls';
import { languagesType } from '@/types/language';
import { switchLanguage } from '@/utils/switch-language';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Switch from 'react-switch';

const Footer = () => {
  const [language, setLanguage] = useState<languagesType['value']>('en');

  useEffect(() => {
    switchLanguage(language);
  }, [language]);

  const { t } = useTranslation();

  return (
    <div className='bg-gray px-6 md:px-12 xl:px-24 flex flex-col w-full gap-y-10  py-10'>
      {/* Upper Section */}
      <div className='flex flex-wrap gap-4 items-center justify-between w-full'>
        <Link href={urls.home}>
          <Image
            alt=''
            src={Sansa}
            width={100}
          />
        </Link>
        <div className='flex gap-3 items-center'>
          <p>English</p>
          <Switch
            onChange={() => setLanguage(language === 'en' ? 'sp' : 'en')}
            checked={language === 'sp'}
            checkedIcon={false}
            uncheckedIcon={false}
            className='flex !bg-primary'
            onColor='#8ac732'
            offColor='#8ac732'
          />
          <p>Spanish</p>
        </div>
      </div>

      <div className='grid sm:grid-cols-3 gap-y-9'>
        {FooterData.map((item, i) => (
          <div
            key={i}
            className='flex flex-col gap-y-5 '
          >
            <p className='font-Roboto '>{t(item.title)}</p>

            {item.title !== 'Payment Method' ? (
              <div className='flex flex-col gap-y-3 text-xs'>
                {item.data.map((list, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-x-1'
                  >
                    {list.icon && (
                      <Image
                        alt=''
                        src={list.icon || ''}
                        width={20}
                        height={20}
                      />
                    )}

                    <p>{t(list.text || '')}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className='flex flex-wrap w-full gap-2'>
                {item.data.map((list, index) => (
                  <Image
                    key={index}
                    src={list.icon || ''}
                    alt=''
                    width={35}
                    height={24}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className='border border-[#E1E4D5] w-full' />

      {/* Lower Section */}

      <div className='flex justify-center'>{t('Copyright')} 2024</div>
    </div>
  );
};

export default Footer;
