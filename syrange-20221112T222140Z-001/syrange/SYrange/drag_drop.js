const drag_items = document.querySelector('.sample')

const drop_boxes = document.querySelectorAll('.sub_con')

drag_items.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
})


drop_boxes.forEach(element => {
    element.addEventListener('dragenter',drag_enter)
    element.addEventListener('dragover', drag_over)
    element.addEventListener('dragleave', drag_leave);
    element.addEventListener('drop', drop)
});


function drag_enter(e){
    e.preventDefault()
    e.target.classList.add('drag-over')
}

function drag_over(e){
    e.preventDefault()
    e.target.classList.add('drag-over')
}

function drag_leave(e){
    e.target.classList.remove('drag-over')
}

function drop(e){
    e.target.classList.remove('drag-over')

    const id = e.dataTransfer.getData('text/plain')
    const draggable = document.getElementById(id)

    e.target.appendChild(draggable)

    draggable.classList.remove('hide')
}