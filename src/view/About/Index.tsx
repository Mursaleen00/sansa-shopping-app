'use client';
import BreadCrumb from '@/Components/common/bread-crumb';
import { urls } from '@/constant/urls';
import Image from 'next/image';
import Card from '@/../public/image/card.jpg';
import Team from '@/../public/image/team.jpg';
import { useGetAllUsersHook } from '@/services/user/get-all-users';
import { useTranslation } from 'react-i18next';

const AboutView = () => {
  const { data } = useGetAllUsersHook({
    limit: 5,
    select: ['image', 'firstName'],
  });
  const { t } = useTranslation();
  return (
    <div>
      <div className='flex gap-1'>
        <BreadCrumb
          items={[
            { name: 'Home', link: urls.home },
            { name: 'About Us', link: urls.about },
          ]}
        />
      </div>
      {/* 1st section  */}
      <div className='flex flex-col bg-gray  justify-center items-center p-5 rounded-md '>
        <div className='flex flex-col font-bold text-2xl text-center '>
          {t('Control Your Finances With')}

          <br />
          <p className='text-primary'>{t('Our SmartTool')}</p>
        </div>
        <div className='flex flex-col items-center justify-center text-xs p-3 text-center'>
          {t('Lorem ipsum dolor sit amet consectetur end of adipisicing elit')}
          <br />
          {t('Lorem ipsum dolor sit return')}
        </div>
      </div>

      {/* 2nd section */}
      <div>
        {/* Card  */}
        <div className='grid md:grid-cols-2 justify-center items-center gap-y-8 py-9'>
          <Image
            alt=''
            src={Card}
            width={1000}
            className='w-[400px] items-center'
            height={1000}
          />
          <div className='flex flex-col gap-y-6'>
            <h1 className='flex font-bold text-2xl'>{t('About Us')}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              velit ipsum praesentium! Molestias delectus sed voluptates, ipsam
              corrupti nesciunt ? Non asperiores reprehenderit labore
              repellendus, placeat veniam. Quos laudantium minus asperiores!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              repudiandae maiores dolorum sit maxime, ea provident quidem enim?s
              voluptas exercitationem consequatur ducimus officiis? Consequuntur
              eligendi ipsam quisquam quo amet ad ullam, perferendis dolor?
            </p>
          </div>
        </div>
        {/* Team  */}
        <div className='grid md:grid-cols-2 justify-center items-center gap-8 py-9 '>
          <div className='flex flex-col gap-y-6 order-2 md:order-1'>
            <h1 className='flex font-bold text-2xl '>
              {t('We are Creative Since 2025')}
            </h1>
            <p className='text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              velit ipsum praesentium! Molestias delectus sed voluptates, ipsam
              corrupti nesciunt ? Non asperiores reprehenderit labore
              repellendus, placeat veniam. Quos laudantium minus asperiores!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              repudiandae maiores dolorum sit maxime, ea provident quidem enim?s
              voluptas exercitationem consequatur ducimus officiis? Consequuntur
              eligendi ipsam quisquam quo amet ad ullam, perferendis dolor?
            </p>
          </div>
          <Image
            alt=''
            src={Team}
            width={1000}
            className='w-[500px] items-center md:order-1'
            height={1000}
          />
        </div>
      </div>
      {/* 3rd section  */}
      <div className='grid  gap-9 bg-gray p-6 rounded-xl'>
        <div className='flex flex-col items-center justify-around gap-9'>
          <h2 className='flex font-bold text-2xl'>
            {t('What our happy user says!')}
          </h2>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit
            ipsum praesentium! Molestias delectus sed voluptates, ipsam corrupti
            accusamus voluptate voluptates explicabo harum omnis qui culpa
            repudiandae dicta modi? Vel fugit sint voluptatum autem
            necessitatibus, mollitia reprehenderit. Esse, inventore sit qui
            porro tenetur minus voluptas exercitationem consequatur ducimus
            officiis? Consequuntur eligendi ipsam quisquam quo amet ad ullam,
            perferendis dolor?
          </p>
        </div>

        <div className='flex text-center justify-around items-center p-6'>
          {data?.users.map((item, i) => {
            return (
              <div key={i}>
                <Image
                  alt=''
                  width={100}
                  height={100}
                  src={item.image}
                />
                {item.firstName}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutView;

{
  /* <div className='flex gap-1'>
    <div className='text-[#B3B7B1]'>Home</div>/<div>About us</div>
  </div> */
}
