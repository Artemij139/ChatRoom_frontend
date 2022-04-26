import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar';
import AppRouter from './Routes/AppRouter';

function App() {


  return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
  );
}

export default App;
