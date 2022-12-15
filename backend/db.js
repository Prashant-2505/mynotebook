const  mongoose  = require('mongoose')

const mogoURI = 'mongodb://localhost:27017/mynotebook?readPreference=primary&directConnection=true&tls=false'
mongoose.set("strictQuery", false);

const connectToMongo = ()=>
{
    mongoose.connect(mogoURI,()=>
    {
        console.log("connected to mongo")
    })
}

module.exports = connectToMongo