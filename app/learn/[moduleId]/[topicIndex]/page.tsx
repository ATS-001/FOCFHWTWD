'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight, Layout, Globe, Cpu, Binary } from 'lucide-react';
import { MODULES_DATA, VisualType } from '@/lib/modules-data';
import ReactMarkdown from 'react-markdown';
import React from 'react';

function TechnicalVisual({ type, data }: { type: VisualType; data: any }) {
  if (type === 'none' || !type) return null;

  return (
    <div className="bg-th-bg-secondary border-2 border-th-border p-4 md:p-8 my-8 overflow-hidden rounded-sm">
      {type === 'pyramid' && (
        <div className="flex flex-col items-center">
          {data.map((item: any, idx: number) => (
            <div 
              key={idx} 
              className={`text-th-bg text-[10px] md:text-xs font-mono font-black flex items-center justify-center border-2 border-th-border mb-1 px-4`}
              style={{ 
                width: `${100 - (idx * 12)}%`,
                height: '48px',
                backgroundColor: 'var(--text-primary)'
              }}
            >
              {item.label}
            </div>
          ))}
          <p className="text-[10px] font-mono mt-4 uppercase text-th-text-secondary font-black">System Storage Hierarchy</p>
        </div>
      )}

      {type === 'flow' && (
        <div className="flex flex-wrap items-center justify-center gap-4 py-4">
          {data.map((step: string, idx: number) => (
            <React.Fragment key={idx}>
              <div className="p-4 border-2 border-th-border bg-th-card font-mono text-xs font-black uppercase shadow-[4px_4px_0px_var(--border-primary)] rounded-sm text-th-text">
                {step}
              </div>
              {idx < data.length - 1 && <ChevronRight className="w-6 h-6 text-th-border/20" />}
            </React.Fragment>
          ))}
        </div>
      )}

      {type === 'grid-disks' && (
        <div className="space-y-6 py-4">
           <p className="text-center font-mono text-[10px] font-black uppercase underline underline-offset-4 decoration-2 text-th-text-secondary">{data.title}</p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
             {data.layout.split('|').map((item: string, idx: number) => (
               <div key={idx} className="aspect-square border-2 border-th-border flex flex-col items-center justify-center gap-3 bg-th-card shadow-[6px_6px_0px_var(--border-primary)] group rounded-sm">
                 <div className="w-16 h-16 rounded-full border-4 border-dashed border-th-border animate-[spin_12s_linear_infinite]" />
                 <span className="font-mono text-[10px] font-black text-th-text">{item.trim()}</span>
               </div>
             ))}
           </div>
        </div>
      )}

      {type === 'stack' && (
        <div className="flex flex-col gap-2 max-w-md mx-auto py-4">
          {data.map((item: string, idx: number) => (
            <div key={idx} className="p-4 border-2 border-th-border bg-th-card flex items-center justify-center font-mono text-xs font-black uppercase shadow-[4px_4px_0px_var(--border-primary)] last:bg-th-text last:text-th-bg transition-transform hover:-translate-y-1 rounded-sm text-th-text">
              {item}
            </div>
          ))}
        </div>
      )}

      {type === 'topologies' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
          {data.map((top: any, idx: number) => (
            <div key={idx} className="p-6 border-2 border-th-border flex flex-col items-center gap-4 bg-th-card shadow-[4px_4px_0px_var(--border-primary)] rounded-sm">
               <div className="p-3 bg-th-bg-secondary border border-th-border/10 rounded-sm">
                 <Globe className="w-8 h-8 text-th-text" />
               </div>
               <span className="font-mono text-[10px] font-black uppercase text-center text-th-text">{top}</span>
            </div>
          ))}
        </div>
      )}

      {type === 'layers' && (
        <div className="flex flex-col gap-3 py-4 max-w-xl mx-auto">
          {data.map((layer: string, idx: number) => (
            <div 
              key={idx} 
              className="p-4 border-2 border-th-border bg-th-card font-mono text-xs font-black uppercase flex items-center justify-center shadow-[4px_4px_0px_var(--border-primary)] rounded-sm text-th-text"
              style={{ transform: `scale(${1 - idx * 0.04})` }}
            >
              {layer}
            </div>
          ))}
        </div>
      )}

      {type === 'box-model' && (
        <div className="p-12 border-4 border-dashed border-th-border/10 bg-th-bg-secondary flex items-center justify-center flex-col relative min-h-[300px] rounded-sm">
           <span className="absolute top-2 left-4 text-[10px] font-black uppercase text-th-text-secondary font-mono tracking-widest">Margin</span>
           <div className="w-full h-full border-4 border-th-border bg-th-card p-8 relative shadow-[10px_10px_0px_var(--border-primary)]">
              <span className="absolute top-2 left-4 text-[10px] font-black uppercase text-th-text font-mono tracking-widest">Border</span>
              <div className="w-full h-full border-4 border-dashed border-th-border/20 bg-th-bg-secondary p-8 relative">
                <span className="absolute top-2 left-4 text-[10px] font-black uppercase text-th-text-secondary font-mono tracking-widest">Padding</span>
                <div className="w-full h-full bg-th-text text-th-bg flex items-center justify-center font-mono text-sm font-black uppercase p-6">
                  Content Area
                </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}

export default function TopicPage() {
  const params = useParams();
  const router = useRouter();
  
  const moduleId = parseInt(params.moduleId as string);
  const topicIndex = parseInt(params.topicIndex as string);

  const currentModule = MODULE_DATA_SAFE(moduleId);
  const topic = currentModule?.topics[topicIndex];

  function MODULE_DATA_SAFE(id: number) {
    return MODULES_DATA.find(m => m.id === id);
  }

  if (!currentModule || !topic) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 text-center bg-th-bg">
        <div className="space-y-6">
          <h1 className="text-2xl font-black uppercase text-th-text">Data Node Null</h1>
          <Link href="/learn" className="inline-flex items-center gap-2 border-2 border-th-border px-6 py-3 font-black uppercase hover:bg-th-text hover:text-th-bg transition-all text-th-text">
            <ArrowLeft className="w-4 h-4" />
            Restore to library
          </Link>
        </div>
      </div>
    );
  }

  const nextTopic = currentModule.topics[topicIndex + 1];
  const prevTopic = currentModule.topics[topicIndex - 1];

  return (
    <div className="min-h-screen bg-th-bg transition-colors duration-300">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-th-bg border-b-2 border-th-border px-6 py-4 flex items-center justify-between">
        <Link href="/learn" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-tighter hover:opacity-70 text-th-text">
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden md:inline italic uppercase">Subsystem {moduleId}: {currentModule.title}</span>
          <span className="md:hidden">Back</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-th-text text-th-bg rounded-sm">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest">Textbook Mode</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20 lg:grid lg:grid-cols-[1fr_300px] lg:gap-16">
        <motion.article
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-16"
        >
          {/* Header Section */}
          <header className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="bg-th-text text-th-bg px-2 py-1 text-[10px] font-mono font-black uppercase tracking-widest">Phase {moduleId}.{(topicIndex + 1).toString().padStart(2, '0')}</span>
            </div>
            
            <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-th-text">
              {topic.name}
            </h1>
            
            <p className="text-xl md:text-3xl text-th-text-secondary font-medium font-sans leading-tight max-w-2xl">
              {topic.summary}
            </p>
          </header>

          {/* Visual Element Large */}
          {topic.visual && (
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <TechnicalVisual type={topic.visual.type} data={topic.visual.data} />
            </section>
          )}

          {/* Textbook Core Content */}
          <section className="prose prose-slate prose-lg md:prose-xl max-w-none 
            prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-th-text
            prose-p:text-th-text-secondary prose-p:leading-relaxed prose-strong:text-th-text prose-strong:font-black
            prose-li:text-th-text-secondary prose-code:text-th-text prose-code:bg-th-bg-secondary prose-code:px-1 prose-code:rounded-sm
            prose-blockquote:border-l-4 prose-blockquote:border-th-border prose-blockquote:font-medium prose-blockquote:text-th-text">
            <ReactMarkdown>{topic.content}</ReactMarkdown>
          </section>

          {/* Key Terms Subsection */}
          <section className="space-y-8 border-t-2 border-th-border pt-16">
            <h2 className="text-xs font-mono font-black uppercase tracking-[0.3em] text-th-bg bg-th-text w-fit px-2 py-1">
              Technical Terms Breakdown
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {topic.details.map((point, idx) => (
                <div key={idx} className="space-y-3 p-8 border-2 border-th-border bg-th-card hover:shadow-[10px_10px_0px_var(--border-primary)] transition-all group rounded-sm">
                  <h3 className="font-black uppercase tracking-tight text-xl group-hover:text-th-text flex items-center gap-3 text-th-text">
                    <span className="w-2 h-2 bg-th-accent rounded-full" />
                    {point.title}
                  </h3>
                  <p className="text-th-text-secondary text-sm leading-relaxed font-medium">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Navigation */}
          <footer className="mt-24 pt-12 border-t-4 border-th-border grid grid-cols-1 md:grid-cols-2 gap-px bg-th-border rounded-sm overflow-hidden">
            <div className="bg-th-bg p-8 md:p-12">
              <button 
                disabled={!prevTopic}
                onClick={() => router.push(`/learn/${moduleId}/${topicIndex - 1}`)}
                className="group w-full flex flex-col items-start gap-4 disabled:opacity-30 text-left text-th-text"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-black uppercase text-th-text-secondary">
                  <ChevronLeft className="w-4 h-4" />
                  Reverse Sequence
                </div>
                {prevTopic && (
                  <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter group-hover:underline decoration-th-accent underline-offset-8 decoration-4">
                    {prevTopic.name}
                  </span>
                )}
              </button>
            </div>
            
            <div className="bg-th-bg p-8 md:p-12 border-l-2 border-th-border/5">
              <button 
                disabled={!nextTopic}
                onClick={() => router.push(`/learn/${moduleId}/${topicIndex + 1}`)}
                className="group w-full flex flex-col items-end gap-4 disabled:opacity-30 text-right text-th-text"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-black uppercase text-th-text-secondary">
                  Forward Sequence
                  <ChevronRight className="w-4 h-4" />
                </div>
                {nextTopic && (
                  <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter group-hover:underline decoration-th-accent underline-offset-8 decoration-4">
                    {nextTopic.name}
                  </span>
                )}
              </button>
            </div>
          </footer>
        </motion.article>

        {/* Sidebar Info - High Yield */}
        <aside className="hidden lg:block space-y-8">
           <div className="sticky top-32 space-y-8">
              <section className="bg-th-yield-bg border-2 border-th-border p-6 relative overflow-hidden group shadow-[6px_6px_0px_var(--border-primary)] rounded-sm">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Layout className="w-16 h-16 rotate-12 text-th-yield-text" />
                 </div>
                 
                 <div className="relative z-10 space-y-4">
                   <h2 className="text-[10px] font-mono font-black uppercase tracking-widest text-th-yield-text flex items-center gap-2">
                     <span className="w-5 h-5 rounded-full border border-th-yield-text flex items-center justify-center font-serif italic text-xs">!</span>
                     Exam Intelligence
                   </h2>
                   
                   <ul className="space-y-4">
                     {topic.examFocus.map((point, idx) => (
                       <li key={idx} className="flex items-start gap-3 text-th-yield-text">
                         <span className="mt-1 w-1 h-1 bg-th-yield-text rounded-full flex-shrink-0" />
                         <span className="font-black text-[11px] leading-tight uppercase tracking-tight">{point}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
              </section>

              <div className="p-6 border-2 border-dashed border-th-border/20 rounded-sm">
                 <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-th-text-secondary mb-2 opacity-40">Telemetry</h4>
                 <div className="space-y-4 font-mono text-[9px] text-th-text-secondary font-black uppercase">
                    <div className="flex justify-between border-b border-th-border/10 pb-2">
                      <span>Source Protocol</span>
                      <span>PDF-OCR-04</span>
                    </div>
                    <div className="flex justify-between border-b border-th-border/10 pb-2">
                      <span>Reading Time</span>
                      <span>~{Math.ceil(topic.content.length / 500)} Min</span>
                    </div>
                    <div className="flex justify-between">
                       <span>Complexity</span>
                       <div className="flex gap-1">
                          <div className="w-2 h-2 bg-th-text" />
                          <div className="w-2 h-2 bg-th-text" />
                          <div className="w-2 h-2 bg-th-border/20" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </aside>
      </main>
    </div>
  );
}

