module.exports = function(app, db) {

      app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title }; 

        console.log(req.body)  
        res.send('Hello')
        console.log("db",db)
        db.collection('notes').insert(note, (err, result) =>{
            if (err) {        
                 res.send({ 'error': 'An error has occurred' }); 
                }
            else {        
                res.send(result.ops[0]);     
             }   

        });

    });
    app.post('/notes', (req, res) => {    
        // You'll create your note here.    
       
        console.log(req.body)  
         res.send('Hello')
    });
}
