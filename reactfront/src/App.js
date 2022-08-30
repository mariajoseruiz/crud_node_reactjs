import logo from './logo.svg';
import './App.css';
//importar componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';

//imp router
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<CompShowBlogs></CompShowBlogs>}></Route>
        <Route path='/create' element={<CompCreateBlog></CompCreateBlog>}></Route>
        <Route path='/edit/:id' element={<CompEditBlog></CompEditBlog>}></Route>
        </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;