import { feedback, services } from '../constants';
import styles from '../style';
import OurServices from './OurServices';

const Testimonials = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />

    <h2 className={styles.heading2}>Our Services</h2>
    <div className='w-full md:mt-0 mt-6'>
      <p className={`${styles.paragraph} text-left max-w-[450px]`}>We work with great zeal to bring innovative and user friendly web applications.</p>
    </div>

    <div className='flex flex-wrap sm:justify-between justify-center w-full feedback-container relative z-[1]'>
      {services.map((card) => (
        <OurServices key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
