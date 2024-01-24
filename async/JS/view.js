//1. get data from the selected id
//2. Display value in te form
//3. edit form if require
//4. submit form
//5. send data to API
//6. after successful response redirect to home page
let url=`https://64bba8ec7b33a35a44468e7f.mockapi.io/students`

let form = document.forms['create']
let urlParams = new URLSearchParams(window.location.search)
let id = urlParams.get('id')


async function getData(){
    if(id || id===0){
      
        let res = await fetch(`${url}/${id}`)
        let data = await res.json()
       
        let form = document.forms['create']
         
        form.firstname.value=data.firstname
        form.lastname.value=data.lastname
        form.email.value=data.email
        form.mobile.value=data.mobile
        form.batch.value=data.batch
    }
    else(
        window.location.href='../index.html'
    )
}

getData()



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
   res = await fetch(`${url}/${id}`,{
    headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    ,
    method:'PUT',
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