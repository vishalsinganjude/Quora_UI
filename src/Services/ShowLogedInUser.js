
const fetchUser = () =>{
    return new Promise((resolve, reject) =>{
        fetch('/userservice/validate', {
            method: 'GET',
            credentials: 'same-origin'
        }).then((response) =>{
            response.json().then((user) =>{
                resolve(user);
            }).catch((error) =>{
                reject(error);
            })
        })
    })
}

export default fetchUser;