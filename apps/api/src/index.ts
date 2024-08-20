// apps/api/src/index.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],  // Enable detailed logging for queries and errors
});

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    const typedError = error as Error;  // Assert the error type
    console.error('Error fetching users:', typedError);  // Log the error details
    res.status(500).json({ error: 'Error fetching users', details: typedError.message });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
