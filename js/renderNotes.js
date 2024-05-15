const allNotesContainer = document.querySelector(".all-notes-container");

const renderNotes = (notesList) => {
  allNotesContainer.innerHTML = "";
  notesList.forEach((note) => {
    // ---------- CREATING ELEMENTS TO DISPLAY NOTES
    const individualNotesContainer = document.createElement("div");
    const individualNotesDataContainer = document.createElement("div");
    const subjectAndDateContainer = document.createElement("div");
    const subjectContainer = document.createElement("span");
    const dateContainer = document.createElement("span");
    const noteContainer = document.createElement("div");
    const noteText = document.createElement("p");
    const deleteButton = document.createElement("button");

    // ---------- APPENDING ELEMENTS
    allNotesContainer.append(individualNotesContainer);
    individualNotesContainer.append(individualNotesDataContainer, deleteButton);
    individualNotesDataContainer.append(subjectAndDateContainer, noteContainer);
    subjectAndDateContainer.append(subjectContainer, dateContainer);
    noteContainer.append(noteText);

    // ---------- ADDING CLASS NAMES THE CREATED ELEMENTS
    allNotesContainer.classList.add("all-notes-container");
    individualNotesContainer.classList.add("individual-notes-container");
    individualNotesDataContainer.classList.add(
      "individual-notes-data-container"
    );
    // individualNotesContainer.classList.add("notes-list-container");
    subjectAndDateContainer.classList.add("subject-and-date-container");
    noteContainer.classList.add("note-container");
    deleteButton.classList.add("delete-button");

    // ---------- SETTING THE VALUES FOR THE CREATED ELEMENTS
    subjectContainer.textContent = note.subject;
    dateContainer.textContent = note.date;
    noteText.textContent = note.text;
    deleteButton.textContent = "Delete";

    // ---------- ADDING AN ID TO EACH INDIVIDUAL NOTE
    // individualNotesContainer.dataset.id = note.id;

    // ---------- DELETE FUNCTIONALITY
    deleteButton.addEventListener("click", () => {
      const index = notesList.findIndex((item) => item.id === note.id);
      notesList.splice(index, 1);
      localStorage.setItem("notes-array", JSON.stringify(notesList));
      renderNotes(notesList);
    });
  });
};

export default renderNotes;
