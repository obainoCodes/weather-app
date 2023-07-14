import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import { useState, useEffect } from 'react';
import Loader from './Loader/Loader';

function App() {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=globe&APPID=878e948fa57edd68ec892de675aea020`)
    .then(res => res.json())
    .then((data) => setSearchData(data))
  }, []);



  return (
    <>
      {(typeof (searchData.main)  === "undefined") ? <Loader /> : <Home searchData={searchData} setSearchData={setSearchData} />}
    </>
  );
}

export default App;
