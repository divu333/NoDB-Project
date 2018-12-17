const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
cors = require('cors')
app.use(cors());


let nextId = 3;  
const shoppingItems = ['shoe','games'];
  


      app.get('/api/shopping-items', (req, res) => { 
        res.json(shoppingItems);

         app.status(200).send(shoppingItems);
        
            
      })

      // app.post('/api/shopping-items',(req, res) => { 

      //  // console.log(req.body);
        

      // console.log(req.body)

      // shoppingItems.push(req.body.name);
      // //res.json(shoppingItems);


      //   res.status(200).send(req.name);

      //   console.log(shoppingItems)

      // });
     

const port = 5000;

      app.listen(port,()=> console.log("Listening on port " +port ));

    
      
  


  