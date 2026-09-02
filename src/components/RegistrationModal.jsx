import React, { useState, useEffect } from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './RegistrationModal.css';

const RegistrationModal = ({ isOpen, onClose, preselectedThemeId }) => {
  const { themes, event } = HACKATHON_CONFIG;

  const [formData, setFormData] = useState({
    teamName: '',
    college: '',
    teamSize: '3',
    leadName: '',
    leadEmail: '',
    leadPhone: '',
    member2Name: '',
    member2Email: '',
    member3Name: '',
    member3Email: '',
    member4Name: '',
    member4Email: '',
    themeId: '01',
    problemStatement: '',
    proposedSolution: '',
    techApproach: '',
    videoLink: '',
    agreement: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedThemeId) {
      setFormData((prev) => ({ ...prev, themeId: preselectedThemeId }));
    }
  }, [preselectedThemeId]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCopyCode = () => {
    if (submissionId) {
      navigator.clipboard.writeText(submissionId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const generatedId = 'GIGNITE-2026-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionId(generatedId);
      setIsSubmitted(true);
      setLoading(false);
    }, 650);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="registration-modal-backdrop" onClick={onClose}>
      <div
        className="registration-modal-container glass-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="reg-modal-title"
      >
        {/* Modal Header */}
        <div className="registration-modal-header">
          <div className="reg-header-titles">
            <div className="badge-live">
              <span className="pulse-dot"></span>
              <span>{event.registrationStatus.badgeText}</span>
            </div>
            <h2 id="reg-modal-title" className="reg-modal-title">
              Team Registration · Stage 1
            </h2>
            <p className="reg-modal-sub">
              Submit your team roster and architectural brief for virtual shortlisting.
            </p>
          </div>
          <button
            className="reg-close-btn"
            onClick={onClose}
            aria-label="Close registration modal"
          >
            ✕
          </button>
        </div>

        {isSubmitted ? (
          /* Success Screen */
          <div className="registration-success-view">
            <div className="success-icon-wrap">
              <Icon name="check-circle" size={44} color="#10b981" />
            </div>
            <h3 className="success-title">Application Submitted Successfully</h3>
            <p className="success-message">
              Thank you, <strong>{formData.teamName}</strong>. Your Stage 1 hackathon application has been registered into the evaluation portal.
            </p>
            
            <div className="success-ref-box">
              <span className="ref-label">Registration Reference Code</span>
              <div className="ref-code-row">
                <span className="ref-code">{submissionId}</span>
                <button
                  type="button"
                  className="copy-ref-btn"
                  onClick={handleCopyCode}
                  title="Copy Reference Code"
                >
                  <Icon name="file-text" size={16} color="currentColor" />
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <p className="success-note">
              An acknowledgment dispatch will be sent to <strong>{formData.leadEmail}</strong>. Shortlisted teams for the 24-Hour Offline Finale will be notified via email and college liaison announcements.
            </p>
            <button
              className="btn btn-primary"
              onClick={handleResetAndClose}
            >
              <span>Return to Overview</span>
              <Icon name="arrow-right" size={14} color="#ffffff" />
            </button>
          </div>
        ) : (
          /* Elegant Form View */
          <form className="registration-form" onSubmit={handleSubmit}>
            {/* Step 1: Team & College Info */}
            <div className="form-card-section">
              <div className="form-section-header">
                <span className="form-step-num">01</span>
                <div>
                  <h4 className="form-section-title">Team &amp; College Profile</h4>
                  <p className="form-section-desc">Basic identifying credentials for your squad</p>
                </div>
              </div>
              
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="teamName" className="form-label">Team Name *</label>
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    required
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="e.g. NeuralKnights"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="college" className="form-label">College / Institution *</label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    required
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="e.g. FISAT, Angamaly"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Team Size (Max 4 Members) *</label>
                <div className="team-size-selector">
                  {['2', '3', '4'].map((size) => (
                    <button
                      type="button"
                      key={size}
                      className={`size-btn ${formData.teamSize === size ? 'size-btn-active' : ''}`}
                      onClick={() => setFormData({ ...formData, teamSize: size })}
                    >
                      <span>{size} Members</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Team Leader Contact */}
            <div className="form-card-section">
              <div className="form-section-header">
                <span className="form-step-num">02</span>
                <div>
                  <h4 className="form-section-title">Team Leader (Primary Contact)</h4>
                  <p className="form-section-desc">Direct liaison for stage 1 notifications and mentor allocations</p>
                </div>
              </div>
              
              <div className="form-grid-3">
                <div className="form-group">
                  <label htmlFor="leadName" className="form-label">Leader Full Name *</label>
                  <input
                    type="text"
                    id="leadName"
                    name="leadName"
                    required
                    value={formData.leadName}
                    onChange={handleChange}
                    placeholder="e.g. Alex Mathews"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="leadEmail" className="form-label">Leader Email *</label>
                  <input
                    type="email"
                    id="leadEmail"
                    name="leadEmail"
                    required
                    value={formData.leadEmail}
                    onChange={handleChange}
                    placeholder="leader@college.edu"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="leadPhone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="leadPhone"
                    name="leadPhone"
                    required
                    value={formData.leadPhone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Additional Team Members */}
            <div className="form-card-section">
              <div className="form-section-header">
                <span className="form-step-num">03</span>
                <div>
                  <h4 className="form-section-title">Additional Team Members</h4>
                  <p className="form-section-desc">Names and emails for member credentials</p>
                </div>
              </div>
              
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="member2Name" className="form-label">Member 2 Name *</label>
                  <input
                    type="text"
                    id="member2Name"
                    name="member2Name"
                    required
                    value={formData.member2Name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="member2Email" className="form-label">Member 2 Email *</label>
                  <input
                    type="email"
                    id="member2Email"
                    name="member2Email"
                    required
                    value={formData.member2Email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="form-input"
                  />
                </div>
              </div>

              {parseInt(formData.teamSize) >= 3 && (
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="member3Name" className="form-label">Member 3 Name *</label>
                    <input
                      type="text"
                      id="member3Name"
                      name="member3Name"
                      required
                      value={formData.member3Name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="member3Email" className="form-label">Member 3 Email *</label>
                    <input
                      type="email"
                      id="member3Email"
                      name="member3Email"
                      required
                      value={formData.member3Email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="form-input"
                    />
                  </div>
                </div>
              )}

              {parseInt(formData.teamSize) >= 4 && (
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="member4Name" className="form-label">Member 4 Name *</label>
                    <input
                      type="text"
                      id="member4Name"
                      name="member4Name"
                      required
                      value={formData.member4Name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="member4Email" className="form-label">Member 4 Email *</label>
                    <input
                      type="email"
                      id="member4Email"
                      name="member4Email"
                      required
                      value={formData.member4Email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="form-input"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Step 4: Theme Track & Technical Brief */}
            <div className="form-card-section">
              <div className="form-section-header">
                <span className="form-step-num">04</span>
                <div>
                  <h4 className="form-section-title">Track Selection &amp; Proposal Brief</h4>
                  <p className="form-section-desc">Outline your architectural approach and targeted impact</p>
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Choose AI Innovation Track *</label>
                <div className="theme-pills-selector">
                  {themes.map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      className={`theme-track-select-card ${formData.themeId === t.id ? 'active-track' : ''}`}
                      onClick={() => setFormData({ ...formData, themeId: t.id })}
                    >
                      <div className="track-select-top">
                        <span className="track-select-code">{t.code}</span>
                        <span className="track-select-tag">{t.tag}</span>
                      </div>
                      <div className="track-select-title">{t.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="problemStatement" className="form-label">Problem Statement Summary *</label>
                <textarea
                  id="problemStatement"
                  name="problemStatement"
                  rows="3"
                  required
                  value={formData.problemStatement}
                  onChange={handleChange}
                  placeholder="Clearly describe the specific problem or bottleneck your team is addressing..."
                  className="form-textarea"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="proposedSolution" className="form-label">Proposed AI / Signal Processing Solution *</label>
                <textarea
                  id="proposedSolution"
                  name="proposedSolution"
                  rows="3"
                  required
                  value={formData.proposedSolution}
                  onChange={handleChange}
                  placeholder="Outline your proposed architectural approach, models, algorithms, or hardware interfaces..."
                  className="form-textarea"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="techApproach" className="form-label">Technical Stack &amp; Tools *</label>
                <input
                  type="text"
                  id="techApproach"
                  name="techApproach"
                  required
                  value={formData.techApproach}
                  onChange={handleChange}
                  placeholder="e.g. PyTorch, FastAPI, ESP32, YOLOv8, TensorRT, Flutter"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="videoLink" className="form-label">Pitch / Proof-of-Concept Video Link (Optional)</label>
                <input
                  type="url"
                  id="videoLink"
                  name="videoLink"
                  value={formData.videoLink}
                  onChange={handleChange}
                  placeholder="YouTube / Google Drive link"
                  className="form-input"
                />
              </div>
            </div>

            {/* Step 5: Agreement & Submit */}
            <div className="form-consent-block">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreement"
                  required
                  checked={formData.agreement}
                  onChange={handleChange}
                  className="checkbox-input"
                />
                <span>
                  I declare that all submitted details are authentic, original, and that our team agrees to abide by the official rules of gIGNITE 2026 organized by Gadgeon &amp; IEEE SPS Kerala Chapter.
                </span>
              </label>
            </div>

            <div className="form-actions-row">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary submit-app-btn"
                disabled={loading}
              >
                <span>{loading ? 'Submitting Application...' : 'Submit Stage 1 Application'}</span>
                <Icon name="arrow-right" size={16} color="#ffffff" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
