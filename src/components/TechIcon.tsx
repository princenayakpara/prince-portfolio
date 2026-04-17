type TechIconProps = { type: string; className?: string };

export function TechIcon({ type, className = '' }: TechIconProps) {
  const cn = `svg-icon ${className}`;
  switch (type.toLowerCase()) {
    case 'react':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"/></svg>;
    case 'next.js':
    case 'vercel':
      return <svg className={cn} style={{ fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M12 2L22 20H2L12 2Z"/></svg>;
    case 'typescript':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#3178C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M9 9h6"/><path d="M12 9v8"/><path d="M20 20l-4-4"/></svg>;
    case 'tailwind css':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14c2-2 4-2 6 0s4 2 6 0c2-2 4-2 6 0"/></svg>;
    case 'framer motion':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#FF0088" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 12h10v10L22 12H12Z"/></svg>;
    case 'node.js':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#339933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8 22 16 12 22 2 16 2 8 12 2"/></svg>;
    case 'express':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 12h20"/></svg>;
    case 'mongodb':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#47A248" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20c1.5-1.5 3-4 3-8s-1.5-6-3-6-3 2-3 6 1.5 6.5 3 8z"/></svg>;
    case 'postgresql':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#4169E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>;
    case 'rest apis':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 10V7a4 4 0 118 0v3"/><rect x="4" y="10" width="16" height="12" rx="2"/></svg>;
    case 'git':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#F05032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 15v-2a3 3 0 00-3-3H9"/><path d="M6 9v6"/></svg>;
    case 'github':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>;
    case 'docker':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#2496ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12.5c-1.5 0-3-.5-4.5-1.5-1.5 1-3 1.5-4.5 1.5-1.5 0-3-.5-4.5-1.5-1.5 1-3 1.5-4.5 1.5v3c0 2 3.5 3 9 3s9-1 9-3v-3z"/><path d="M12 9h3v3h-3zM8 9h3v3H8zM12 5h3v3h-3zM16 9h3v3h-3z"/></svg>;
    case 'figma':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#F24E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5a3 3 0 013-3h8a3 3 0 013 3v4a3 3 0 01-3 3H8a3 3 0 01-3-3V5z"/><path d="M5 12a3 3 0 013-3h8a3 3 0 013 3v4a3 3 0 01-3 3H8a3 3 0 01-3-3v-4z"/><circle cx="8" cy="19" r="3"/></svg>;
    case 'zustand':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v7"/><path d="M12 15v7"/><path d="M4.93 4.93l4.95 4.95"/><path d="M14.12 14.12l4.95 4.95"/><path d="M2 12h7"/><path d="M15 12h7"/></svg>;
    case 'zod':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>;
    case 'html5':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#E34F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2l1.6 18L12 22l6.4-2L20 2H4z"/><path d="M16 6H6l.4 5h8.6l-.3 3.5L12 15.5l-2.7-1-.3-2.5h-3l.5 6 5.5 1.5 5.5-1.5.8-8H7l-.4-4h9.8L16 6z"/></svg>;
    case 'redis':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#DC382D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l8 4 8-4"/><path d="M12 12v9"/><path d="M4 16l8 4 8-4"/><path d="M12 4v4"/></svg>;
    case 'firebase':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#FFCA28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.7 13.5l3-10c.1-.4.8-.5 1-.1l2.8 5c.1.2.5.2.7.1l.6-.4c.2-.2.5 0 .6.2l3 5.4"/><path d="M15.4 13.7L18.8 4c.1-.4.8-.4 1 0L24 16c0 .2-.1.4-.3.5L12.5 23c-.3.2-.8.2-1 0L.3 16.5c-.2-.1-.3-.3-.3-.5.1 0 3.7-2.5 3.7-2.5z"/></svg>;
    case 'sanity cms':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#F03E2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 15h6"/></svg>;
    case 'turborepo':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 12 12 22 2 12 12 2"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>;
    case 'postman':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#FF6C37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>;
    case 'linux':
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="#FCC624" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>;
    default:
      return <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>;
  }
}
