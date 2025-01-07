import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  const userName = localStorage.getItem('userName');
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <header>
        <h1>Welcome</h1>
      </header>
      <main>
        <p>
          Hoşgeldin, <strong>{userName}</strong>
          <br />
        </p>
      </main>

      <Link to="/" className="btn btn-primary text-decoration-none">
        Geri dön
      </Link>
    </div>
  );
}
export default Home;
