'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, FileText, Calculator, Code } from 'lucide-react';

export default function LearnPage() {
  const buttons = [
    {
      id: 'btn-syllabus',
      label: 'Syllabus',
      icon: <BookOpen className="w-6 h-6" />,
      href: '/syllabus',
      description: 'KTU 2024 Foundations'
    },
    {
      id: 'btn-number-systems',
      label: 'Number Systems',
      icon: <Calculator className="w-6 h-6" />,
      href: '/number-systems',
      description: 'Conversions & Binary Math'
    },
    {
      id: 'btn-playground',
      label: 'Web Playground',
      icon: <Code className="w-6 h-6" />,
      href: '/playground',
      description: 'Test HTML/CSS/JS live'
    },
    {
      id: 'btn-questions',
      label: 'Question Papers',
      icon: <FileText className="w-6 h-6" />,
      href: '/questions',
      description: 'Expected Q&A for KTU Pattern'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center p-6 md:p-12 lg:p-24 bg-th-bg relative pb-32">
      {/* Header */}
      <div className="w-full max-w-4xl mb-12">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 font-black uppercase tracking-widest text-sm hover:text-th-accent transition-colors text-th-text">
          <ArrowLeft className="w-4 h-4" /> Back to Terminal
        </Link>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left w-full border-b-4 border-th-border pb-8"
        >
          <span className="font-mono text-sm tracking-[0.3em] uppercase text-th-accent font-black">Curriculum Directory</span>
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter text-th-text mt-2 uppercase leading-tight">
            Start Learning
          </h1>
        </motion.div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {buttons.map((btn, idx) => (
          <motion.div
            key={btn.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link
              href={btn.href}
              className="group flex flex-col items-start gap-4 p-8 bg-th-card border-2 border-th-border/20 hover:border-th-border transition-all hover:shadow-[8px_8px_0px_var(--border-primary)] rounded-sm h-full"
            >
              <div className="p-3 bg-th-bg-secondary border border-th-border/10 rounded-sm group-hover:bg-th-text group-hover:text-th-bg transition-colors shadow-sm text-th-text">
                {btn.icon}
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-2 text-th-text group-hover:text-th-accent transition-colors">
                  {btn.label}
                </h2>
                <p className="text-sm font-mono text-th-text-secondary font-medium tracking-wide">
                  {btn.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
