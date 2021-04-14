const express = require('express')
const app = express()
const port = 3001


app.get('/sum', (req, res) => {
    console.log("done");
    var sum=0;
    for (var i = 0; i < 1000000; i++) {
        sum+=Math.sqrt(i);
    }
    console.log(sum);
  res.send({"data":sum});
})

app.get('/', (req, res) => {
  res.sendStatus(200);
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
