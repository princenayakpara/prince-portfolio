import { useEffect } from 'react';

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
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
            &#10005;
          </button>
        </div>
        <div className="resume-viewer">
          <iframe
            src="/certificates/resume.pdf#toolbar=0"
            className="resume-iframe"
            title="Prince Nayakpara Resume"
          />
        </div>
      </div>
    </div>
  );
}
