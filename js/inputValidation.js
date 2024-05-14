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

export default validateInputFields;
