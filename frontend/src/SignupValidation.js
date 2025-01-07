function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

  if (values.name === '') {
    error.name = 'İsim alanı boş olamaz';
  } else {
    error.name = '';
  }

  if (values.email === '') {
    error.email = 'Email alanı boş olamaz';
  } else if (!email_pattern.test(values.email)) {
    error.email = 'Email eşleşmedi';
  } else {
    error.email = '';
  }

  if (values.password === '') {
    error.password = 'Şifre alanı boş olamaz';
  } else if (!password_pattern.test(values.password)) {
    error.password = 'Şifre standartlara uymuyor';
  } else {
    error.password = '';
  }

  return error;
}

export default Validation;
