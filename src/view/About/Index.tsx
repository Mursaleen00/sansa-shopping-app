import BreadCrumb from '@/Components/common/bread-crumb';
import { urls } from '@/constant/urls';

const AboutView = () => {
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
    </div>
  );
};

export default AboutView;
