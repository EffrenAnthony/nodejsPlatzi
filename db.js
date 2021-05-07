const db = require('mongoose')
// seteamos las promesas
db.Promise = global.Promise

async function connect(url){
  await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }).then(() => console.log('[db] Contected to DB'))
}

module.exports = connect