import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import ProtectedRoute from './pages/ProtectedRoute';
import PageLoading from './pages/PageLoading';
import Notification from './pages/Notification/Notification';
import Bookmark from './pages/Bookmarks/Bookmark';
import Feed from './pages/Feed/Feed'
import Explore from './pages/Explore/Explore';
import Profile from './pages/Profile/Profile';
import List from './pages/List/List';
import Messages from './pages/Messages/Messages'
import More from './pages/More/More';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}>
                    <Route index element={<Feed />} />
                </Route>
                <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>}>
                      <Route path='notification' element={<Notification/>}/>
                      <Route path='explore' element={<Explore/>}/>
                      <Route path='feed' element={<Feed/>}/>
                      <Route path='bookmark' element={<Bookmark/>}/>
                      {/* <Route path='more' element={<More/>}/> */}
                      <Route path='list' element={<List/>}/>
                      <Route path='profile' element={<Profile/>}/>
                      <Route path='message' element={<Messages/>}/>
                      <Route path='more' element={<More/>}/>



                </Route>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/loading-page' element={<PageLoading />}/>

            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
