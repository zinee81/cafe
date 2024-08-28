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

export default Section;
