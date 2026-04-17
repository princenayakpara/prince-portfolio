import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './extra.css';

const EMAIL = 'prince.nayakpara.cg@gmail.com';

export function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = () => {
    void (async () => {
      if (!firstName.trim() || !replyTo.trim() || !message.trim()) {
        window.alert('Please fill in your name, email, and message.');
        return;
      }

      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!publicKey || !serviceId || !templateId) {
        window.alert(
          `Email form is not configured. Reach me directly at ${EMAIL} — add VITE_EMAILJS_* keys to .env.local.`,
        );
        return;
      }

      setSending(true);
      try {
        emailjs.init(publicKey);
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: `${firstName} ${lastName}`.trim(),
            reply_to: replyTo,
            project_type: projectType || 'Not specified',
            message,
            to_name: 'Prince Nayakpara',
          },
          publicKey,
        );
        setSuccess(true);
      } catch {
        window.alert(`Something went wrong. Please email me directly at ${EMAIL}`);
      } finally {
        setSending(false);
      }
    })();
  };

  return (
    <main>
      <div className="section-inner">
        <div className="contact-layout">
          <div className="contact-info">
            <p className="section-eyebrow">GET IN TOUCH</p>
            <h1>
              Let&apos;s build something <em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>great</em>{' '}
              together
            </h1>
            <p>
              I&apos;m available for full-time roles and freelance projects. Whether you have a project in mind or just
              want to say hello — my inbox is always open.
            </p>
            <p>I typically respond within 24 hours. For urgent matters, reach out directly via email.</p>
            <div className="contact-detail">
              <div className="contact-row">
                <span>Email</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="contact-row">
                <span>Portfolio</span>
                <a href="https://princenayakpara-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                  princenayakpara-portfolio.vercel.app
                </a>
              </div>
              <div className="contact-row">
                <span>X</span>
                <a href="https://x.com/Prince1252254" target="_blank" rel="noopener noreferrer">
                  @Prince1252254
                </a>
              </div>
              <div className="contact-row">
                <span>GitHub</span>
                <a href="https://github.com/princenayakpara" target="_blank" rel="noopener noreferrer">
                  github.com/princenayakpara
                </a>
              </div>
              <div className="contact-row">
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/prince-nayakpara-7846b337b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prince Nayakpara
                </a>
              </div>
              <div className="contact-row">
                <span>LeetCode</span>
                <a href="https://leetcode.com/u/Prince27507/" target="_blank" rel="noopener noreferrer">
                  leetcode.com/u/Prince27507
                </a>
              </div>
              <div className="contact-row">
                <span>YouTube</span>
                <a href="https://www.youtube.com/@princenayakpara" target="_blank" rel="noopener noreferrer">
                  @princenayakpara
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="contact-form">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, marginBottom: 22, letterSpacing: '-0.3px' }}>
                Send a message
              </h3>
              <div className={`form-success ${success ? 'show' : ''}`}>
                Message sent! I&apos;ll get back to you within 24 hours.
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="from_firstname">First name</label>
                  <input
                    id="from_firstname"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="from_lastname">Last name</label>
                  <input
                    id="from_lastname"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="reply_to">Email address</label>
                <input
                  id="reply_to"
                  type="email"
                  value={replyTo}
                  onChange={(e) => setReplyTo(e.target.value)}
                  placeholder="john@company.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="project_type">Project type</label>
                <select id="project_type" value={projectType} onChange={(e) => setProjectType(e.target.value)}>
                  <option value="">Select a type...</option>
                  <option>Full-time role</option>
                  <option>Freelance project</option>
                  <option>Consulting</option>
                  <option>Just saying hello</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, timeline, and budget..."
                />
              </div>
              <button type="button" className="submit-btn" disabled={sending} onClick={sendEmail}>
                {sending ? 'Sending...' : 'Send Message →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
