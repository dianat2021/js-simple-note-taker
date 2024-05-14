import validateInputFields from "./inputValidation.js";

const subjectInput = document.querySelector(".note-subject");
const dateInput = document.querySelector(".note-date");
const noteText = document.querySelector(".note-text");
const error = document.querySelector(".error-message");
const submitButton = document.querySelector(".submit-btn");

const notesList = JSON.parse(localStorage.getItem("notes-array")) || [];
// ---------- FUNCTION THAT COLLECTS THE DATA AND ADDS IT TO THE LIST ON SUBMIT
const storeNotes = () => {
  localStorage.setItem("notes-array", JSON.stringify(notesList));
};

const addNotes = () => {
  const isDataValid = validateInputFields(
    subjectInput,
    dateInput,
    noteText,
    error
  );
  if (!isDataValid) return;
  else {
    console.log(isDataValid);
    const currentNote = {
      id: Date.now(),
      subject: subjectInput.value,
      date: dateInput.value,
      text: noteText.value,
    };
    notesList.push(currentNote);
    storeNotes();
    console.log(notesList);
  }
};

submitButton.addEventListener("click", addNotes);
