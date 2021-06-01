import Fragment from 'render-fragment';
import BannerSlider from './UI/Banner/Banner';


import './App.css';

function App() {
  return (
    <div className="App">
      <Fragment>
        <BannerSlider />
      </Fragment>
    </div>
  );
}

export default App;
