import sql from 'mssql'

const dbSettings = {
user: 'admin',
password: 'Gipao05',
server: 'DESKTOP-D0VLFOP\\SQLEXPRESS',
database: 'clinicatest',
options: {
  encrypt: false, 
  trustServerCertificate: true 
}
};



export const getConnection = async () => {
  try {
    // pool es un punto de conexion que podemos reutilizar en una app
   // aqui const pool = await sql.connect(dbSettings) lo que hace es conectarse a la base
    const pool = await sql.connect(dbSettings)

    const result = await pool.request().query("SELECT GETDATE()")
    console.log('Database connection successful:', result.recordset[0][''])

    return pool
  } catch (error) {
    console.error('Error connecting to the database:', error)
   
  }
};

