export default function AboutSidebar() {
  return (
    <aside className="editor-shell reveal">
      <div className="panel-topbar">
        <div className="panel-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="panel-title">img/profile.jpg</div>
      </div>

      <div className="editor-body">
        <div className="profile-frame">
          <img
            className="profile-image"
            src="/img/akhil.png"
            alt="Foto profil"
            loading="lazy"
          />
        </div>

        <p className="profile-note">
          Hi, there! I'm Gilang <strong>Akhil</strong> Azzam
        </p>

        <div className="side-tags">
          <span className="tag tag-code">#frontend</span>
          <span className="tag tag-code">#backend</span>
          <span className="tag tag-code">#fullstack</span>
          <span className="tag tag-code">#teacher</span>
          <span className="tag tag-code">#designer</span>
          <span className="tag tag-code">#photography</span>
        </div>
      </div>
    </aside>
  );
}