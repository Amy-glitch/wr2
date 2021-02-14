import firebase from "firebase/app";
import 'firebase/auth';
import { useContext, useState } from "react";
import dbContext from './Ctx.js'
//import Review from "./Review.js";
//import { useHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";
//import history from './history'

export default function Write(props)
{

// const [s,setS] = useState(false);
   let history = useHistory();
    const db = useContext(dbContext)




 let addObj;
function subClick()
{
 addObj =
    {
        name: document.getElementById('name').value,
        content:document.getElementById('content').value,
        authorName: firebase.auth().currentUser.displayName,
        authorId: firebase.auth().currentUser.uid,
        reviewed: false   
    }

 Rev();
//history.push({pathname:"/read"});
//history.push({pathname:"/read"});
}



const Rev=async()=>{
const response=db.collection('stories');
const data=await response.where("reviewed", "==",false).where("authorId","!=",firebase.auth().currentUser.uid).limit(1).get().then((k)=>{

if (k.docs[0] === undefined){alert('You must wait for someone to review your previous story before possting a new one')} else {
if (k.docs[0].id === undefined){
    alert('You must wait for someone to review your previous story before possting a new one');
}else{

  history.push({pathname:"/review", state: {sid:k.docs[0].id, post:addObj}});
  
}
}}
    );
        

}



    return <div> <label>Name:</label> <input id='name'></input>
        <textarea id='content' rows="20" cols="30" placeholder="This is the default text"></textarea>
  <button onClick={subClick} style={{display:'block'}}>Sssubmit!</button>
  </div>

  }