export default function ContactFormPanel() {
  return (
    <div className="contact-panel reveal">
      <div className="panel-topbar">
        <div className="panel-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="panel-title">contact/request.form</div>
      </div>

      <div className="contact-panel-body">
        <div className="contact-copy">
          <div className="command-line">
            <span className="symbol">&gt;</span>
            <span>send message</span>
          </div>
          <p>Fill out the form below to send me a message.</p>
        </div>

        <form
          className="contact-form"
          id="contactForm"
          action="https://script.google.com/macros/s/AKfycbym83flfz-irW-dtdxEnkFqBmXQKSEetLPvRbqgrV8_73eAPwFV8ORBKRJGBRp82iO4cw/exec"
          method="POST"
          target="contactSubmitFrame"
        >
          <input type="hidden" id="sourcePage" name="sourcePage" value="" />

          <div className="field-group">
            <label className="field-label" htmlFor="name">
              <span className="field-prefix">01.</span> Nama
            </label>
            <input
              className="input"
              id="name"
              name="name"
              type="text"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="email">
              <span className="field-prefix">02.</span> Email
            </label>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="nama@email.com"
              required
            />
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="message">
              <span className="field-prefix">03.</span> Pesan
            </label>
            <textarea
              className="textarea"
              id="message"
              name="message"
              placeholder="Tulis pesan Anda di sini"
              required
            ></textarea>
          </div>

          <div className="form-actions">
            <button className="button button-primary" type="submit">
              Send Message
            </button>
            <a className="button button-secondary" href="/mail/">
              Or Email Directly
            </a>
          </div>

          <p className="form-status" id="formStatus" role="status" aria-live="polite"></p>
        </form>

        <iframe
          name="contactSubmitFrame"
          id="contactSubmitFrame"
          style={{ display: "none" }}
          title="hidden form target"
        ></iframe>
      </div>
    </div>
  );
}