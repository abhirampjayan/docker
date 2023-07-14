import './App.css';
import DetailsWidget from './components/DetailsWidget';
import MainWidget from './components/MainWidget';
import PlaceSearch from './components/PlaceSearch';
import PlaceSearchContextProvider from './context/PlaceSearchContext';
function App() {
  return (
    <div className="bg-[url('./assets/bg1.jpg')] bg-cover bg-center flex flex-col min-w-screen gap-4 min-h-screen p-14">
      <div className="glass container mx-auto flex justify-between items-center">
        <h1 className="text-3xl heading">Simple Weather</h1>
        <PlaceSearchContextProvider>
          <PlaceSearch />
        </PlaceSearchContextProvider>
      </div>
      <div className="flex flex-grow container mx-auto overflow-y-auto">
        <div className="grid grid-cols-12 w-full gap-4">
          <MainWidget />
          <DetailsWidget />
        </div>
      </div>
    </div>
  );
}

export default App;
