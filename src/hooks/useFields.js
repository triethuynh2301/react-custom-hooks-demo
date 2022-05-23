import { useState } from "react";

const useFields = (initialState) => {
  // set the initial data for the form
  const [fieldsData, setFieldsData] = useState(initialState);

  // event to update forms when there is input
  const handleChange = (e) => {
    setFieldsData((prevFieldsData) => ({
      ...prevFieldsData,
      [e.target.name]: e.target.value,
    }));
  };

  // reset all fields data to initial state
  const resetFieldsData = () => {
    setFieldsData(initialState);
  };

  // return the fields data and the event handler to update the form
  return [fieldsData, handleChange, resetFieldsData];
};

export default useFields;
