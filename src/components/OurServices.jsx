import { quotes } from '../assets';

const OurServices = ({ content, name, title, img }) => (
  <div className='flex justify-between items-center  flex-col px-10 py-12 rounded-[20px]  w-[250px]  sm:mr-5 mr-0 my-5 feedback-card'>
    <img src={img} alt={name} className='w-[120px] h-[120px] rounded-full' />
    <h4 className='font-poppins font-semibold  text-[20px]  text-white my-5' style={{ 'text-align': 'center' }}>
      {name}
    </h4>
  </div>
);

export default OurServices;
