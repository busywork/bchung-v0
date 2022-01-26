import DarkModeToggle from '../components/DarkModeToggle';

const Header = () => {
  return (
    <header className="flex content-center items-center">
      <nav className="flex justify-end w-full p-4">
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Header;
