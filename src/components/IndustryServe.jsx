import { feedback, services } from '../constants';
import styles from '../style';
import ServeComponent from './ServeComponent';

const Testimonials = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />
    <h2 className={styles.heading2}>Industries We Serve</h2>
    <div className='w-full md:mt-0 mt-6'>
      <p className={`${styles.paragraph} text-left max-w-[500px]`}>
        Empowering businesses across verticals by leveraging the power of mobility that help accelerate innovation, reduce costs and improve
        performance.
      </p>
    </div>
    <div className='flex flex-wrap sm:justify-between justify-center w-full feedback-container relative z-[1] mt-10'>
      {services.map((card) => (
        <ServeComponent key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
