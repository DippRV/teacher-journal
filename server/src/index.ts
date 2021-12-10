import express from 'express'
import mongoose from 'mongoose'
import router from "./routes/router"

const app = express();
const port = 5000;
const DB_URL = "mongodb+srv://user:user@clusterdipp.yujop.mongodb.net/tj_db?retryWrites=true&w=majority";

app.use(express.json());
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(port, () => console.log(`Running on port ${port}`));
    }
    catch (e) {
        console.log(e);
    }
}

startApp();
