function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

  if (values.email === '') {
    error.email = 'Mail alanı boş bırakılamaz';
  } else if (!email_pattern.test(values.email)) {
    error.email = 'Email alanı uyuşmuyor';
  } else {
    error.email = '';
  }

  if (values.password === '') {
    error.password = 'Şifre boş bırakılamaz';
  } else if (!password_pattern.test(values.password)) {
    error.password = 'Şifre alanı kurallara uymalı';
  } else {
    error.password = '';
  }

  return error;
}

export default Validation;
