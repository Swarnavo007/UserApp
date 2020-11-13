const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const mongoURI="mongodb://localhost:27017/newUser";
const routes=require('./routes/userRoutes');

mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('MongoDB connected');
})
.catch(err=>{
    console.log(err);
})

app.use(bodyParser.json());

app.use('/user',routes);

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{

    console.log(`Server listening at ${PORT}`);
});