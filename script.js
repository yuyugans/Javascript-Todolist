
function add(){
    const task = document.querySelector('#Task')
    const listTask = document.getElementById('list-task')
    let newTask = document.createElement('li')
    let newbutton = document.createElement('button')
    
    if(task.value ==''){
        alert("Tulis sesuatu dulu abangkuh")
    }else{
        newTask.textContent = task.value
        newbutton.textContent = 'Done'
        newbutton.classList.add('done')
        newTask.appendChild(newbutton)
        listTask.appendChild(newTask)
    }
    task.value = ''

   
    const done = document.querySelectorAll('.done')
    for( let i = 0; i < done.length; i++){
        done[i].onclick = function(){
            let div = this.parentElement
            div.style.display = "none"
        }
    }
}