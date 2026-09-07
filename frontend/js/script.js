/*
 AL-AWWAL PANDOGARI ECOSYSTEM
 CORE TEAM REGISTRATION FORM
 JAVASCRIPT
*/


document.addEventListener("DOMContentLoaded",()=>{



// ===============================
// COUNTRY DROPDOWN
// ===============================


const countrySelect =
document.getElementById("country");



const countries = [

"Algeria",
"Angola",
"Benin",
"Botswana",
"Burkina Faso",
"Burundi",
"Cabo Verde",
"Cameroon",
"Central African Republic",
"Chad",
"Comoros",
"Democratic Republic of the Congo",
"Republic of the Congo",
"Cote d'Ivoire",
"Djibouti",
"Egypt",
"Equatorial Guinea",
"Eritrea",
"Eswatini",
"Ethiopia",
"Gabon",
"Gambia",
"Ghana",
"Guinea",
"Guinea-Bissau",
"Kenya",
"Lesotho",
"Liberia",
"Libya",
"Madagascar",
"Malawi",
"Mali",
"Mauritania",
"Mauritius",
"Morocco",
"Mozambique",
"Namibia",
"Niger",
"Nigeria",
"Rwanda",
"Sao Tome and Principe",
"Senegal",
"Seychelles",
"Sierra Leone",
"Somalia",
"South Africa",
"South Sudan",
"Sudan",
"Tanzania",
"Togo",
"Tunisia",
"Uganda",
"Zambia",
"Zimbabwe",

"Afghanistan",
"Armenia",
"Azerbaijan",
"Bahrain",
"Bangladesh",
"Bhutan",
"Brunei",
"Cambodia",
"China",
"Cyprus",
"Georgia",
"India",
"Indonesia",
"Iran",
"Iraq",
"Israel",
"Japan",
"Jordan",
"Kazakhstan",
"Kuwait",
"Kyrgyzstan",
"Laos",
"Lebanon",
"Malaysia",
"Maldives",
"Mongolia",
"Myanmar",
"Nepal",
"North Korea",
"Oman",
"Pakistan",
"Palestine",
"Philippines",
"Qatar",
"Saudi Arabia",
"Singapore",
"South Korea",
"Sri Lanka",
"Syria",
"Taiwan",
"Tajikistan",
"Thailand",
"Timor-Leste",
"Turkey",
"Turkmenistan",
"United Arab Emirates",
"Uzbekistan",
"Vietnam",
"Yemen",

"Albania",
"Andorra",
"Austria",
"Belarus",
"Belgium",
"Bosnia and Herzegovina",
"Bulgaria",
"Croatia",
"Czech Republic",
"Denmark",
"Estonia",
"Finland",
"France",
"Germany",
"Greece",
"Hungary",
"Iceland",
"Ireland",
"Italy",
"Latvia",
"Lithuania",
"Luxembourg",
"Malta",
"Moldova",
"Monaco",
"Montenegro",
"Netherlands",
"North Macedonia",
"Norway",
"Poland",
"Portugal",
"Romania",
"Russia",
"Serbia",
"Slovakia",
"Slovenia",
"Spain",
"Sweden",
"Switzerland",
"Ukraine",
"United Kingdom",

"Argentina",
"Brazil",
"Canada",
"Chile",
"Colombia",
"Costa Rica",
"Cuba",
"Dominican Republic",
"Ecuador",
"Guatemala",
"Haiti",
"Honduras",
"Jamaica",
"Mexico",
"Panama",
"Paraguay",
"Peru",
"United States",
"Uruguay",
"Venezuela",

"Australia",
"Fiji",
"New Zealand",
"Papua New Guinea"

];



if(countrySelect){

countries.forEach(country=>{


const option =
document.createElement("option");


option.value = country;


option.textContent = country;


countrySelect.appendChild(option);


});


}




// ===============================
// TEAM USERNAME SWITCHING
// ===============================


const piCore =
document.getElementById("piCore");


const sidra =
document.getElementById("sidra");


const allTeam =
document.getElementById("allTeam");


const usernameBox =
document.getElementById("singleUsername");


const allUsernameBox =
document.getElementById("allUsernames");


const username =
document.getElementById("username");




function showSingleUsername(type){


if(usernameBox)
usernameBox.style.display="block";


if(allUsernameBox)
allUsernameBox.style.display="none";


if(username)
username.required=true;



if(type==="PI"){

username.placeholder =
"Enter Pi Username";


username.dataset.type =
"PI_USERNAME";


}



if(type==="SIDRA"){

username.placeholder =
"Enter Sidra Username";


username.dataset.type =
"SIDRA_USERNAME";


}


}




function showAllUsername(){


if(usernameBox)
usernameBox.style.display="none";


if(allUsernameBox)
allUsernameBox.style.display="block";


if(username)
username.required=false;


}





if(piCore){

piCore.addEventListener(
"change",
()=>{

showSingleUsername("PI");

});


}



if(sidra){

sidra.addEventListener(
"change",
()=>{

showSingleUsername("SIDRA");

});


}



if(allTeam){

allTeam.addEventListener(
"change",
()=>{

showAllUsername();

});


}





// ===============================
// SELFIE PREVIEW
// ===============================


const selfieInput =
document.querySelector(
'input[name="selfie"]'
);



if(selfieInput){


selfieInput.addEventListener(
"change",
()=>{


const file =
selfieInput.files[0];



if(!file)return;



const reader =
new FileReader();



reader.onload=(e)=>{


let preview =
document.getElementById(
"selfiePreview"
);



if(!preview){


preview =
document.createElement("img");


preview.id =
"selfiePreview";


preview.style.width="120px";

preview.style.height="120px";

preview.style.objectFit="cover";

preview.style.borderRadius="50%";

preview.style.marginTop="15px";


selfieInput.after(preview);


}



preview.src =
e.target.result;


};



reader.readAsDataURL(file);


});


}





// ===============================
// FORM SUBMISSION
// ===============================


const form =
document.getElementById(
"registrationForm"
);



if(!form)return;



form.addEventListener(
"submit",
async(e)=>{


e.preventDefault();



const team =
document.querySelector(
'input[name="team"]:checked'
);



if(!team){


alert("Please select a team");


return;


}





const formData =
new FormData();



// PERSONAL INFORMATION


formData.append(
"fullName",
form.fullName.value
);


formData.append(
"dob",
form.dob.value
);


formData.append(
"gender",
form.gender.value
);


formData.append(
"country",
form.country.value
);


formData.append(
"state",
form.state.value
);


formData.append(
"address",
form.address.value
);


formData.append(
"phone",
form.phone.value
);


formData.append(
"email",
form.email.value
);


formData.append(
"social",
form.social.value
);





// TEAM INFORMATION


formData.append(
"team",
team.value
);



if(team.value==="PI_CORE_TEAM"){


formData.append(
"piUsername",
username.value
);


}



else if(team.value==="SIDRA_CORE_TEAM"){


formData.append(
"sidraUsername",
username.value
);


}



else if(team.value==="ALL"){


formData.append(
"piUsername",
form.piUsername.value
);


formData.append(
"sidraUsername",
form.sidraUsername.value
);


}





// ROLE


formData.append(
"role",
form.role.value
);



// SKILLS


formData.append(
"skills",
form.skills.value
);


formData.append(
"experience",
form.experience.value
);


formData.append(
"value",
form.value.value
);





// NEXT OF KIN


const nextOfKin = {


name:
form.kinName.value,


relationship:
form.relationship.value,


phone:
form.kinPhone.value,


email:
form.kinEmail.value,


address:
form.kinAddress.value


};



formData.append(
"nextOfKin",
JSON.stringify(nextOfKin)
);





// FILES


if(form.selfie && form.selfie.files[0]){


formData.append(
"selfie",
form.selfie.files[0]
);


}



if(form.document && form.document.files[0]){


formData.append(
"document",
form.document.files[0]
);


}





try{


const response =
await fetch(

"http://localhost:5000/api/core-team/apply",

{

method:"POST",

body:formData

}

);



const result =
await response.json();



if(result.success){


localStorage.setItem(
"applicationID",
result.applicationID
);



window.location.href =
"success.html";


}

else{


alert(
result.message ||
"Registration failed"
);


}



}


catch(error){


console.error(error);


alert(
"Server connection failed"
);


}



});



});