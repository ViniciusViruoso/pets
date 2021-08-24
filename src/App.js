import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import './App.css'
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProtectRoute from "./Components/Helper/ProtectRoute";
import NotFund from "./Components/NotFund";
import Photo from "./Components/Photo/Photo";
import User from "./Components/User/User";
import UserProfile from "./Components/User/UserProfile";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { UserStorage } from "./UserContext";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header/>
            <main className="appBody">
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='login/*' element={<Login/>} />
                <ProtectRoute path='conta/*' element={<User/>} />
                <Route path='photo/:id' element={<Photo/>} />
                <Route path='perfil/:user' element={<UserProfile/>} />
                <Route path='*' element={<NotFund/>} />
              </Routes>
            </main>
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}
export default App;
