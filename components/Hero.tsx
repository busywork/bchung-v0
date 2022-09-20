import CloudinaryImage from './CloudinaryImage';
import Gradient from './Gradient';
import UnstyledLink from './UnstyledLink';

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
        <div className="my-4">
          {/* <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-black rounded group bg-gradient-to-br from-purple-600 via-blue-500 to-green-300 group-hover:from-purple-600 group-hover:via-blue-500 group-hover:to-green-300 hover:text-white dark:from-indigo-400 dark:via-purple-300 dark:to-pink-300 dark:text-white focus:outline-none">
            <span className="relative px-4 py-2 transition-all ease-in duration-150 bg-white dark:bg-black rounded group-hover:bg-opacity-0">
              Résumé
            </span>
          </button> */}
          <UnstyledLink href={'mailto:bchung.dev@gmail.com'} openNew={true}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-black rounded group bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600 group-hover:from-green-300 group-hover:via-blue-600 group-hover:to-purple-600 hover:text-white dark:from-pink-300 dark:via-purple-300 dark:to-indigo-400 dark:text-white focus:outline-none">
              <span className="relative px-4 py-2 transition-all ease-in duration-150 bg-white dark:bg-black rounded group-hover:bg-opacity-0">
                Say Hello!
              </span>
            </button>
          </UnstyledLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
