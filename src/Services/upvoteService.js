
const upvote = (answerId) =>{
    // alert("Inside srvice...")
    const requestData = {
        answerId: answerId,
    };

    return new Promise((resolve, reject) =>{
    fetch('/feedservice/upvote/',{
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(requestData),
        headers: {
            'content-type': 'application/json',
            },
        credentials: 'same-origin'
    }).then((response)=>{
          if(response.status === 200){
            response.json().then((body)=>{
                resolve(body);
            }).catch((error)=>{
                console.log("Fost error---",error)
            }) 
          }else{
              console.log("Respose code not 2000..");
              reject();
          }  
    }).catch((error)=>{
        console.log("Error---",error);
        reject();
    })
});
}

export default upvote;