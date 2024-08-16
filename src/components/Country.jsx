const Country = ({ countryItem, deleteCountryButtonHandler }) => {
  const { id, name, gold, silver, bronze } = countryItem;
  return (
    <li>
      <p>{name}</p>
      <p>{gold}</p>
      <p>{silver}</p>
      <p>{bronze}</p>
      <button type="button" onClick={() => deleteCountryButtonHandler(id)}>
        삭제
      </button>
    </li>
  );
};

export default Country;
