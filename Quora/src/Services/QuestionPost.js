
const questionPost = (question) =>{
    const requestData = {
        questionString: question,
    };
   // alert("Hello...")
    return new Promise((resolve, reject)=>{
       // alert("Question---->", question)
        fetch("/feedservice/question/", {
            method: 'POST',
            cache: 'no-cache',
            body: JSON.stringify(requestData),
            headers: {
                'content-type': 'application/json',
                },
            credentials: 'same-origin'
        }).then((response) => {
            if (response.status === 200){
                //alert("Hello inside then")
                response.json().then((body)=>{
                    resolve(body);
                }).catch((error) => {
                    reject(error);
                })
            }
            else{
                reject({error:"Wrong respoonse code.!"})
            }
        }).catch((error) =>{
            reject(error);
        })
    });
};

export default questionPost;