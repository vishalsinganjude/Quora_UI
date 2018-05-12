import Feeds from "../body/feeds/Feeds";

const loadFeeds = () =>{
    return new Promise((resolve, reject)=>{
        fetch("/feedservice/feed/").then((feeds)=>{
            if(feeds.status === 200){
                feeds.json().then((feeds)=>{
                    resolve(feeds);
                }).catch((error)=>{
                    reject(error)
                })
            }
            else {
                reject();
            }
        }).catch((error)=>{
            reject(error);
        })
    });
}

export default loadFeeds;