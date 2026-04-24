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
    <div className="min-h-screen bg-white relative">
      {/* Mobile Toggle Button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 bg-black text-white rounded-full shadow-lg border-2 border-white flex items-center justify-center transition-transform active:scale-90"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      {/* Sidebar - Collapsible on Mobile */}
      <div className="flex flex-col md:flex-row min-h-screen">
        <aside className={`
          fixed inset-0 z-40 md:relative md:z-auto
          w-full md:w-80 border-r border-gray-200 p-8 bg-gray-50 flex flex-col h-screen md:sticky md:top-0
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="flex items-center justify-between mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-tighter hover:underline underline-offset-4">
              <ArrowLeft className="w-4 h-4" />
              Dashboard
            </Link>
            <button onClick={toggleMenu} className="md:hidden">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <h2 className="text-xl font-bold uppercase tracking-tight mb-8">Modules</h2>
          
          <div className="space-y-2">
            {MODULES_DATA.map((mod) => (
              <button
                key={mod.id}
                onClick={() => {
                  setActiveModule(mod.id);
                  if (window.innerWidth < 768) setIsMenuOpen(false);
                }}
                className={`w-full flex items-center gap-4 p-4 text-left transition-all ${
                  activeModule === mod.id 
                    ? 'bg-black text-white font-bold' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <div className="flex-shrink-0"><mod.icon className="w-5 h-5" /></div>
                <span className="text-sm font-mono tracking-tight uppercase">Unit {mod.id}</span>
              </button>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-gray-200">
            <p className="text-[10px] font-mono uppercase text-gray-400">Course Syllabus</p>
            <p className="text-xs font-bold font-mono text-black uppercase">Foundations Of Computing</p>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-12 lg:p-20 overflow-y-auto">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-16 border-b border-black pb-8">
              <span className="text-[10px] font-mono font-black bg-black text-white px-2 py-1 uppercase">
                Academic Unit {activeModule}
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 uppercase leading-none text-gray-900">
                {currentMod?.title}
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {currentMod?.topics.map((topic, index) => (
                <Link 
                  key={topic.name}
                  href={`/learn/${activeModule}/${index}`}
                  className="group block border-2 border-gray-100 p-8 hover:border-black transition-all hover:bg-gray-50 bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-4 max-w-2xl">
                      <h3 className="text-2xl font-black uppercase tracking-tight leading-tight group-hover:underline decoration-4 underline-offset-8 decoration-black">
                        {topic.name}
                      </h3>
                      <p className="text-gray-500 font-medium leading-relaxed font-sans italic line-clamp-2 text-lg">
                        {topic.summary}
                      </p>
                    </div>
                    <div className="p-3 border-2 border-black group-hover:bg-black group-hover:text-white transition-all transform group-hover:translate-x-1">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-32 pt-12 border-t-4 border-black flex justify-between items-center bg-white">
              <button 
                disabled={activeModule === 1}
                onClick={() => setActiveModule(prev => prev - 1)}
                className="group flex flex-col items-start gap-1 disabled:opacity-20"
              >
                <span className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-widest transition-colors">Previous Unit</span>
                {activeModule > 1 && (
                  <span className="font-black uppercase tracking-tighter hover:underline decoration-2 text-xl underline-offset-8">
                    {MODULES_DATA.find(m => m.id === activeModule - 1)?.title}
                  </span>
                )}
              </button>
              <button 
                disabled={activeModule === 4}
                onClick={() => setActiveModule(prev => prev + 1)}
                className="group flex flex-col items-end gap-1 disabled:opacity-20 text-right"
              >
                <span className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-widest">Next Unit</span>
                {activeModule < 4 && (
                  <span className="font-black uppercase tracking-tighter hover:underline decoration-2 text-xl underline-offset-8">
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
