import weather from './assets/svgs/SVG/partially_cloudy.svg';
import './App.css';
import PlaceSearch from './components/PlaceSearch';
function App() {
  return (
    <div className="bg-[url('./assets/bg1.jpg')] bg-cover bg-center flex flex-col min-w-screen gap-4 min-h-screen p-14">
      <div className="glass container mx-auto flex justify-between items-center">
        <h1 className="text-3xl heading">Simple Weather</h1>

        <div className="">
          <PlaceSearch />
        </div>
      </div>
      <div className="flex flex-grow container mx-auto overflow-y-auto">
        <div className="grid grid-cols-12 w-full">
          <div className="glass col-span-6">
            <h1 className="heading">A{process.env.GEOAPIFY_API_KEY}</h1>
            <img src={weather} className="w-40 ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
