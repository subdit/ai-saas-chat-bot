import app from './app.js';
import { connectToDatabase } from './db/connection.js';
//connection and listening
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log('Server Opened & connected to Database 🤟'));
})
    .catch(err => {
    console.log(err);
});
//# sourceMappingURL=index.js.map