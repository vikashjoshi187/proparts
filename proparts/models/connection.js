import mongoose from 'mongoose';
const dbURI = "mongodb://127.0.0.1:27017/proparts";

mongoose.connect(dbURI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Connection Failed" + err);
  });

export default mongoose;