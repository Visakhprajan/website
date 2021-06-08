import Fragment from 'render-fragment';
import BannerSlider from './UI/Banner/Banner';
import Container from './UI/About/About';
import Skills from './UI/Skills/Skills';
import Portfolio from './UI/Portfolio/Portfolio';
import WeProvide from './UI/WeProvide/WeProvide';

import './App.css';

function App() {
  return (
    <div>
      <Fragment>
        <BannerSlider />
        <Container>
        </Container>
          <Skills />
          <Portfolio />
          <WeProvide />
      </Fragment>
    </div>
  );
}

export default App;
