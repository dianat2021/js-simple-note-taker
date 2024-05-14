const validateInputFields = (
  subjectInput,
  dateInput,
  noteText,
  errorElement
) => {
  const subjectValue = subjectInput.value.trim();
  const dateValue = dateInput.value.trim();
  const noteValue = noteText.value.trim();
  if (!subjectValue || !dateValue || !noteValue) {
    errorElement.textContent = "All input fields must be filled!";
    return false;
  }
  return true;
};

const validateNoteLength = (noteText, errorElement) => {
  const noteValue = noteText.value.trim();
  console.log(noteValue.length);
  if (noteValue.length >= 10) {
    errorElement.textContent = "Maximun characters allowed is 500";
    return false;
  }
};

export { validateInputFields, validateNoteLength };
