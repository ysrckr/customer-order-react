const app = require('express')()

app.get('/', (req, res) => {
	res.status(200).json('Hello World!')
})

app.listen(5001, ()=>{
    console.log('Server is running on port 5001')
})
