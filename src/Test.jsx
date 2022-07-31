import React, { useState } from "react";
import AsyncSelect from "react-select/async";

function Test() {
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  // handle input change event
  const handleInputChange = value => {
    setValue(value);
  };

  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
  };

  // load options using API call
  const loadOptions = () => {
    return fetch(`https://notes-share-fyp.herokuapp.com/api/documents/values`)
      .then(res => res.json())
      .then(result => result[0].universities);
  };

  return (
    <div className="App">
      <h3>
        React-Select Async Dropdown -{" "}
        <a
          href="https://www.cluemediator.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clue Mediator
        </a>
      </h3>
      <pre>Input Value: "{inputValue}"</pre>
      <AsyncSelect
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={e => e.label}
        getOptionValue={e => e.value}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
      <pre>Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}</pre>
    </div>
  );
}

export default Test;
