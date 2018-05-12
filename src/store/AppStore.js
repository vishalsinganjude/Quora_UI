import Reflux from 'reflux'
import AppActions from '../actions/AppActions'
import login from '../Services/LoginService'
import questionPost from '../Services/QuestionPost';
import loadFeeds from '../Services/loadsFeeds';
import signUp from '../Services/SignUpService'
import upvote from '../Services/upvoteService'
import downvote from '../Services/downVoteSevice'
import answerToQuestion from '../Services/AnswerToQustionService'
import answertToQuestion from '../Services/AnswerToQustionService';
import fetchUser from '../Services/ShowLogedInUser'
import notification from '../Services/NotificationService'
import notificationReaded from '../Services/notificationReadService'
import getlogout from '../Services/logOutService'

const AppStore = Reflux.createStore({
  listenables: [AppActions],

  onShowLoginPopup() {
    this.trigger({action: "showLoginPopup"})
  },

  onHideLoginPopup() {
    this.trigger({action: "hideLoginPopup"});
  },
  onLogin(username, password) {
    login(username, password).then((userInfo)=>{
      this.trigger({action:"setUser", user:userInfo})
    }).catch((error)=>{
      console.log(error)
    })
  },

  onShowSignUpPopup() {
    this.trigger({action: "showSignUpPopup"})
  }, 

  onSignUp(username, firstName, lastName,  email, password, mobile, dob, gender ){
    signUp(username, firstName, lastName, email, password, mobile, dob, gender ).then((userInfo) =>{
      alert("Sign Up Successfully....!");
    }).catch((error)=>{
      console.log("Sign Up--------->", error)
    })
   },

 
   onHideSignupPopup(){
    this.trigger({action:"hideSignupPopup"})
  },

  onAddQue(questionString){
  
    questionPost(questionString).then(()=>{
      this.trigger({action:'reloadfeeds'})
    }).catch((error)=>{
      console.log(error)
    })
  },


  onShowAddQPopup(){
    this.trigger({action:"showAddQuePopup"})
  },

  onHideAddQuePopup(){
    this.trigger({action: "hideAddQuePopup"})
  },

  onLoadFeeds(){
    loadFeeds().then((feeds)=>{
      this.trigger({action:"loadFeeds", feeds:feeds})
    }).catch((error)=>{

    })

  },

  onAddUpvote(answerId){
    upvote(answerId).then((respnse) =>{
      this.trigger({action:'reloadfeeds'})
    }).catch((error) =>{
      console.log(error)
    })
  },

  onAddDownvote(answerId){
    downvote(answerId).then((respnse) =>{
      this.trigger({action:'reloadfeeds'})
    }).catch((error) =>{
      console.log(error)
    })
  },

  onAddAnsToQue(questionId, answerString){
    answertToQuestion(questionId, answerString).then((response) =>{
      this.trigger({action:'reloadfeeds'})
    }).catch((error) =>{
      console.log(error)
    });
  },

  onShowLogedInUser(){
    fetchUser().then((response) =>{ 
      this.trigger({action:"setUser", user:response})
    }).catch((error)=>{
      console.log("ERROR============================>", error)
    })
    
  },

  onShowNotification(){
    notification().then((response) =>{
      
      this.trigger({action:"setnotification", notification:response})
    }).catch((error) =>{
      console.log("Show Notification error=====>",error)
    })
  },

  onHandleAllNotificationRead(){

    notificationReaded().then((response, reject)=>{
      this.trigger({action:'reloadfeeds'})  
    })
  
    
  },
 
  onHideNotificationPopUp(){
    this.trigger({action: "hideNotificationPopUp"});
  },

  onGetLogOut(){
  getlogout().then((response, reject) =>{
    this.trigger({action:'reload'})
  })
  }

  

});

export default AppStore;