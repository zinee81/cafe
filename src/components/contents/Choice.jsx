import index_ice from "../../assets/index_ice.jpg";
import shop_small from "../../assets/shop-small.jpg";
import fireworks from "../../assets/fireworks.png";
import { useState } from "react";
const randomImg = [index_ice, shop_small, fireworks];

function Choice() {
  const [random, setRondom] = useState(0);

  function getRandomInt() {
    // 1 ~ max 숫자안의 랜덤숫자를 출력
    const randomInt = Math.floor(Math.random() * randomImg.length);
    setRondom(randomInt);
  }

  return (
    <section id="choice">
      <div className="page-title">
        <h2>이달의 추천</h2>
      </div>
      <div className="content">
        <article className="text">
          <p>핸드드립 아이스커피</p>
          <ol>
            <li>1인분 기준으로 서버에 각얼음 5조각(한조각의 20cc) 넣고 추출을 시작한다.</li>
            <li>평상시 보다 원두의 양은 2배 정도(20g)와 추출액은 얼음 포함해서 200cc까지 내린다.</li>
            <li>아이스 잔에 얼음 6-7개 섞어서 시원하게 마신다.</li>
          </ol>
        </article>
        <article className="photo">
          <img src={randomImg[random]} alt="ice coffee" />
          <br />
          <button onClick={getRandomInt}>이미지변경</button>
        </article>
      </div>
    </section>
  );
}
export default Choice;
