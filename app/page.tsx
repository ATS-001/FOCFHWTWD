'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ExternalLink, BookOpen, User, Github, Mail } from 'lucide-react';

export default function Page() {
  const buttons = [
    {
      id: 'btn-hexnic',
      label: 'HexnicAI',
      icon: <ExternalLink className="w-6 h-6" />,
      href: 'https://hexnicai.vercel.app/',
      description: 'Visit the main AI hub',
      external: true
    },
    {
      id: 'btn-learn',
      label: 'Start Learning',
      icon: <BookOpen className="w-6 h-6" />,
      href: '/learn',
      description: 'KTU 2024 Syllabus Modules'
    },
    {
      id: 'btn-about',
      label: 'About Me',
      icon: <User className="w-6 h-6" />,
      href: '/about',
      description: 'Meet the creator'
    },
    {
      id: 'btn-github',
      label: 'GitHub Repo',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/ATS-001/FOCFHWTWD',
      description: 'View source code',
      external: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 md:p-12 lg:p-24 bg-th-bg">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-8xl font-black italic tracking-tighter text-th-text mb-4 uppercase leading-[0.8] underline decoration-th-accent decoration-8 underline-offset-8">
          FOCFHWTWD
        </h1>
        <p className="text-lg text-th-text-secondary font-black font-mono border-y-2 border-th-border/10 py-6 mb-16 uppercase tracking-[0.2em] bg-th-bg-secondary/50">
          From HardWare To WebDesign
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {buttons.map((btn, idx) => {
          const isGitHub = btn.id === 'btn-github';
          const href = isGitHub ? 'https://github.com/ATS-001/FOCFHWTWD' : btn.href;

          return (
            <motion.div
              key={btn.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              {btn.external ? (
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-8 bg-th-card border-2 border-th-border/10 hover:border-th-border transition-all hover:shadow-[8px_8px_0px_var(--border-primary)] rounded-none h-full"
                >
                  <div className="p-3 bg-th-bg-secondary border border-th-border/5 rounded-lg group-hover:bg-th-text group-hover:text-th-bg transition-colors">
                    {btn.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-black uppercase italic tracking-tighter mb-1">{btn.label}</h2>
                    <p className="text-sm text-th-text-secondary font-medium">{btn.description}</p>
                  </div>
                </a>
              ) : (
                <Link
                  href={btn.href}
                  className="group flex items-start gap-4 p-8 bg-th-card border-2 border-th-border/10 hover:border-th-border transition-all hover:shadow-[8px_8px_0px_var(--border-primary)] rounded-none h-full"
                >
                  <div className="p-3 bg-th-bg-secondary border border-th-border/5 rounded-lg group-hover:bg-th-text group-hover:text-th-bg transition-colors">
                    {btn.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-black uppercase italic tracking-tighter mb-1">{btn.label}</h2>
                    <p className="text-sm text-th-text-secondary font-medium">{btn.description}</p>
                  </div>
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="mt-24 w-full max-w-4xl border-t-4 border-th-border pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-th-text-secondary font-black">Secure Communications</h3>
            <a 
              href="mailto:aaronsooraj001@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-th-text text-th-bg hover:bg-th-accent hover:text-th-bg transition-all uppercase text-sm font-black tracking-widest shadow-[6px_6px_0px_var(--border-primary)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <Mail className="w-5 h-5" />
              Initialize Contact
            </a>
          </div>
          <div className="text-right space-y-2 font-mono text-[10px] md:text-xs text-th-text-secondary uppercase tracking-widest leading-loose">
            <p>&copy; 2026 HexnicAI || Protocol ATS_PDZ</p>
            <p className="opacity-50">NODE: SINCE 2023 | ATS-PDZ</p>
            <p className="font-black text-th-text bg-th-text-secondary/10 px-2 inline-block">SECURED ACCESS ONLY</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
