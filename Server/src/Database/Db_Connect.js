import mongoose from 'mongoose'

export const db =async () => {
try {
    await mongoose.connect(`${process.env.MONGO_DB_URL}`)
    console.log('conneted')
} catch (error) {
    throw Error('Error in connecting Database')
}
}