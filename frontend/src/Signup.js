import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';
function Signup() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmited, setSubmited] = useState(false);
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation'dan dönen hataları al
    const validationErrors = Validation(values);

    // Hataları state'e yerleştir
    setErrors(validationErrors);
    setSubmited(true);
  };

  useEffect(() => {
    if (isSubmited) {
      if (errors.password === '' && errors.name === '' && errors.email === '') {
        axios
          .post('http://localhost:8081/signup', values) // Array değil, object olarak gönderiyoruz.
          .then((res) => {
            if (res.data === 'Error') {
              alert('Aynı email ile zaten kayıt mevcut.');
            } else if (res.data === 'Success') {
              localStorage.setItem('userName', values.name);
              navigate('/home');
            } else {
              alert('Servis hatası.');
            }
          })
          .catch((err) => console.log(err));
      }
    }
  }, [isSubmited]);

  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2> Kayıt Ol</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>İsim</strong>
            </label>
            <input
              type="text"
              name="name"
              placeholder="İsim Girin.."
              className="form-control rounded-0"
              onChange={handleInput}></input>
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email girin.."
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
              name="password"
              placeholder="Şifre girin.."
              className="form-control rounded-0"
              onChange={handleInput}></input>
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Kayıt Ol
          </button>
          <p>Diyanet işleri başkanlığı</p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Giriş Yap
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
