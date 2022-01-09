import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import MoviesSliders from './Components/Slider/MoviesSliders';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <MoviesSliders></MoviesSliders>
    </div>
  );
}

export default App;
