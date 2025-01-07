const express = require('express');
const cors = require('cors');
const router = require('./route'); // route'u çağırın
  
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router); // Router'ı kullanarak tüm rotaları ekleyin

app.listen(8081, () => {
  console.log('Server is listening on port 8081');
});
