const express = require('express')
const morgan = require('morgan')

//Inicializaciones
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Settings
app.set('port', process.env.PORT || 3000)

//Midlewares
app.use(morgan('dev'))

//Routes

app.use('/', require('./routes/index.routes'))
app.use('/api/movies', require('./routes/movies.routes'))
app.use('/api', require('./routes/users.routes'))

//Starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`)
})
