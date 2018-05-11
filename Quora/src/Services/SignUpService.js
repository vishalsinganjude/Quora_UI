
const signUp = (username, firstName, lastName, email, password, mobile, dob, gender) => {
    const requestData = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: mobile,
        dob: 1524982838,
        password: password,
        gender: gender,
        profile_pic: "https://www.facebook.com/Hemant Badhe",
    };

    console.log("Request Data=======================>",requestData)

    return new Promise((resolve, reject)=>{
        fetch("/userservice/user",{
            method: 'POST',
            cache: 'no-cache',
            body: JSON.stringify(requestData),
            headers:{
                'content-type': 'application/json',
            },
            credentials: 'same-origin',
        }).then((response) =>{
            if(response.status === 200){
                response.json().then((body) =>{
                    resolve(body);
                }).catch((error) =>{
                    reject(error);
                })
            }

            else{
                reject({})
            }
        }).catch((error)=>{
            reject(error)
        })
    }) ;
}

export default signUp;

