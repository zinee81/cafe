import Choice from "./Choice";
import Section from "./Section";
import index_coffee from "../../assets/index_coffee.jpg";
import index_map from "../../assets/index_map.jpg";

function Contents() {
  return (
    <div id="contents">
      <Section id="intro" title="카페 소개" img={index_coffee} alt="coffee">
        <p>영업 시간 : 오전 9시 ~ 밤 10시</p>
        <p>휴무 : 매주 수요일</p>
        <p>(수요일이 공휴일일 경우 수요일 영업. 다음날 휴무)</p>
      </Section>
      <Section id="map" title="오시는 길" img={index_map} alt="map">
        <p>서귀포시 안덕면 사계리</p>
        <p>제주 올레 10코스 산방산 근처</p>
      </Section>
      <Choice />
    </div>
  );
}

export default Contents;
