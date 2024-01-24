let url=`https://64bba8ec7b33a35a44468e7f.mockapi.io/students`


function createTable(data){
let tbody = document.getElementById('table-body')
 
   data.forEach(e => {
    let tr = document.createElement('tr')
    tr.innerHTML=`
    <td>${e.id}</td>
    <td>${e.firstname}</td>
    <td>${e.lastname}</td>
    <td>${e.email}</td>
    <td>${e.mobile}</td>
    <td>${e.batch}</td>
    <td>
    <button class='btn btn-primary'><a href="./HTML/View.html?id=${e.id}" class="edit">Edit</a></button>
    &nbsp
    <button class='btn btn-danger' onclick="deleteData(${e.id})">Delete</button>

    </td>
     
    `
    tbody.append(tr)
   });
}


async function loadData(){
    let res=await fetch(url)
    let data=await res.json()
    createTable(data)
}

loadData()


async function deleteData(e){
    if(confirm("Are YOU SURE? YOOU WANT TO DELETE"))
 {let res = await fetch(`${url}/${e}`,{method:"DELETE"})
 console.log(res.json())
window.location.reload()}


}