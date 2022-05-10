const express = require('express');
const mongoose = require('mongoose');

const app = express()
const port = 5004;

app.use(express.json());

const spnAPIs = require('./routes/spnPanelRout');
app.use('/api/spn', spnAPIs);


mongoose
  .connect("mongodb://AS11:27017/electricVehicle", { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify:false})
  .then(() => {

    console.log('MongoDB Connected');
    
  })
  .catch(err => console.log(err));



app.listen(port, () => console.log(`Server Running on port ${port}`))