import "./App.css";
import "./style.css";
import index_coffee from "./assets/index_coffee.jpg";
import index_map from "./assets/index_map.jpg";
import index_ice from "./assets/index_ice.jpg";
import shop_small from "./assets/shop-small.jpg";
import fireworks from "./assets/fireworks.png";

const randomImg = [index_ice, shop_small, fireworks];

function getRandomInt(max) {
  // 1 ~ max 숫자안의 랜덤숫자를 출력
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#intro">카페 소개</a>
          </li>
          <li>
            <a href="#map">오시는 길</a>
          </li>
          <li>
            <a href="#choice">이달의 추천</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Section({ id, title, img, alt, text }) {
  return (
    <section id={id}>
      <div className="page-title">
        <h2>{title}</h2>
      </div>
      <div className="content">
        <article className="photo">
          <img src={img} alt={alt} />
        </article>
        <article className="text">
          {text.map((item) => (
            <p>{item}</p> // 배열의 각 요소를 <p> 태그로 감싸서 출력
          ))}
        </article>
      </div>
    </section>
  );
}

function Choice() {
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
          <img src={randomImg[getRandomInt(2)]} alt="ice coffee" />
        </article>
      </div>
    </section>
  );
}

function Contents() {
  return (
    <div id="contents">
      <Section id="intro" title="카페 소개" img={index_coffee} alt="coffee" text={["영업 시간 : 오전 9시 ~ 밤 10시", "휴무 : 매주 수요일", "(수요일이 공휴일일 경우 수요일 영업. 다음날 휴무)"]} />
      <Section id="map" title="오시는 길" img={index_map} alt="map" text={["서귀포시 안덕면 사계리", "제주 올레 10코스 산방산 근처"]} />
      <Choice />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>My times with Coffee</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Contents />
      <Footer />
    </>
  );
}

export default App;
