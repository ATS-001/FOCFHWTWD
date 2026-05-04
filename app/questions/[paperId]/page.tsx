'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import { PAPERS_DATA, Question, QuestionPaper } from '@/lib/papers-data';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import React, { use, useEffect, useState } from 'react';

function QuestionCard({ question, idx, prefix = 'Q' }: { question: Question, idx?: number, prefix?: string }) {
  return (
    <div className="border-2 border-th-border bg-th-bg shadow-[4px_4px_0px_var(--border-primary)] mb-8 overflow-hidden">
      <div className="bg-th-bg-secondary p-4 sm:p-6 border-b-2 border-th-border relative">
        <div className="absolute top-4 right-4 bg-th-accent text-th-bg font-black text-xs px-2 py-1 uppercase tracking-widest flex flex-col items-end">
          <span>{question.marks} Marks</span>
        </div>
        <div className="pr-20">
          <h3 className="text-lg sm:text-xl font-black text-th-text leading-snug flex items-start">
            <span className="text-th-accent mr-3 font-mono shrink-0">{prefix}{idx !== undefined ? `${idx}.` : ''}</span>
            <span className="mt-[-2px]">{question.question}</span>
          </h3>
        </div>
      </div>
      <div className="p-4 sm:p-8 bg-th-bg
            prose prose-invert max-w-none
            prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-th-text
            prose-p:text-th-text-secondary prose-p:leading-relaxed prose-strong:text-th-text prose-strong:font-black
            prose-li:text-th-text-secondary prose-code:text-th-text prose-code:bg-th-bg-secondary prose-code:px-1 prose-code:rounded-sm
            prose-pre:bg-th-bg-secondary prose-pre:border-2 prose-pre:border-th-border prose-pre:rounded-none prose-pre:text-sm
            prose-blockquote:border-l-4 prose-blockquote:border-th-border prose-blockquote:font-medium prose-blockquote:text-th-text">
        <div className="font-mono text-[10px] text-th-text-secondary uppercase tracking-[0.3em] font-black border-b border-th-border/20 pb-2 mb-4">
          Answer:
        </div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{question.answer}</ReactMarkdown>
      </div>
    </div>
  );
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20, pointerEvents: isVisible ? 'auto' : 'none' }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 sm:p-4 bg-th-bg border-2 sm:border-4 border-th-border shadow-[4px_4px_0px_var(--border-primary)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--border-primary)] transition-all z-50 flex items-center justify-center group text-th-text hover:bg-th-text hover:text-th-bg"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
    </motion.button>
  );
}

export default function PaperQuestionsPage({ params }: { params: Promise<{ paperId: string }> }) {
  const resolvedParams = use(params);
  const { paperId } = resolvedParams;
  const paperData = PAPERS_DATA.find(p => p.paperId === paperId);

  if (!paperData) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-th-bg text-th-text">
        <h1 className="text-2xl font-black uppercase">Question Paper not found</h1>
      </div>
    );
  }

  let globalQuestionIdx = 1;

  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-24 bg-th-bg">
      <Link href="/questions" className="inline-flex items-center gap-2 mb-12 font-black uppercase tracking-widest text-sm hover:text-th-accent transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Papers
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 border-b-4 border-th-border pb-8"
      >
        <span className="font-mono text-sm tracking-[0.3em] uppercase text-th-accent font-black">KTU Examination Schema</span>
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-th-text italic mt-2">
          {paperData.paperTitle}
        </h1>
      </motion.div>

      <div className="w-full max-w-4xl mx-auto">
        {/* PART A */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-th-text bg-th-text px-4 py-2 text-th-bg inline-block">
              Part A
            </h2>
            <div className="flex flex-col">
              <span className="font-mono text-sm uppercase font-bold text-th-text-secondary tracking-widest">
                Answer ALL questions.
              </span>
              <span className="font-mono text-xs uppercase font-bold text-th-accent tracking-widest">
                Each question carries 3 marks.
              </span>
            </div>
            <div className="h-1 flex-1 bg-th-border hidden md:block"></div>
          </div>
          
          <div className="space-y-8">
            {paperData.partA.map((q) => {
              const currentIdx = globalQuestionIdx++;
              return <QuestionCard key={q.id} question={q} idx={currentIdx} />
            })}
          </div>
        </section>

        {/* PART B */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-th-text bg-th-text px-4 py-2 text-th-bg inline-block">
              Part B
            </h2>
            <div className="flex flex-col">
              <span className="font-mono text-sm uppercase font-bold text-th-text-secondary tracking-widest">
                Answer ANY ONE full question from each module.
              </span>
              <span className="font-mono text-xs uppercase font-bold text-th-accent tracking-widest">
                Each question carries 9 marks.
              </span>
            </div>
            <div className="h-1 flex-1 bg-th-border hidden lg:block"></div>
          </div>
          
          <div className="space-y-16">
            {paperData.partBChoices.map((moduleChoice) => (
              <div key={moduleChoice.moduleTitle} className="border-t-[6px] border-th-border pt-8 relative">
                 <div className="absolute -top-5 left-0 bg-th-bg pr-4">
                   <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-th-accent">
                     {moduleChoice.moduleTitle}
                   </h3>
                 </div>
                 
                 {/* Choice 1 */}
                 <div className="mb-8">
                    {moduleChoice.choice1.subQuestions.map((subQ, idx) => {
                      const letter = String.fromCharCode(97 + idx); // 'a', 'b', etc.
                      // Usually the question number increments per full question.
                      // For simplicity, let's keep track or just use standard numbers.
                      // Typically Part B is Q9 to Q16.
                      return <QuestionCard key={subQ.id} question={subQ} prefix={`Q${globalQuestionIdx}${letter}`} />;
                    })}
                 </div>
                 
                 <div className="flex items-center justify-center my-8">
                   <div className="h-[2px] flex-1 bg-th-border/30"></div>
                   <span className="mx-4 font-black uppercase tracking-widest text-th-text-secondary">OR</span>
                   <div className="h-[2px] flex-1 bg-th-border/30"></div>
                 </div>

                 {/* Increment Q number for choice box */}
                 {(() => { globalQuestionIdx++; return null; })()}

                 {/* Choice 2 */}
                 <div className="mb-8">
                    {moduleChoice.choice2.subQuestions.map((subQ, idx) => {
                      const letter = String.fromCharCode(97 + idx);
                      return <QuestionCard key={subQ.id} question={subQ} prefix={`Q${globalQuestionIdx}${letter}`} />;
                    })}
                 </div>
                 
                 {/* Increment Q number for next module */}
                 {(() => { globalQuestionIdx++; return null; })()}

              </div>
            ))}
          </div>
        </section>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
