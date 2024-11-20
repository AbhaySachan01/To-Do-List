// ------------for date --------------
const date = document.querySelector('#date');
const day = fun();
date.innerText = day;
function fun(){
     const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
const year = currentDate.getFullYear();

  return `${date}/${month}/${year}`;
}
// -----------for input---------------
const input = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');
input.addEventListener('keypress', function (e) {
  console.log(e.key);
  if (e.key === 'Enter') {
    
    const task = input.value;
  if(task===""){
      alert("Please write the task!")
    return;}
  const text = task.charAt(0).toUpperCase()+task.slice(1);
  const li = document.createElement('li');
  li.innerText=text;
  list.append(li);
  const span = document.createElement('span');
  li.append(span);
  span.classList.add('delete');
  input.value="";
  save();
  }
  });
btn.addEventListener('click',()=>{
  const task = input.value;
  if(task===""){
      alert("Please write the task!")
    return;}
  const text = task.charAt(0).toUpperCase()+task.slice(1);
  const li = document.createElement('li');
  li.innerText=text;
  list.append(li);
  const span = document.createElement('span');
  li.append(span);
  span.classList.add('delete');
  input.value="";
  save();
})
list.addEventListener('click',
function(e){
  if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
} 
  else if(e.target.tagName === 'LI'){
      e.target.classList.toggle('checked');
  }
  save();
});
function save(){
  localStorage.setItem('data',list.innerHTML);
}
function show(){
  list.innerHTML = localStorage.getItem('data');
}
show();

