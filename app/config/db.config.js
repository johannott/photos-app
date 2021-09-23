module.exports = {
    HOST: "localhost",
    USER: "johannott",
    PASSWORD: "123",
    DB: "photos",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };