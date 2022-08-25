document.addEventListener('DOMContentLoaded', () => {
  // your code here
  let form = document.querySelector('form')  
  form.addEventListener('submit', (e)=>{
    e.preventDefault();    
    madeToDo(e.target.new_task.value);
    form.reset()
    

  })
  
});

function madeToDo(toDo){  
  let p = document.createElement('p');
  let btn = document.createElement('button');
  let li = document.createElement('li');  
  btn.textContent = 'x';
  btn.addEventListener('click', handleDelete);  
  p.textContent = `${toDo} `;
  p.appendChild(btn);
  li.appendChild(p)
  let task = document.querySelector('#tasks');
  task.appendChild(li);
}

function handleDelete(e){
  e.target.parentNode.parentNode.remove();
}