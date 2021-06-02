import Fragment from 'render-fragment';
import BannerSlider from './UI/Banner/Banner';
import Container from './UI/About/About';

import './App.css';

function App() {
  return (
    <div>
      <Fragment>
        <BannerSlider />
        <Container>
        
        </Container>
      </Fragment>
    </div>
  );
}

export default App;
