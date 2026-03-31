import { useState } from 'react';

const formStyles = `
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }
  .form-label {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.5rem;
  }
  .form-input,
  .form-textarea {
    padding: 0.75rem 1rem;
    border: 2px solid #e5e5e5;
    border-radius: var(--radius);
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-text);
    transition: all 0.3s ease;
  }
  .form-input:focus,
  .form-textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(217, 117, 83, 0.1);
  }
  .form-textarea {
    resize: vertical;
    min-height: 150px;
  }
  .submit-button {
    background: var(--color-primary);
    color: white;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: var(--radius);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .submit-button:hover:not(:disabled) {
    background: var(--color-secondary);
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(217, 117, 83, 0.2);
  }
  .submit-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .status-message {
    text-align: center;
    padding: 1rem;
    border-radius: var(--radius);
    font-weight: 600;
  }
  .status-success {
    background: #d1fae5;
    color: #065f46;
  }
  .status-error {
    background: #fee2e2;
    color: #991b1b;
  }
`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{formStyles}</style>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-textarea"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="submit-button"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && (
          <p className="status-message status-success">
            ✓ Message sent successfully! We&apos;ll be in touch soon.
          </p>
        )}
        {status === 'error' && (
          <p className="status-message status-error">
            ✕ {errorMessage}
          </p>
        )}
      </form>
    </>
  );
}
