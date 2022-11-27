import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AllMeetUps from './pages/AllMeetUps';
import NewMeetUp from './pages/NewMeetUp';
import FavouriteMeetUps from './pages/FavoriteMeetUps';
import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <MainLayout></MainLayout>
      <Routes>
        <Route path='/' exact element={<AllMeetUps />} />
        <Route path='/new-meetup' element={<NewMeetUp />} />
        <Route path='/favourites' element={<FavouriteMeetUps />} />
      </Routes>
    </div>
  );
}

export default App;
