import PlaceSearch from './PlaceSearch';

const Header = () => {
  return (
    <div className="glass container mx-auto flex justify-between items-center">
      <h1 className="text-3xl heading">Simple Weather</h1>
      <PlaceSearch />
    </div>
  );
};

export default Header;
