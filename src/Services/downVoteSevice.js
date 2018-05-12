

const downvote = (answerId) =>{
    const requestData = {
        answerId: answerId,
    };
    // alert("Inside downvote Service ===============>", requestData)

    return new Promise((resolve, reject) =>{
        fetch('/feedservice/downvote/', {
            method: 'POST',
            cache: 'no-cache',
            body: JSON.stringify(requestData),
            headers: {
                'content-type': 'application/json',
            },
            credentials: 'same-origin'
        }).then((response) =>{
            if (response.status === 200){
                response.json().then((body) =>{
                    resolve(body);
                }).catch((error) =>{
                })
            }
            else{
                reject();
            }
        }).catch((error) =>{
            reject(error);
        })
    });
}

export default downvote;