'use client';

import React from 'react';
import { useTheme, Theme } from '@/lib/theme-context';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, X, Github } from 'lucide-react';
import { useState } from 'react';

const THEMES: { id: Theme; name: string; colors: string[] }[] = [
  { id: 'light', name: 'Paper', colors: ['#ffffff', '#000000'] },
  { id: 'aquatic', name: 'Aquatic', colors: ['#121212', '#66d9ef'] },
  { id: 'desert', name: 'Desert', colors: ['#fffaf0', '#d2b48c'] },
  { id: 'dusk', name: 'Dusk', colors: ['#2d3436', '#74b9ff'] },
  { id: 'night', name: 'Night Sky', colors: ['#000000', '#a29bfe'] },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-th-accent text-th-bg border-4 border-th-border shadow-[6px_6px_0px_var(--border-primary)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all flex items-center justify-center group"
      >
        <Palette className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-th-bg border-4 border-th-border p-8 md:p-12 shadow-[12px_12px_0px_var(--border-primary)]"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-th-bg-secondary border-2 border-transparent hover:border-th-border transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Interface Config</h2>
                  <p className="font-mono text-xs uppercase font-black text-th-text-secondary">Select vision protocol for optimized reading</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setIsOpen(false);
                      }}
                      className={`
                        p-4 border-2 border-th-border flex flex-col gap-4 text-left transition-all group
                        ${theme === t.id ? 'bg-th-accent text-th-bg shadow-[6px_6px_0px_var(--border-primary)]' : 'bg-th-bg-secondary hover:border-th-accent hover:translate-y-1'}
                      `}
                    >
                      <div className="flex items-center justify-between">
                         <span className="font-black uppercase text-xs tracking-widest">{t.name}</span>
                         <div className="flex gap-1">
                           {t.colors.map((c, i) => (
                             <div key={i} className="w-3 h-3 border border-th-border/20" style={{ backgroundColor: c }} />
                           ))}
                         </div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1.5 w-full bg-current opacity-20" />
                        <div className="h-1.5 w-3/4 bg-current opacity-20" />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="pt-8 border-t-2 border-th-border/10 flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-th-bg-secondary border-2 border-th-border flex items-center justify-center font-mono text-[10px] font-black">
                        MOD
                     </div>
                     <p className="text-[10px] font-mono uppercase font-black leading-tight text-th-text-secondary">
                        Version 1.0.4<br />
                        Access Granted
                     </p>
                   </div>

                   <a 
                     href="https://github.com/ATS-001/FOCFHWTWD" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-3 bg-th-text text-th-bg px-6 py-3 font-black uppercase text-sm hover:-translate-y-1 transition-transform group"
                   >
                     <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                     Repository Source
                   </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
