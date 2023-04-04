import { Route, Routes } from 'react-router';
import './App.css';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import SearchPage from './pages/SearchPage';

function App() {
    return (

      <Routes>
        <Route path='/' element={<LoginPage/>} />

        <Route path='/admin' element={<AdminPage/>} />

        <Route path='/search' element={<SearchPage/>} />

      </Routes>
  );
}

export default App;
