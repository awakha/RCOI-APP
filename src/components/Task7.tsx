// 3. Сделай компонент с двумя кнопками — "Лайк" и "Дизлайк" — и двумя счетчиками, которые показывают количество лайков и дизлайков. При нажатии на соответствующую кнопку значение соответствующего счетчика должно увеличиваться.

import { useState } from "react";

const Task7 = () => {
  const [likes, setLikes] = useState(0);
  const [deslikes, setDeslikes] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };
  const incrementDeslikes = () => {
    setDeslikes(deslikes + 1);
  };

  return (
    <div>
      <div className="like-dislike-box">
        <p>{likes}</p>
        <p>{deslikes}</p>
      </div>

      <div className="btns">
        <button onClick={incrementLikes}>Лайк</button>
        <button onClick={incrementDeslikes}>Дизлайк</button>
      </div>
    </div>
  );
};
export default Task7;
