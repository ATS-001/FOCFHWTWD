'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Linkedin, ArrowLeft, Hexagon } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-th-bg p-6 md:p-12 lg:p-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-3 px-6 py-3 border-4 border-th-border font-black uppercase tracking-widest text-xs hover:bg-th-text hover:text-th-bg transition-all shadow-[4px_4px_0px_var(--border-primary)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none bg-th-bg mb-20 text-th-text">
          <ArrowLeft className="w-4 h-4" />
          System Dashboard
        </Link>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="border-l-8 border-th-border pl-8 py-2">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic text-th-text leading-[0.8]">
              About<br />Author
            </h1>
            <p className="text-xl text-th-text-secondary mt-6 font-mono font-black uppercase tracking-[0.2em]">Arch. Development & Design</p>
          </div>

          <div className="space-y-8 text-xl text-th-text-secondary leading-relaxed">
            <p>
              This educational platform was engineered by <span className="font-black text-th-text border-b-4 border-th-accent">Aaron Thalakkottor Sooraj</span>.
              It is designed as a high-fidelity resource for students under the KTU 2024 Framework to master the complexities of digital systems, 
              ranging from core hardware logic to modern web architecture.
            </p>
            
            <p className="p-8 bg-th-bg-secondary border-2 border-th-border/10 font-mono text-sm italic border-l-8 border-l-th-accent text-th-text">
              &quot;A part of HexnicAI — Bridging the gap between foundational hardware knowledge and cutting-edge software design.&quot;
            </p>

            <div className="flex flex-wrap gap-6 pt-12">
              <a 
                href="https://www.linkedin.com/in/aaronts127pdz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-10 py-5 bg-[#0077B5] text-white font-black uppercase tracking-widest text-xs hover:-translate-y-1 transition-all shadow-[6px_6px_0px_var(--border-primary)] hover:shadow-none"
              >
                <Linkedin className="w-5 h-5" />
                Connection Established
              </a>
              <a 
                href="https://hexnicai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-10 py-5 border-4 border-th-border font-black uppercase tracking-widest text-xs hover:bg-th-text hover:text-th-bg transition-all shadow-[6px_6px_0px_var(--border-primary)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none bg-th-bg"
              >
                <Hexagon className="w-5 h-5" />
                HexnicAI Mainframe
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
