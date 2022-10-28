import sql from 'mssql';

const dbSettings = {
  user: "Flotex2022",
  password: "P9?9og32g",
  server: "18.168.10.231",
  database: "flotexpe_DB",
  port: 1093,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
  connectionTimeout: 0,
  requestTimeout: 0,
};


export const getConnection =  async () => {
  // console.log(sqlQuery);
  //   console.log(config);
  
  try {
    const pool = await sql.connect(dbSettings);
    console.log(pool);
    return pool;
  } catch (err) {
    console.error("SQL Error", err);
    return "NULL";
  }
};

export  { sql };