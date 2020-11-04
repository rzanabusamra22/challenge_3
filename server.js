const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/public'));


//this should come from db !
// app.get('/', (req, res) => {
//     res.send('test')
// })

app.listen(port, (error) => {
    if (error) { console.log('Something Wrong with server', error) }
    else { console.log('Server is listening on port ' + port) }
})