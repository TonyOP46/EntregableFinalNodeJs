const app = require('./app')
require('dotenv').config()
const swaggerDocs = require('../swagger');



const PORT = process.env.PORT || 8000

app.get('/', (req, res)=>{
    res.json('TodoBien')

})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    swaggerDocs(app, PORT)
})