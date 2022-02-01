import { Route } from 'react-router-dom'
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
