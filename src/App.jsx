// App.jsx

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../Screens/Home';
import Footer from '../components/Footer';
import SignUpScreen from '../Screens/SignUpScreen';
import LoginScreen from '../Screens/LoginScreen';
import ReviewScreen from '../Screens/ReviewScreen';
import OrderScreen from '../Screens/OrderScreen';
import Error404 from '../Screens/Error404';
import UserScreen from '../Screens/UserScreen';
import { UserProvider , useUser} from '../contextAPI/userContext';
import UserNavbar from '../components/UserNavbar';
import Settings from '../Screens/Settings';


const MainContent = () => {
  const { isLoggedIn } = useUser();
  const token = localStorage.getItem("token") || null;
  // console.log("is logged in and token",isLoggedIn, token)

  return (
    <div className="app-container">
      {isLoggedIn || token ? <UserNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/review" element={<ReviewScreen />} />
        <Route path="/order" element={<OrderScreen />} />
        <Route path="/profile" element={<UserScreen />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {isLoggedIn || token ? null : <Footer/>}
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <Router>
        <MainContent />
      </Router>
    </UserProvider>
  );
}

export default App;
