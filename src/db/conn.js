const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/mydynamic", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})