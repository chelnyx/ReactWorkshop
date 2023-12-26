
import './App.css';
import Navigations from './Navigations';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './page/Home'
import Members from './page/Members'
import Product from './page/Product'
import Admin from './page/Admin'


function App() {
  return (
    <div>

    <Router>

      <Navigations/>

      <Routes>
        <Route path='/' Component={Home} exact/>
        <Route path='/member' Component={Members}/>
        <Route path='/product' Component={Product}/>
        <Route path='/admin' Component={Admin}/>
      </Routes>
      

    </Router>

    </div>
  );
}

export default App;
