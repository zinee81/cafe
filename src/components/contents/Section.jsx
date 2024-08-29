function Section({ id, title, img, alt, children }) {
  return (
    <section id={id}>
      <div className="page-title">
        <h2>{title}</h2>
      </div>
      <div className="content">
        <article className="photo">
          <img src={img} alt={alt} />
        </article>
        <article className="text">{children}</article>
      </div>
    </section>
  );
}

export default Section;
