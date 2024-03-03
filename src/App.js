import './App.css';
import Result from './components/Result';
// import Form from './components/Form';
import Schema from './components/Schema';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Form /> */}
      <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Schema/>}/>
        <Route path='/result' element={ <Result/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
