const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p>Добре: {good}</p>
    <p>Нейтрально: {neutral}</p>
    <p>Погано: {bad}</p>
    <p>Всього: {total}</p>
    <p>Позитивний відгук: {positivePercentage}%</p>
  </div>
);

export default Statistics;
