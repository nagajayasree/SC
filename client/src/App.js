import './App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserContextProvider } from './UserContext';
import Details from './pages/Details';
import CreateFeed from './pages/CreateFeed';
import EditFeed from './pages/EditFeed';

function App() {
  return (
    <main>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/audios'} element={
            <div>audios</div>
          } />
          <Route path={'/videos'} element={
            <div>videos</div>
          } />
          <Route path={'/create'} element={<CreateFeed />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/post/:id'} element={<Details />} />
          <Route path={'/edit/:id'} element={<EditFeed />} />
        </Routes>
      </UserContextProvider>
    </main>
  );
}

export default App;
