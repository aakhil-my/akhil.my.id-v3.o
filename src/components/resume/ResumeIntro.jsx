export default function ResumeIntro() {
  return (
    <section className="page-intro container reveal">
      <div className="page-title-wrap">
        <div className="command-line">
          <span className="symbol">$</span>
          <span>tree ../resume --depth 2</span>
        </div>
        <h1 className="page-title">Resume</h1>
        <p className="page-lead">My educational and professional background.</p>
      </div>
    </section>
  );
}