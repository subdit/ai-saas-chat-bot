import { connect, disconnect } from 'mongoose';

async function connetToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error('Cannot connect to MongoDB');
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error('Could not connect to MongoDB');
  }
}

export { connetToDatabase, disconnect };
