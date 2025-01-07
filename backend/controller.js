const db = require('./db');

function postSignup(req, res) {
  const sql = 'INSERT INTO login (`name`,`email`,`password`) VALUES (?)';
  const eCheck = 'SELECT email FROM login WHERE `email` = ?';
  db.query(eCheck, [req.body.email], (err, data) => {
    if (data.length > 0) {
      return res.json('Error');
    } else {
      const values = [req.body.name, req.body.email, req.body.password];
      db.query(sql, [values], (err, data) => {
        if (err) {
          return res.json('Query Error');
        }
        return res.json('Success');
      });
    }
  });
}

function postLogin(req, res) {
  const sql = 'SELECT * FROM login WHERE `email` = ? AND `password` = ?';
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json({ status: 'Error' });
    }
    if (data.length > 0) {
      // Kullanıcı adı ile birlikte başarılı yanıt döndür
      return res.json({ status: 'Success', name: data[0].name });
    } else {
      return res.json({ status: 'Failed' });
    }
  });
}

module.exports = {
  postLogin,
  postSignup,
};
