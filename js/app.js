const subjectInput = document.querySelector(".note-subject");
const dateInput = document.querySelector(".note-date");
const noteText = document.querySelector(".note-text");
const submitButton = document.querySelector(".submit-btn");
const notesList = [];
// ---------- FUNCTION THAT COLLECTS THE DATA AND ADDS IT TO THE LIST ON SUBMIT
const addNotes = () => {
  const currentNote = {
    id: Date.now(),
    subject: subjectInput.value,
    date: dateInput.value,
    text: noteText.value,
  };
  notesList.push(currentNote);
};

submitButton.addEventListener("click", addNotes);
