import app from './app.js';
import { connetToDatabase } from './db/connection.js';

//connection and listening
const PORT = process.env.PORT || 5000;

connetToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log('Server Opened & connected to Database 🤟')
    );
  })
  .catch(err => {
    console.log(err);
  });
