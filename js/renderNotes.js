const allNotesContainer = document.querySelector(".all-notes-container");

const renderNotes = (notesList) => {
  notesList.forEach((note) => {
    // ---------- CREATING ELEMENTS TO DISPLAY NOTES
    const individualNotesContainer = document.createElement("div");
    const subjectAndDateContainer = document.createElement("div");
    const subjectContainer = document.createElement("span");
    const dateContainer = document.createElement("span");
    const noteContainer = document.createElement("div");
    const noteText = document.createElement("p");

    // ---------- APPENDING ELEMENTS
    allNotesContainer.append(individualNotesContainer);
    individualNotesContainer.append(subjectAndDateContainer, noteContainer);
    subjectAndDateContainer.append(subjectContainer, dateContainer);
    noteContainer.append(noteText);

    // ---------- ADDING CLASS NAMES THE CREATED ELEMENTS
    allNotesContainer.classList.add("all-notes-container");
    individualNotesContainer.classList.add("individual-notes-container");
    individualNotesContainer.classList.add("notes-list-container");
    subjectAndDateContainer.classList.add("subject-and-date-container");
    noteContainer.classList.add("note-container");

    // ---------- SETTING THE VALUES FOR THE CREATED ELEMENTS
    subjectContainer.textContent = note.subject;
    dateContainer.textContent = note.date;
    noteText.textContent = note.text;
  });
};

export default renderNotes;
