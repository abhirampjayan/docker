import PlaceSearch from './PlaceSearch';

const Header = () => {
  return (
    <div className="glass container mx-auto flex justify-between items-center flex-wrap">
      <h1 className="text-xl mb-4 sm:mb-0 sm:text-3xl text-center w-full sm:w-max sm:text-start heading">Simple Weather</h1>
      <PlaceSearch />
    </div>
  );
};

export default Header;
