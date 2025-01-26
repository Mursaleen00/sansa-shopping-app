'use client';
import Button from '@/Components/buttons/button';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactView = () => {
  const { t } = useTranslation();

  return (
    <section className='text-gray-600 body-font relative'>
      <div className='absolute inset-0 bg-gray-300'>
        <iframe
          width='100%'
          height='100%'
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14469.956193830852!2d66.99664346461297!3d24.94947055128286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36ae71fc40a31%3A0xcfbb1d61e6ab566d!2sOrangi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1736282756099!5m2!1sen!2s'
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
        ></iframe>
      </div>
      <div className='container px-5 py-24 mx-auto flex'>
        <div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'>
          <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
            {t('Contact Us')}
          </h2>
          <p className='leading-relaxed mb-5 text-gray-600'>
            {t("Tell us more and we'll find the best solution for you")}
          </p>
          <div className='relative mb-4'>
            <label
              htmlFor='email'
              className='leading-7 text-sm text-gray-600'
            >
              {t('Email')}
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className='leading-7 text-sm text-gray-600'
            >
              {t('Send us a message')}
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            ></textarea>
          </div>
          <Button
            text={t('Submit')}
            className='w-full'
          />
        </div>
      </div>
    </section>
  );
};

export default ContactView;
