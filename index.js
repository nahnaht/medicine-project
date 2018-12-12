const fb = require("facebook-chat-api");
const axios = require("axios");
//asdfasdfa
//aasdfas
fb({email : "tuantsukuyomi@gmail.com",password:"tuanhoangg"},(err,api)=>{
    if (err) return console.error(err);
    
    api.listen((err, message) => {
        axios.get('http://api.minhhieu.asia/vi.php',{params:{text:message.body}})
        .then( response =>{
          api.sendMessage(response.data, message.threadID);
        } )
  
      });
});