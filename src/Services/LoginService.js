
const login = (username, password) => {
    const requestData = {
        username: username,
        password: password,
        clientId: "Chrome-567v",
    };
    return new Promise((resolve, reject) => {
        fetch("/feedservice/login/", {
            method: 'POST',
            cache: 'no-cache',
            body: JSON.stringify(requestData),
            headers: {
                'content-type': 'application/json',
            },
            credentials: 'same-origin'
        }).then((response) => {
            if (response.status === 200){
                response.json().then((body) => {
                    resolve(body);
                }).catch((error)=>{
                    reject(error);
                })
            }
            else{
                reject({error:"wrong response code..."});
            }
        }).catch((error) => {
            reject(error);
        })
    });
    
}

export default login;