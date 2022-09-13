import styles from '../style';

const ServeComponent = ({ icon, title, name, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px]  feature-card w-[30%] mb-5 mt-5 `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt='star' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'>{name}</h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>{name}</p>
    </div>
  </div>
);

export default ServeComponent;
