'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, Play, RefreshCw, LayoutTemplate } from 'lucide-react';
import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
// Custom simple theme for prism
import 'prismjs/themes/prism-tomorrow.css';

const DEFAULT_HTML = `<!-- Welcome to the Web Playground! -->
<div class="container">
  <h1>Hello, World!</h1>
  <p>Test your HTML, CSS, and JS here.</p>
  <button id="clickMe">Click Me</button>
</div>`;

const DEFAULT_CSS = `.container {
  font-family: system-ui, sans-serif;
  text-align: center;
  margin-top: 50px;
}

h1 {
  color: #3b82f6;
}

button {
  padding: 10px 20px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #2563eb;
}`;

const DEFAULT_JS = `document.getElementById('clickMe').addEventListener('click', () => {
  alert('Button clicked!');
});`;

export default function PlaygroundPage() {
  const [html, setHtml] = useState(DEFAULT_HTML);
  const [css, setCss] = useState(DEFAULT_CSS);
  const [js, setJs] = useState(DEFAULT_JS);
  
  const [srcDoc, setSrcDoc] = useState('');
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');

  // Debounce the update so it doesn't stutter on every keystroke
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}</script>
          </body>
        </html>
      `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const resetCode = () => {
    setHtml(DEFAULT_HTML);
    setCss(DEFAULT_CSS);
    setJs(DEFAULT_JS);
  };

  return (
    <div className="min-h-screen flex flex-col bg-th-bg">
      {/* Header */}
      <div className="p-4 border-b-4 border-th-border flex flex-col sm:flex-row items-center justify-between gap-4 bg-th-bg-secondary shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-sm hover:text-th-accent transition-colors text-th-text">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <div className="h-6 w-1 bg-th-border hidden sm:block"></div>
          <h1 className="text-xl font-black uppercase tracking-tighter text-th-text flex items-center gap-2">
            <LayoutTemplate className="w-5 h-5 text-th-accent" />
            Playground
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={resetCode}
            className="flex items-center gap-2 px-3 py-1.5 border-2 border-th-border bg-th-bg text-th-text font-bold text-xs uppercase tracking-widest hover:bg-th-text hover:text-th-bg transition-colors shadow-[2px_2px_0px_var(--border-primary)]"
          >
            <RefreshCw className="w-3 h-3" /> Reset
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Editor Section */}
        <div className="w-full lg:w-1/2 flex flex-col border-r-0 lg:border-r-4 border-b-4 lg:border-b-0 border-th-border">
          {/* Tabs */}
          <div className="flex border-b-2 border-th-border bg-th-bg shrink-0">
            {(['html', 'css', 'js'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 font-black uppercase tracking-widest text-sm transition-colors border-b-4 ${
                  activeTab === tab
                    ? 'border-th-accent text-th-accent bg-th-bg-secondary'
                    : 'border-transparent text-th-text-secondary hover:text-th-text hover:bg-th-bg-secondary'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Code Area */}
          <div className="flex-1 relative bg-[#1d1f21] overflow-y-auto">
            {activeTab === 'html' && (
              <Editor
                value={html}
                onValueChange={setHtml}
                highlight={(code) => Prism.highlight(code, Prism.languages.markup, 'markup')}
                padding={20}
                className="font-mono text-sm min-h-full"
                style={{
                  fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                }}
              />
            )}
            {activeTab === 'css' && (
              <Editor
                value={css}
                onValueChange={setCss}
                highlight={(code) => Prism.highlight(code, Prism.languages.css, 'css')}
                padding={20}
                className="font-mono text-sm min-h-full"
                style={{
                  fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                }}
              />
            )}
            {activeTab === 'js' && (
              <Editor
                value={js}
                onValueChange={setJs}
                highlight={(code) => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
                padding={20}
                className="font-mono text-sm min-h-full"
                style={{
                  fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                }}
              />
            )}
          </div>
        </div>

        {/* Preview Section */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col h-[50vh] lg:h-auto">
          <div className="bg-th-bg-secondary border-b-2 border-th-border py-2 px-4 shrink-0 flex items-center justify-between">
            <span className="font-black uppercase tracking-widest text-xs text-th-text">Live Preview</span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            </span>
          </div>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts allow-modals"
            className="w-full flex-1 border-none bg-white"
          />
        </div>
      </div>
    </div>
  );
}
