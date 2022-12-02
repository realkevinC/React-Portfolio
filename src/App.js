import logo from './logo.svg';
import './App.scss';
import { Routes, Route} from 'react-router-dom';
// defining our routes
import Layout from './components/Layout';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Layout />} /> {/*create a single route layout components*/}  
    </Routes>
    </>
  );
}

export default App;
