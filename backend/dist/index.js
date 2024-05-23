import app from './app.js';
import { connectToDatabase } from './db/connection.js';
//connection and listening
const PORT = process.env.PORT || 5008;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log('Server Opened! && Database Connected 🤟 WooHoo!'));
})
    .catch(err => {
    console.log(err);
});
//# sourceMappingURL=index.js.map