module.exports = {
  HOST: "postgresql-ha-pgpool",
  USER: "postgres",
  PASSWORD: "HztIWjzS57",
  DB: "dpacrawlconf",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};