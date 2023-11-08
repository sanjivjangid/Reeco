// import logo from './logo.svg';
import './App.css';
import Breadcrumbs from './components/Breadcrumbs';
import Header from './components/Header';
import Order from './pages/Order';

function App() {
  return (
    <div className="App">
       <Header />
      <Breadcrumbs/> 
      <Order />
    </div>
  );
}

export default App;
