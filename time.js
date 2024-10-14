let name = document.getElementById('name')
let day = document.getElementById('day')
let come = document.getElementById('come')
let go = document.getElementById('go')
let from = document.getElementById('from')
let to = document.getElementById('to')
let reward = document.getElementById('reward')
let discount = document.getElementById('discount')
let create = document.getElementById('create')
let tbody = document.getElementById('tbody')
let mood ='create'
let deleteall =document.getElementById('deleteall')
let thead = document.querySelector('thead')
let n;
// create
let data;
if(localStorage.employee !=null){
    data = JSON.parse(localStorage.employee)
} else{
    data =[]
}
create.onclick = () =>{
 let ob ={
    name:name.value,
    day:day.value,
    come:come.value,
    go:go.value,
    from:from.value,
    to:to.value,
    reward:reward.value,
    discount:discount.value
}
    if(name.value != '' && day.value !=''){
    if(mood === 'create'){
    data.push(ob)
} else{
    data[n] =ob
    mood ='create'
    create.textContent = 'تسجيل'
}
}
 localStorage.setItem('employee',JSON.stringify(data))
 showdata()
 cleardata()
}

function showdata(){
    let table =''
    for(let i= 0; i<data.length;i++){
table +=`
       <tr>
                <td>${data[i].name}</td>
                <td>${data[i].day}</td>
                <td>${data[i].come}</td>
                <td>${data[i].go}</td>
                <td>${data[i].from}</td>
                <td>${data[i].to}</td>
                <td>${data[i].reward}</td>
                <td>${data[i].discount}</td>
                <td><button onclick='update(${i})' type="button">تعديل</button></td>
                <td><button onclick ='deleteitem(${i})' type="button">حذف</button></td>
            </tr>
`
    }
    tbody.innerHTML =table
    if(data.length > 0){
        deleteall.innerHTML =`
        <button onclick="deleteAll()" id='deleteall'>حذف الكل</button>
        `
    }else{
        deleteall.innerHTML =``
    }
}
showdata()
// delete one item

function deleteitem(i){
    data.splice(i,1)
    localStorage.employee = JSON.stringify(data)
    showdata()
}

// clear data

function cleardata(){
    name.value =''
    day.value =''
    come.value =''
    go.value =''
    from.value =''
    to.value =''
    reward.value =''
    discount.value =''
}
// update
function update(i){
    name.value = data[i].name
    day.value = data[i].day
    come.value = data[i].come
    go.value = data[i].go
    from.value = data[i].from
    to.value = data[i].to
    reward.value = data[i].reward
    discount.value = data[i].discount
    create.innerHTML ='تعديل'
    mood ='update'
    n=i
}
// delete all
 function deleteAll(){
    data.splice(0)
    localStorage.clear()
    showdata()
 }
//  search
function search(value){
    let table =''
    for(let i =0 ; i<data.length ; i++){
        if(data[i].name.includes(value)){
            table +=`
                <tr>
                <td>${data[i].name}</td>
                <td>${data[i].day}</td>
                <td>${data[i].come}</td>
                <td>${data[i].go}</td>
                <td>${data[i].from}</td>
                <td>${data[i].to}</td>
                <td>${data[i].reward}</td>
                <td>${data[i].discount}</td>
                <td><button onclick='update(${i})' type="button">تعديل</button></td>
                <td><button onclick ='deleteitem(${i})' type="button">حذف</button></td>
            </tr>
            `
        }
    }
       tbody.innerHTML =table
}





