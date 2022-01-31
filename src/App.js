import { Route } from 'react-router-dom'
import Home from './page/Home/index';

function App() {
  return (
    <>
      <Route path="/" component={ Home } />
    </>
  );
}

export default App;
