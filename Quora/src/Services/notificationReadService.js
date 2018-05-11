
const notificationReaded = () =>{
    return new Promise((resolve, reject) =>{
        fetch('/feedservice/notification/', {
            method: 'PUT',
            credentials: 'same-origin'
        }).then((response)  =>{
            response.json().then((response) =>{
                resolve(response)
            }).catch((error) =>{
                reject(error)
            })
        })
    })
}

export default notificationReaded;