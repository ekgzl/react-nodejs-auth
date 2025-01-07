import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setIsSubmitting(true);
  };
  // useEffect ile [isSubmitting] ne zaman değişirse içindeki bloğu çalıştırır.
  useEffect(() => {
    if (isSubmitting) {
      if (!errors.email && !errors.password) {
        axios
          .post('http://localhost:8081/login', values)
          .then((res) => {
            if (res.data.status === 'Success') {
              localStorage.setItem('userName', res.data.name);
              navigate('/home');
            } else {
              alert('Email veya Şifre yanlış..');
            }
          })
          .catch((err) => console.log(err));
      }
      setIsSubmitting(false);
    }
  }, [isSubmitting]);

  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2> Giriş</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Email girin.."
              name="email"
              className="form-control rounded-0"
              onChange={handleInput}></input>
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Şifre</strong>
            </label>
            <input
              type="password"
              placeholder="Şifre girin.."
              name="password"
              className="form-control rounded-0"
              onChange={handleInput}></input>
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Giriş
          </button>
          <p>Enes Kaan Gözüela</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Hesap Oluştur
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
