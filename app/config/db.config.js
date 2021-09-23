module.exports = {
    HOST: "localhost",
    USER: process.env.DATABASE_USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DATABASE,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };