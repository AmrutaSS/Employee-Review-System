
const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

// connect from mongodb
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to database")).catch((err) => console.log("Error connecting to database",err));


