import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
       const conn = await mongoose.connect(process.env.MONGODB_URI);
       console.log ("mongodb connected successfully!!!!");
    } catch (error) {
        console.log("mongo connection error!")
    }
};