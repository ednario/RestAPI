import mongoose from "mongoose"
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@crud.v5get90.mongodb.net/?retryWrites=true&w=majority`
    )

    console.log("Conectou ao banco!");

    return dbConn
  } catch (error) {
console.log(error);
  }
}

conn()

export default conn