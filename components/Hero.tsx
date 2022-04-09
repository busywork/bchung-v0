import CloudinaryImage from './CloudinaryImage';
import Gradient from './Gradient';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-wrap justify-center content-center items-center h-[calc(100vh-2.75em)]"
    >
      <div>
        <CloudinaryImage height={300} width={300} publicId={'circle_avatar'} alt={'avatar'} />
      </div>
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-xl">Hi! My name is</h2>
        <Gradient className="text-6xl">Brian.</Gradient>
        <h2 className="text-xl">I build things for the web.</h2>
      </div>
    </section>
  );
};

export default Hero;
