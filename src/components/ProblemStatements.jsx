import './ProblemStatements.css';

const ProblemStatements = () => {
  const problems = [
    {
      id: 1,
      title: 'Smart Healthcare Solutions',
      description: 'Develop innovative solutions for remote patient monitoring and telemedicine.'
    },
    {
      id: 2,
      title: 'Sustainable Energy Management',
      description: 'Create platforms to optimize energy consumption in smart buildings.'
    },
    {
      id: 3,
      title: 'AI in Supply Chain',
      description: 'Utilize machine learning to predict and manage supply chain disruptions.'
    }
  ];

  return (
    <section id="problems" className="section-container problems-section">
      <div className="problems-content">
        <h2 className="section-title text-white">Problem Statements</h2>
        <p className="section-subtitle text-light">
          Themes will be fully revealed soon. Here is a sneak peek!
        </p>

        <div className="problems-grid">
          {problems.map((problem) => (
            <div key={problem.id} className="problem-card disabled-card">
              <div className="card-overlay">
                <span>Locked</span>
              </div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
        
        <button className="btn disabled mt-4">Download Full PDF (Coming Soon)</button>
      </div>
    </section>
  );
};

export default ProblemStatements;
