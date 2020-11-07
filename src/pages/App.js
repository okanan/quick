import './App.css';
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Characters from '../components/Characters'

function App() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="filter">
          <Filter/>  
        </div>
        <div className="characters">
          <Characters/>
        </div>
      </div>
    </>
  );
}

export default App;
