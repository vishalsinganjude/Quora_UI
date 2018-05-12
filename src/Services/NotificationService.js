const notification = () =>{
    return new Promise((resolve, reject) =>{
        fetch('/feedservice/notification/', {
            method: 'GET',
            credentials:'same-origin'
        }).then((response) =>{
            response.json().then((response) =>{
                resolve(response)
            }).catch((error) =>{
                reject(error);
            })
        });
    })
}

export default notification;