export const handleSubjectChange = selectedOption => {
  setSelectedSubject(selectedOption);
  if (selectedOption.__isNew__) {
    dispatch(
      addSubject({
        fieldId: subjects._id,
        subject: selectedOption.label,
      })
    );
  }
};
