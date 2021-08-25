const mongoose  = require('mongoose');


const connect = () => {
    return mongoose.connect("mongodb+srv://rupendra:Dunzo1234567890@@cluster0.kntxl.mongodb.net/dunzoDatabase?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    
}

module.exports = connect;
