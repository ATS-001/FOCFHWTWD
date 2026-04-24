'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Linkedin, ArrowLeft, Hexagon } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] p-6 md:p-12 lg:p-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-tighter hover:underline underline-offset-4 mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="border-l-4 border-black pl-8">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              About Me
            </h1>
            <p className="text-xl text-gray-500 mt-2 font-mono">Development & Design</p>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              This educational platform was created by <span className="font-bold text-black border-b-2 border-black">Aaron Thalakkottor Sooraj</span>.
              It is designed as a comprehensive resource for students under the KTU 2024 Framework to master the complexities of digital systems, 
              ranging from core hardware logic to modern web architecture.
            </p>
            
            <p className="p-6 bg-gray-50 border border-gray-200 font-mono text-sm italic">
              &quot;A part of HexnicAI — Bridging the gap between foundational hardware knowledge and cutting-edge software design.&quot;
            </p>

            <div className="flex flex-wrap gap-4 pt-8">
              <a 
                href="https://www.linkedin.com/in/aaronts127pdz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-[#0077B5] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#005c8c] transition-all"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
              <a 
                href="https://hexnicai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border-2 border-black font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all"
              >
                <Hexagon className="w-5 h-5" />
                HexnicAI Hub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
