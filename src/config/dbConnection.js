const mysql = require('mysql2');

module.exports = () => {
  return mysql.createConnection({
    host: '172.16.5.14',
    user: 'root',
    password: 'toor',
    database: 'proyecto'
  });
}


/*module.exports = () => {
  return mysql.createPool({
    host: '172.16.5.20',
    user: 'root',
    password: 'toor',
    database: 'proyecto'
  });
}
*/