import { validateInputFields, validateNoteLength } from "./inputValidation.js";
import renderNotes from "./renderNotes.js";

const subjectInput = document.querySelector(".note-subject");
const dateInput = document.querySelector(".note-date");
const noteText = document.querySelector(".note-text");
const error = document.querySelector(".error-message");
const submitButton = document.querySelector(".submit-btn");
const emptyNotesList = document.querySelector(".empty-notes-list");
const notesList = JSON.parse(localStorage.getItem("notes-array")) || [];

document.addEventListener("DOMContentLoaded", () => {
  emptyNotesList.style.display = notesList.length === 0 ? "block" : "none";
  renderNotes(notesList);
});

noteText.addEventListener("input", () => {
  validateNoteLength(noteText, error);
  console.log("test");
});

// ---------- FUNCTION THAT COLLECTS THE DATA AND ADDS IT TO THE LIST ON SUBMIT
const saveNotesToLocalStorage = () => {
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
    renderNotes(notesList);
    saveNotesToLocalStorage();
    emptyNotesList.style.display = "none";
  }
  subjectInput.value = "";
  dateInput.value = "";
  noteText.value = "";
};

submitButton.addEventListener("click", addNotes);
