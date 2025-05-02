import { useState } from "react";

const Task4 = () => {
  const [schet, setSchet] = useState(false);

  const handleToggle = () => {
    setSchet(!schet);
  };
  return (
    <div>
      <p>{schet ? "On" : "Off"}</p>
      <button onClick={handleToggle}>Handle</button>
    </div>
  );
};
export default Task4;
