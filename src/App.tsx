import './App.css';
import ErrorDisplay from './components/ErrorDisplay';
import PlaceSearchContextProvider from './context/PlaceSearchContext';
import Header from './components/Header';
import Contents from './components/Contents';

function App() {
  return (
    <div className="flex flex-col min-w-screen gap-4 min-h-screen p-4 sm:p-14">
      <PlaceSearchContextProvider>
        <Header />
        <ErrorDisplay />
      </PlaceSearchContextProvider>
      <Contents />
    </div>
  );
}

export default App;
