import mongoose from 'mongoose';

const connectDB = async () =>{
    try {
       const conn = await mongoose.connect(process.env.MONGO_URI);
       console.log(`MongoDB connected : ${conn.connection.host}`)
    } catch (error) {
        console.log(`Connection Error : ${error.message}`)
        process.exit(1) //0 - end process with any kind of failure 1 means end process with some failures
    }
}

export default connectDB