
const http = require('http');

const Server = http.createServer((req,res) => {

    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify({message:"Normal get method"}))
    }
    else if(req.url === '/users' && req.method === 'GET'){
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify({users:{"user":'user1',"user":'user2',"user":'user3'}}))
    }
    else if(req.url === '/users' && req.method === 'POST'){
        res.writeHead(201,{'content-type':'application/json'});
        res.end(JSON.stringify({message:"User created"}))
    }
    else{
        res.writeHead(404,{'content-type':'application/json'});
        res.end(JSON.stringify({message:"404 Route is not found"}));
    }
});

Server.listen(3000,()=> {
    console.log("Server runing on port 3000");    
})

const fs = require('fs').promises;

async function padho() {
  const data = await fs.readFile('notes.txt', 'utf8');
  console.log(data);
}

padho();