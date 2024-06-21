import express from 'express'
import  { query } from './src/services/db.service.js';
import cors from 'cors';
const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({'message':'ok'})
})
app.use(cors());
// app.use(express.json());

// Endpoint to retrieve chart data
app.get('/api/line-chart-data', async (req, res) => {
  try {
    const sql = 'SELECT * FROM linechart_data';
    const results = await query(sql);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/servertime-chart-data', async (req, res) => {
    try {
      const sql = 'SELECT * FROM server_uptime_data';
      const results = await query(sql);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/sales-data', async (req, res) => {
    try {
      const sql = 'SELECT * FROM sales_data';
      const results = await query(sql);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/internet-speed', async (req, res) => {
    try {
      const sql = 'SELECT * FROM InternetSpeed';
      const results = await query(sql);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  app.get('/api/cpu-usage', async (req, res) => {
    try {
      const sql = 'SELECT * FROM CpuUsage';
      const results = await query(sql);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


app.listen(3000,()=>{
    console.log("server is listening at the port 3000 \n http://localhost:3000")
})