// 2. Создай компонент UserCard, который принимает пропсы: name, age, и occupation. Компонент должен отображать карточку с информацией о пользователе (например: "Имя: Иван, Возраст: 25, Профессия: Программист").
// В родительском компоненте отобрази несколько карточек для разных пользователей.

const UserCard = ({ name, age, occupation }) => {
  return (
    <div>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      <p>Профессия: {occupation}</p>
      <p>E</p>
    </div>
  );
};
export default UserCard;
