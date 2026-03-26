export default function ContactAside() {
  return (
    <aside className="contact-aside reveal">
      <div className="panel-topbar">
        <div className="panel-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="panel-title">contact/meta.info</div>
      </div>

      <div className="contact-aside-body">
        <div className="contact-list">
          <div className="contact-item">
            <span className="k">email</span>
            <span className="v">contact@akhil.my.id</span>
          </div>
          <div className="contact-item">
            <span className="k">instagram</span>
            <span className="v">instagram.com/aakhil.my</span>
          </div>
          <div className="contact-item">
            <span className="k">github</span>
            <span className="v">github.com/aakhil-my</span>
          </div>
          <div className="contact-item">
            <span className="k">linkedin</span>
            <span className="v">linkedin.com/in/aakhilmy</span>
          </div>
          <div className="contact-item">
            <span className="k">location</span>
            <span className="v">Jambi, Indonesia</span>
          </div>
        </div>

        <div className="inline-code-block">
          <div className="code-line">
            <span className="symbol">&gt;</span>
            <span>contact()</span>
          </div>
          <div className="code-line">
            <span className="symbol">&gt;</span>
            <span>send_message(name, email, message)</span>
          </div>
          <div className="code-line">
            <span className="symbol">&gt;</span>
            <span>response: success | error</span>
          </div>
        </div>
      </div>
    </aside>
  );
}