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
"https://YOUR-RAILWAY-BACKEND-URL.up.railway.app";




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






// REDIRECT DASHBOARD


window.location.href =
"admin.html";




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


console.log(
"Admin session active"
);


}




}




checkAdminLogin();