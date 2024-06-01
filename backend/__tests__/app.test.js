const request = require('supertest');
const express = require('express');

const app = express();
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

describe('GET /test', () => {
  it('should return a 200 status and a message', async () => {
    const response = await request(app).get('/test');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, world!');
  });
});
