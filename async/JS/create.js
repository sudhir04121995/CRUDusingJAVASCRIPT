let form =document.forms["create"]
let url=`https://64bba8ec7b33a35a44468e7f.mockapi.io/students`

async function getValue(e){
    e.preventDefault();
   if(form.firstname.value && form.lastname.value && form.email.value && form.mobile.value && form.batch.value){
    let students={
        firstname:form.firstname.value,
        lastname: form.lastname.value,
        email:form.email.value,
        mobile:form.mobile.value,
        batch:form.batch.value,
        status:true
    }
   res = await fetch(url,{
    headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    ,
    method:'POST',
    body:JSON.stringify(students)});
let data = res .json()
console.log(data)
window.location.href='../index.html'
   }
   else{
    alert("All fields are required")
   }
    
}

form.addEventListener('submit',getValue)