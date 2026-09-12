/*
AL-AWWAL PANDOGARI ECOSYSTEM

ADMIN LOGIN JAVASCRIPT

Frontend:
Vercel

Backend:
Railway API
*/


// ==============================
// BACKEND URL
// ==============================


const API_URL =
"https://a-a-pandogari-reg-backend-production.up.railway.app/api";




// ==============================
// LOGIN FUNCTION
// ==============================


const loginForm =
document.getElementById("loginForm");



if(loginForm){


loginForm.addEventListener(
"submit",
async(e)=>{


e.preventDefault();



const email =
document.getElementById("email").value;



const password =
document.getElementById("password").value;





try{



const response =
await fetch(

API_URL +
"/api/admin/login",

{


method:"POST",


headers:{


"Content-Type":
"application/json"


},


body:JSON.stringify({

email,

password

})


}


);






const data =
await response.json();





if(!response.ok){


alert(

data.message ||
"Login failed"

);


return;


}







// SAVE TOKEN


localStorage.setItem(

"adminToken",

data.token

);


const token =
localStorage.getItem("adminToken");


fetch(
API_URL + "/api/admin/applications",
{

headers:{

"Authorization":
`Bearer ${token}`

}

});



// REDIRECT DASHBOARD


window.location.href =
"../html/admin.html";




}



catch(error){



console.error(
"Login Error:",
error
);



alert(

"Server connection failed"

);



}




});


}






// ==============================
// CHECK EXISTING LOGIN
// ==============================


function checkAdminLogin(){



const token =
localStorage.getItem(
"adminToken"
);




if(token){


function checkAdminLogin(){

const token =
localStorage.getItem("adminToken");


if(!token){

window.location.href =
"login.html";

return;

}


console.log(
"Admin session active"
);


}


checkAdminLogin();


}




}




checkAdminLogin();