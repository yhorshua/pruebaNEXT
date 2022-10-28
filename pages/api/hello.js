// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getConnection } from "../../db"



export default async function handler(req, res) {
  console.log(getConnection);
  const pool = await getConnection()
  const resul = await pool.request()
  .query('SELECT * GETDATE()')
  console.log(resul);
  res.status(200).json(resul)
}
