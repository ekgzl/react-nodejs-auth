import React from 'react';
import Login from './Login';
import Home from './Home';

// react router bileşenlerini import eder (routing) işlemleri yapmak için kullanılır
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';

function App() {
  return (
    // uygulamanın yönlendirmelerini sağlayan BrowserRouter bileşeni ile uygulamayı sarar.
    <BrowserRouter>
      {/* içindeki route bileşenlerini tanımlar ve URL yoluna göre uygun bileşeni render eder */}
      <Routes>
        {/* Ana sayfa URLsine Login bileşenini render eder */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
