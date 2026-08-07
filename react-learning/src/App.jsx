import { useState } from "react";

function EditInPlace() {
  const [text, setText] = useState("Mera pehla todo!");
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const handleSave = () => {
    setText(inputValue);      // new value save karo
    setIsEditing(false);      // wapas text mode
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default EditInPlace;