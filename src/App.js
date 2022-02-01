import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './page/Home/index';
import Guns from './page/Guns/index'

function App() {
  return (
    <>
      <Route exact path="/" component={ Home } />
      <Route path="/armas" component={ Guns } />
    </>
  );
}

export default App;
