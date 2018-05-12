

const getlogout = () =>{
    return new Promise((resolve, reject) =>{
        fetch('/userservice/logout', {
            method:'PUT',
            credentials: 'same-origin'
        }).then((response)=>{
            if(response.status === 200){
                resolve()
            }
        })
    })
}
export default getlogout;