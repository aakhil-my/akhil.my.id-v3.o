export default function ErrorTerminal() {
  return (
    <div className="terminal-box">
      <div className="terminal-head">terminal / stack trace</div>
      <div className="terminal-body">
        <div className="line">
          <span className="tag">Error:</span> Cannot resolve requested resource
        </div>
        <div className="line">
          at <span className="path">router.navigate("/requested-page")</span>
        </div>
        <div className="line">
          at <span className="path">app.render()</span>
        </div>
        <div className="line">
          at <span className="path">history.pushState()</span>
        </div>
        <div className="line">
          <span className="tag">Status:</span> 404 Not Found
        </div>
        <div className="line">
          <span className="tag">Hint:</span> Check the URL, file path, or route
          configuration
        </div>
        <div className="line">
          <span className="muted">[dev-server]</span> response terminated with
          unresolved target
        </div>
        <div className="line typing">
          <span className="ok">suggested action:</span> return to safe route
        </div>
      </div>
    </div>
  );
}