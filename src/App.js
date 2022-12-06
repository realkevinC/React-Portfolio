// import logo from './logo.svg';
import './App.scss';
import { Routes, Route} from 'react-router-dom';
// defining our routes
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Layout />}> {/*create a single route layout components*/}  
        <Route index element={<Home />}/>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='project' element={<Project />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
