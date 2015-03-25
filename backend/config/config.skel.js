module.exports = {
  url: {
    root: 'http://localhost:3000'
  },
  logger: {
    level: 'debug',
    layout: {
      pattern: '%d{ABSOLUTE} %[[%p]%] %m'
    }
  },
  mailer: {
    from: {
      name: 'LAN Montmorency',
      address: 'user@gmail.com'
    },
    transportOptions: {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      authMethod: 'LOGIN',
      auth: {
        user: 'user@gmail.com',
        pass: 'password'
      }
    }
  },
  db: {
    url: 'mongodb://localhost/dev'
  }
};
