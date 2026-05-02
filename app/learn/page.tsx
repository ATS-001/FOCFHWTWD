'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, ChevronRight, Menu as MenuIcon, X } from 'lucide-react';
import { MODULES_DATA } from '@/lib/modules-data';

export default function LearnPage() {
  const [activeModule, setActiveModule] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const currentMod = MODULES_DATA.find(m => m.id === activeModule);

  return (
    <div className="min-h-screen bg-th-bg relative">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Mobile Header Navigation */}
        <div className="md:hidden flex items-center justify-between p-6 bg-th-bg border-b-2 border-th-border sticky top-0 z-50">
          <span className="font-black italic uppercase tracking-tighter text-th-text">Terminal</span>
          <button 
            onClick={toggleMenu} 
            className="p-3 bg-th-bg-secondary text-th-text border-2 border-th-border hover:bg-th-text hover:text-th-bg transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>

        <aside className={`
          fixed inset-y-0 left-0 z-40 md:relative md:z-auto
          w-[80vw] sm:w-[50vw] md:w-80 border-r-2 border-th-border p-8 bg-th-bg-secondary flex flex-col h-screen md:sticky md:top-0
          transition-transform duration-300 ease-in-out shadow-2xl md:shadow-none
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <Link href="/" className="inline-flex items-center gap-3 px-6 py-3 border-2 border-th-border font-black uppercase tracking-widest text-xs hover:bg-th-text hover:text-th-bg transition-all shadow-[4px_4px_0px_var(--border-primary)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none bg-th-bg text-th-text">
              <ArrowLeft className="w-4 h-4" />
              Terminal
            </Link>
            <button onClick={toggleMenu} className="md:hidden text-th-text mt-6 self-start p-2 border-2 border-transparent hover:border-th-border relative -left-2">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <h2 className="text-xl font-black uppercase tracking-tight mb-8 text-th-text italic">Core Modules</h2>
          
          <div className="space-y-2">
            {MODULES_DATA.map((mod) => (
              <button
                key={mod.id}
                onClick={() => {
                  setActiveModule(mod.id);
                  if (window.innerWidth < 768) setIsMenuOpen(false);
                }}
                className={`w-full flex items-center gap-4 p-4 text-left border-2 transition-all group ${
                  activeModule === mod.id 
                    ? 'bg-th-text text-th-bg border-th-border font-black' 
                    : 'text-th-text-secondary border-transparent hover:border-th-border hover:bg-th-bg'
                }`}
              >
                <div className="flex-shrink-0"><mod.icon className="w-5 h-5" /></div>
                <span className="text-sm font-mono tracking-tight uppercase">Segment {mod.id}</span>
              </button>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t-2 border-th-border/10">
            <p className="text-[10px] font-mono uppercase text-th-text-secondary font-black opacity-50">Authorized Curriculum</p>
            <p className="text-xs font-black font-mono text-th-text uppercase tracking-tighter">KTU 2024 Foundations</p>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 pb-40 md:pb-12 md:p-12 lg:p-20 overflow-y-auto w-full md:w-auto">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-16 border-b-4 border-th-border pb-12">
              <span className="text-[10px] font-mono font-black bg-th-text text-th-bg px-2 py-1 uppercase tracking-widest">
                Data Stream Segment {activeModule}
              </span>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mt-6 uppercase leading-[0.8] text-th-text italic">
                {currentMod?.title}
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {currentMod?.topics.map((topic, index) => (
                <Link 
                  key={topic.name}
                  href={`/learn/${activeModule}/${index}`}
                  className="group block border-2 border-th-border/10 p-8 hover:border-th-border transition-all hover:bg-th-bg-secondary bg-th-card shadow-[6px_6px_0px_transparent] hover:shadow-[10px_10px_0px_var(--border-primary)]"
                >
                  <div className="flex items-start justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                      <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-snug group-hover:underline underline-offset-8 decoration-4 decoration-th-accent text-th-text pb-1">
                        {topic.name}
                      </h3>
                      <p className="text-th-text-secondary font-medium leading-relaxed font-sans line-clamp-2 text-lg lg:text-xl">
                        {topic.summary}
                      </p>
                    </div>
                    <div className="p-4 border-2 border-th-border group-hover:bg-th-text group-hover:text-th-bg transition-all transform group-hover:rotate-12 translate-y-2">
                      <ChevronRight className="w-8 h-8" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-32 pt-16 border-t-8 border-th-border flex justify-between items-center bg-transparent">
              <button 
                disabled={activeModule === 1}
                onClick={() => setActiveModule(prev => prev - 1)}
                className="group flex flex-col items-start gap-2 disabled:opacity-10 text-left"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono text-th-text-secondary font-black uppercase tracking-widest">
                  <ArrowLeft className="w-3 h-3" />
                  Previous Sector
                </div>
                {activeModule > 1 && (
                  <span className="font-black uppercase tracking-tighter hover:underline decoration-th-accent decoration-4 text-xl md:text-3xl underline-offset-8 text-th-text leading-snug pb-1">
                    {MODULES_DATA.find(m => m.id === activeModule - 1)?.title}
                  </span>
                )}
              </button>
              <button 
                disabled={activeModule === MODULES_DATA.length}
                onClick={() => setActiveModule(prev => prev + 1)}
                className="group flex flex-col items-end gap-2 disabled:opacity-10 text-right"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono text-th-text-secondary font-black uppercase tracking-widest font-black">
                  Next Sector
                  <ChevronRight className="w-3 h-3" />
                </div>
                {activeModule < MODULES_DATA.length && (
                  <span className="font-black uppercase tracking-tighter hover:underline decoration-th-accent decoration-4 text-xl md:text-3xl underline-offset-8 text-th-text leading-snug pb-1">
                    {MODULES_DATA.find(m => m.id === activeModule + 1)?.title}
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
