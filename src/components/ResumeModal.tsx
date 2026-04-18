import { useEffect } from 'react';
import { ResumeContent } from './ResumeContent';

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      style={{ display: 'flex' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
        <div className="modal-header">
          <span className="modal-title" id="resume-modal-title">
            Resume — Prince Nayakpara
          </span>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a
              href="/certificates/resume.pdf"
              download
              className="proj-action-btn"
              style={{ padding: '6px 12px', fontSize: '11px', background: 'var(--bg3)' }}
            >
              Download PDF ↓
            </a>
            <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
              &#10005;
            </button>
          </div>
        </div>
        <div className="resume-viewer" style={{ overflowY: 'auto', background: '#fff' }}>
          <ResumeContent />
        </div>
      </div>
    </div>
  );
}

