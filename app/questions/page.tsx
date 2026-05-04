'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { PAPERS_DATA } from '@/lib/papers-data';

export default function QuestionsPage() {
  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-24 bg-th-bg">
      <Link href="/" className="inline-flex items-center gap-2 mb-12 font-black uppercase tracking-widest text-sm hover:text-th-accent transition-colors">
        <ArrowLeft className="w-4 h-4" /> Home
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 border-b-4 border-th-border pb-8"
      >
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-th-text italic">
          Question Papers
        </h1>
        <p className="mt-4 text-xl font-bold font-mono text-th-text-secondary uppercase tracking-widest">
          Expected Q&A / KTU Format
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {PAPERS_DATA.map((paper, idx) => {
          // Calculate total part B questions (as each module has 2 choices)
          const partBCount = paper.partBChoices.length * 2;
          
          return (
            <motion.div
              key={paper.paperId}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <Link href={`/questions/${paper.paperId}`} className="block h-full group p-8 bg-th-bg border-2 border-th-border hover:bg-th-text transition-all hover:shadow-[8px_8px_0px_var(--border-primary)] hover:-translate-y-1">
                <div className="font-mono text-th-text-secondary group-hover:text-th-bg mb-4 flex items-center justify-between">
                  <span className="font-black">QP/0{idx+1}</span>
                  <div className="text-th-accent"><FileText className="w-8 h-8" /></div>
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tighter text-th-text group-hover:text-th-bg leading-tight">
                  {paper.paperTitle}
                </h2>
                <div className="mt-6 flex flex-wrap gap-4">
                  <span className="bg-th-bg-secondary group-hover:bg-th-bg px-2 py-1 text-xs font-bold uppercase tracking-widest text-th-text">
                    Part A: {paper.partA.length}
                  </span>
                  <span className="bg-th-bg-secondary group-hover:bg-th-bg px-2 py-1 text-xs font-bold uppercase tracking-widest text-th-text">
                    Part B: {partBCount}
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
