import './App.css';
import './pages/HomePage/HomePage'
import HomePage from './pages/HomePage/HomePage';
import ListTripsPage from './pages/ListTripsPage/ListTripsPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ListTripsPage />
    </div>
  );
}

export default App;
