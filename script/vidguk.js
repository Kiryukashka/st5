const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");
// const notes = ['Залиш свій відгук', 'Чорт']

// function render() {
//     for (let i = 0; i < notes.length; i++) {
//         listElement.insertAdjacentHTML("beforeend", getNotesTemplate(notes[i]));
//     }

//     // for (let note of notes) {
//     //     listElement.insertAdjacentHTML('beforeend', getNotesTemplate(note))
//     // }
// }

// render(0);

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0) {
//         return;
//     }

//     listElement.insertAdjacentHTML(
//         "beforeend",
//         getNotesTemplate(inputElement.value)
//     );
//     inputElement.value = "";
// }

// function getNotesTemplate(title) {
//     return `
//     <li class="list-group-item d flex justify-content-between aling-items-center">
//         <span>${title}</span>
//         <span class="redaktor">
//              <span class="btn btn-small btn-success">&check;</span>
//               <span class="btn btn-small btn-danger">&times;</span>
//         </span>
//     </li>`;
// }

const notes = [
    {
        title: "Залиш свій відгук",
        complited: false,
    },
    {
        title: "Чорт",
        complited: true,
    },

];

function render() {
    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.innerHTML = '<p>No elemnts<p>'
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML("beforeend", getNotesTemplate(notes[i], i));
    }
}
render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return;
    }
    const newNote = {
        title: inputElement.value,
        complited: false,
    }
    notes.push(newNote)
    render()
    inputElement.value = '';
}

listElement.onclick = function(event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            notes[index].complited = !notes[index].complited
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
        
        render()
    }
}

function getNotesTemplate(note, index) {
    return `
    <li class="list-group-item d flex justify-content-between aling-items-center">
        <span class='${note.complited ? 'text-decoration-line-through' : ''}'>${note.title}</span>
        <span class="redaktor">
             <span class="btn btn-small btn-${note.complited ? 'warning' : 'success'}" data-index='${index}' data-type='toggle'>&check;</span>
              <span class="btn btn-small btn-danger" data-index='${index}' data-type='remove'>&times;</span>
        </span>
    </li>`;
}