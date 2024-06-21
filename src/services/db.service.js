import mysql from 'mysql2/promise';
import dbConfig from '../configs/db.config.js';

export async function query(sql, params) {
  const connection = await mysql.createConnection(dbConfig);
//   console.log(connection);
  const [results] = await connection.execute(sql, params);

  return results;
}
