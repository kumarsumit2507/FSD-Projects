const notesContainer = document.querySelector(".notes_container");
const createBtn = document.querySelector(".pri_btn");


// ---------------- CREATE NOTE ----------------

createBtn.addEventListener("click", () => {

    // Create the note card
    const note = document.createElement("div");

    note.className = "input_box";


    // Create editable text area
    const text = document.createElement("div");

    text.className = "note_text";

    text.setAttribute("contenteditable", "true");


    // Create delete icon
    const deleteIcon = document.createElement("span");

    deleteIcon.className = "material-symbols-outlined";

    deleteIcon.textContent = "delete";

    // deleteIcon.setAttribute("contenteditable", "false");


    // Put text and delete icon inside note
    note.appendChild(text);
    note.appendChild(deleteIcon);


    // Add note to notes container
    notesContainer.appendChild(note);


    // Automatically focus the text area
    text.focus();
});


// ---------------- DELETE NOTE ----------------

notesContainer.addEventListener("click", (event) => {

    if (event.target.classList.contains("material-symbols-outlined")) {

        const note = event.target.closest(".input_box");

        note.remove();
    }

});