import { Route, Routes } from 'react-router';
import './App.css';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import SearchPage from './pages/SearchPage';
import RegisterPage from './pages/RegisterPage';
import { Toaster } from 'react-hot-toast';
import AdminRoute from './components/routing/AdminRoute';
import AuthRoute from './components/routing/AuthRoute';
import PageNotFound from './components/layout/PageNotFound';


function App() {
  return (

    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        <Route path='/' element={<LoginPage />} />

        <Route path='/register' element={<RegisterPage />} />

        <Route path='/admin' element={
          <AdminRoute>
            <AdminPage />
          </AdminRoute>}
        />

        <Route path='/search' element={
          <AuthRoute>
            <SearchPage />
          </AuthRoute>
        } />

        <Route path='*' element={<PageNotFound/>}/>

      </Routes>
    </>
  );
}

export default App;
