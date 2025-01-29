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
    // for (let i = 0; i < notes.length; i++) {
    //     listElement.insertAdjacentHTML("beforeend", getNotesTemplate(notes[i]));
    // }

    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNotesTemplate(note))
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
    listElement.insertAdjacentHTML(
        "beforeend",
        getNotesTemplate(newNote)
    );
    inputElement.value = "";
}

function getNotesTemplate(note) {
    return `
    <li class="list-group-item d flex justify-content-between aling-items-center">
        <span>${note.title}</span>
        <span class="redaktor">
             <span class="btn btn-small btn-success">&check;</span>
              <span class="btn btn-small btn-danger">&times;</span>
        </span>
    </li>`;
}