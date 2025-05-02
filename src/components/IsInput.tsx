import { useState } from "react";

const IsInput = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name.length > 2 ? <p>Привет, {name}!</p> : "..."}
    </div>
  );
};
export default IsInput;
