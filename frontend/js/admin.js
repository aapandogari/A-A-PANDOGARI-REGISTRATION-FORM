/*
AL-AWWAL PANDOGARI ECOSYSTEM
ADMIN DASHBOARD JAVASCRIPT
VERCEL + RAILWAY READY
*/


const API =

"https://a-a-pandogari-reg-backend-production.up.railway.app";


// Replace the URL above after deploying Railway.



let applications = [];

let currentID = null;





// ===============================
// LOAD APPLICATIONS
// ===============================


async function loadApplications(){


try{


const token =
localStorage.getItem(
"adminToken"
);



const response =

await fetch(

API+
"/api/admin/applications",

{

headers:{


Authorization:

"Bearer "+token


}


}

);



const data = await response.json();


if(!response.ok){

alert(data.message);

logout();

return;

}


applications = data;



updateStats();


displayApplications();



}

catch(error){


console.log(error);


alert(
"Unable to load applications"
);


}



}







// ===============================
// UPDATE STATISTICS
// ===============================


function updateStats(){



document.getElementById(
"total"
).innerHTML =

applications.length;





document.getElementById(
"pending"
).innerHTML =

applications.filter(

app=>

app.application_status==="Pending"

).length;





document.getElementById(
"approved"
).innerHTML =

applications.filter(

app=>

app.application_status==="Approved"

).length;





document.getElementById(
"rejected"
).innerHTML =

applications.filter(

app=>

app.application_status==="Rejected"

).length;



}







// ===============================
// DISPLAY APPLICATIONS
// ===============================


function displayApplications(){



const table =

document.getElementById(
"applications"
);



table.innerHTML="";




const search =

document.getElementById(
"search"
)
.value
.toLowerCase();




const team =

document.getElementById(
"teamFilter"
)
.value;





const status =

document.getElementById(
"statusFilter"
)
.value;





applications


.filter(app=>


app.full_name

.toLowerCase()

.includes(search)


)



.filter(app=>


team===""

||

String(app.team_id)===team


)



.filter(app=>


status===""

||

app.application_status===status


)



.forEach(app=>{





table.innerHTML += `



<tr>


<td>
${app.full_name}
</td>



<td>

${
app.team_id==1

?

"PI CORE TEAM"

:

app.team_id==2

?

"SIDRA CORE TEAM"

:

"ALL TEAM"

}

</td>



<td>

${app.team_username || "-"}

</td>



<td>

${app.application_status}

</td>



<td>


<button onclick="viewApplication(${app.id})">

View

</button>


</td>


</tr>



`;



});



}








// ===============================
// VIEW APPLICATION
// ===============================


function viewApplication(id){



currentID=id;




const app =

applications.find(

item=>

item.id===id

);





if(!app)return;






document.getElementById(
"name"
)
.innerHTML =

app.full_name;


  // ===============================
// ADDED: SELFIE IMAGE VIEWER
// ===============================


let selfieImage =
app.selfie_url || "";


// Load applicant selfie

document.getElementById(
"photo"
)
.src = selfieImage;





// Load identity document

const documentLink =
document.getElementById(
"documentLink"
);



if(app.identity_document_url){


documentLink.href =
app.identity_document_url;


documentLink.style.display =
"inline-block";


}

else{


documentLink.style.display =
"none";


}







document.getElementById(
"details"
)
.innerHTML =



`

Email:
${app.email}

<br><br>


Phone:
${app.phone}


<br><br>


Country:
${app.country}


<br><br>


State:
${app.state}


<br><br>


Team Username:
${app.team_username}


<br><br>


Role:
${app.preferred_role}


<br><br>


Skills:
${app.skills}


<br><br>


Experience:
${app.experience}


<br><br>


Contribution:
${app.contribution}


`;





document.getElementById(
"modal"
)
.style.display="flex";



}







// ===============================
// APPROVE APPLICATION
// ===============================



async function approve(id){


if(!confirm(
"Approve this application?"
))

return;




await fetch(

API+

"/api/admin/applications/"

+

id

+

"/approve",

{

method:"PATCH",

headers:{


Authorization:

"Bearer "

+

localStorage.getItem(
"adminToken"
)


}


}

);





closeModal();


loadApplications();



}









// ===============================
// REJECT APPLICATION
// ===============================


async function reject(id){



if(!confirm(
"Reject this application?"
))

return;





await fetch(

API+

"/api/admin/applications/"

+

id

+

"/reject",

{

method:"PATCH",

headers:{


Authorization:

"Bearer "

+

localStorage.getItem(
"adminToken"
)


}


}

);





closeModal();


loadApplications();



}








// ===============================
// CLOSE MODAL
// ===============================


function closeModal(){


document.getElementById(
"modal"
)
.style.display="none";


}








// ===============================
// LOGOUT
// ===============================


function logout(){


localStorage.removeItem(
"adminToken"
);


window.location.href=
"login.html";


}



// ===============================
// ADDED: FULL IMAGE VIEWER
// ===============================


function openImageViewer(src){


if(!src)
return;



const viewer =
document.getElementById(
"imageViewer"
);



const image =
document.getElementById(
"largeImage"
);



image.src = src;


viewer.style.display =
"flex";


}






function closeImageViewer(){


document.getElementById(
"imageViewer"
)
.style.display =
"none";


}



// ===============================
// START
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


loadApplications();



}

);