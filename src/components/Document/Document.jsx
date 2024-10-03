import './Document.css';  // External CSS file for styling

const Document = () => {
  return (
    <div className="container">
      <a href="/public/infinimove/SIF.pdf" target="_blank" className="box orange">
        <div className="content">
          <img src="/public/infinimove/apply-online-ico.png" alt="SIF" />
          <h2>SIF</h2>
          <div className="arrow-button"><p>→</p>
          </div>
        </div>
      </a>

      <a href="/public/infinimove/MANDATORY DISCLOSURES.pdf" target="_blank" className="box blue">
        <div className="content">
          <img src="/public/infinimove/prospects-ico.png" alt="Mandatory Disclosure" />
          <h2>MANDATORY DISCLOSURE</h2>
          <div className="arrow-button">→</div>
        </div>
      </a>

      <a href="/public/infinimove/APPROVALS.pdf" target="_blank" className="box yellow">
        <div className="content">
          <img src="/public/infinimove/certification-ico (1).png" alt="Approvals" />
          <h2>APPROVALS</h2>
          <div className="arrow-button">→</div>
        </div>
      </a>
    </div>
  );
}

export default Document;
