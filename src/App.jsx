import { useState } from "react";

const App = () => {
  const [country, setCountry] = useState([]);
  const [name, setName] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSliver] = useState(0);
  const [bronze, setBronze] = useState(0);

  //input
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const goldMedalChangeHandler = (e) => {
    setGold(+e.target.value);
  };
  const silverMedalChangeHandler = (e) => {
    setSliver(+e.target.value);
  };
  const bronzeMedalChangeHandler = (e) => {
    setBronze(+e.target.value);
  };

  // 국가 추가 함수
  const addCountryButtonHandler = () => {
    if (!name) {
      alert("국가명을 입력해주세요");
      return;
    }
    const newCountryName = {
      id: new Date().getTime(),
      name: name,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };

    setCountry([...country, newCountryName]);
  };

  //삭제 함수 - 해당아이디만 고르는거 다시
  const deleteCountryButtonHandler = (id) => {
    //filter 사용해서 id값 비교!!
    const deleteCountry = country.filter((item) => {
      return item.id === id;
    });
    setCountry(deleteCountry);
  };

  //국가 업데이트 함수
  const updateCountryButtonHandler = () => {
    //국가 이름이 같다면 변경된 메달 값 map으로 넣어
    const updateCountry = country.map((data) => {
      if (data.name === name) {
        return { id: data.id, name, gold, silver, bronze };
      }
    });
    setCountry(updateCountry);
  };

  return (
    <div>
      <h1>파리 올림픽</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" value={name} onChange={nameChangeHandler} />
        <input type="number" value={gold} onChange={goldMedalChangeHandler} />
        <input
          type="number"
          value={silver}
          onChange={silverMedalChangeHandler}
        />
        <input
          type="number"
          value={bronze}
          onChange={bronzeMedalChangeHandler}
        />
        <button type="button" onClick={addCountryButtonHandler}>
          국가추가
        </button>
        <button type="submit" onClick={updateCountryButtonHandler}>
          업데이트
        </button>
      </form>
      <>
        <ul>
          {country.map((data) => {
            return (
              <li key={data.id}>
                <p>{data.name}</p>
                <p>{data.gold}</p>
                <p>{data.silver}</p>
                <p>{data.bronze}</p>
                <button type="button" onClick={deleteCountryButtonHandler}>
                  삭제
                </button>
              </li>
            );
          })}
        </ul>
      </>
    </div>
  );
};

export default App;
