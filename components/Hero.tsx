import Gradient from '../components/Gradient';

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-start min-h-screen">
      <h2 className="text-xl">Hi! My name is</h2>
      <Gradient className="text-5xl">Brian.</Gradient>
      <h2 className="text-xl">I build things for the web.</h2>
    </section>
  );
};

export default Hero;
