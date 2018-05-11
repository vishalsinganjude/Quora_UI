
const answertToQuestion = (questionId, answerString) =>{
    const requestData = {
        questionId: questionId,
        answerString: answerString,
    };

    return new Promise((resolve, reject) =>{
        fetch("/feedservice/answer/", {
            method: 'POST',
            cache: 'no-cache',
            body: JSON.stringify(requestData),
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) =>{
            if (response.status === 200){
                response.json().then((body) => {
                    resolve(body);
                }).catch((error)=>{
                    reject(error);
                })
            }
            else{
                reject({error:""});
            }
        }).catch((error) =>{
            reject(error);
        })
    });
}

export default  answertToQuestion;