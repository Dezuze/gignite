import './Partners.css';

const Partners = () => {
  const partners = [
    {
      id: 'sponsor',
      type: 'Sponsored By',
      name: 'Gadgeon',
      logoUrl: 'https://gadgeonindustrial.com/assets/images/gadgeon-logo.svg',
      description: 'Gadgeon is a premier product engineering and IoT technology enterprise enabling high-impact digital transformation worldwide.',
      link: 'https://www.gadgeon.com/',
    },
    {
      id: 'collab1',
      type: 'Collaborator',
      name: 'IEEE SPS Kerala Chapter',
      logoUrl: '/ieee_sps_kc_logo.png',
      description: 'IEEE Signal Processing Society (SPS) Kerala Chapter advances state-of-the-art research, education, and development in signal processing.',
      link: 'https://www.ieeespskc.in/',
    },
    {
      id: 'collab2',
      type: 'Collaborator',
      name: 'FISAT IEEE SB Branch',
      logoUrl: 'https://www.ieeefisat.org/assets/img/sblogo.webp',
      description: 'Federal Institute of Science And Technology (FISAT) IEEE Student Branch fosters student innovation, technology leadership, and technical excellence.',
      link: 'https://www.ieeefisat.org/',
    }
  ];

  return (
    <section id="partners" className="section-container partners-section">
      <div className="partners-content animate-fade-in">
        <span className="partners-badge">COLLABORATION &amp; SUPPORT</span>
        <h2 className="partners-title">Our Partners</h2>
        
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card glass-panel">
              <span className={`partner-type ${partner.id === 'sponsor' ? 'sponsor-tag' : 'collab-tag'}`}>
                {partner.type}
              </span>
              <a href={partner.link} target="_blank" rel="noopener noreferrer" className="partner-logo-container">
                <img 
                  src={partner.logoUrl} 
                  alt={partner.name} 
                  className={`partner-logo ${partner.id}`} 
                />
                <div className="partner-tooltip">
                  <h4>{partner.name}</h4>
                  <p>{partner.description}</p>
                  <span className="tooltip-hint">Click to visit site &rarr;</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
