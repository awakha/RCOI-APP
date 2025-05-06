// 5. Создай компонент с текстовым полем (input) и списком имен (например, массив из 5-10 имен). При вводе текста в поле список должен фильтроваться по именам, которые содержат введенные буквы.

import { useState } from "react";

const names = [
  "Хавашка",
  "Эмма",
  "Оливия",
  "Ава",
  "София",
  "Изабелла",
  "Миа",
  "Шарлотта",
  "Амелия",
  "Харпер",
];
const Task5 = () => {
  const [search, setSearch] = useState("");

  const filtered = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск"
      />
      <div>
        {filtered.length > 0 ? (
          filtered.map((name) => <p>{name}</p>)
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
    </div>
  );
};
export default Task5;
