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
      href: '#', // Placeholder as requested
      description: 'View source code',
      external: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 md:p-12 lg:p-24 bg-[#f9fafb]">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
          FOCFHWTWD
        </h1>
        <p className="text-lg text-gray-600 font-medium font-mono border-y border-gray-200 py-4 mb-12">
          Foundations Of Computing: From HardWare To WebDesign
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {buttons.map((btn, idx) => (
          <motion.div
            key={btn.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            {btn.external ? (
              <a 
                href={btn.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-8 bg-white border-2 border-gray-200 hover:border-black transition-all hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none h-full"
              >
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                  {btn.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-1">{btn.label}</h2>
                  <p className="text-sm text-gray-500">{btn.description}</p>
                </div>
              </a>
            ) : (
              <Link
                href={btn.href}
                className="group flex items-start gap-4 p-8 bg-white border-2 border-gray-200 hover:border-black transition-all hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none h-full"
              >
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                  {btn.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-1">{btn.label}</h2>
                  <p className="text-sm text-gray-500">{btn.description}</p>
                </div>
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-24 w-full max-w-4xl border-t border-gray-200 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div className="space-y-4">
            <h3 className="font-mono text-sm uppercase tracking-widest text-gray-400 font-bold">Contact</h3>
            <a 
              href="mailto:aaronsooraj001@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors uppercase text-sm font-bold tracking-tighter"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
          </div>
          <div className="text-right space-y-1 font-mono text-[10px] md:text-xs text-gray-500 uppercase tracking-tight">
            <p>&copy; 2026 HexnicAI || Part of ATS_PDZ</p>
            <p>&copy; SINCE 2023 | ATS-PDZ</p>
            <p className="font-bold text-gray-800">ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
