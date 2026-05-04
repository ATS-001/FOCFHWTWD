'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, Calculator, Binary } from 'lucide-react';

/* CONVERSION LOGIC */

function decimalToBaseSteps(decimalStr: string, base: number) {
  let decimal = parseInt(decimalStr, 10);
  if (isNaN(decimal)) return { result: '', steps: ['Invalid decimal input.'] };
  if (decimal === 0) return { result: '0', steps: [`0 / ${base} = 0 with remainder 0`, 'Result = 0'] };
  let steps = [];
  let current = decimal;
  let remainders = [];
  while (current > 0) {
    let q = Math.floor(current / base);
    let r = current % base;
    let rStr = r < 10 ? r.toString() : String.fromCharCode(55 + r);
    steps.push(`${current} / ${base} = ${q} with remainder ${rStr}`);
    remainders.push(rStr);
    current = q;
  }
  steps.push(`Read remainders from bottom to top: ${remainders.slice().reverse().join('')}`);
  return { result: remainders.reverse().join(''), steps };
}

function baseToDecimalSteps(str: string, base: number) {
  str = str.toUpperCase();
  let steps = [];
  let total = 0;
  let calcStrs = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[str.length - 1 - i];
    let val = parseInt(char, base);
    if (isNaN(val)) return { result: '', steps: ['Invalid input.'] };
    calcStrs.push(`${val} × ${base}^${i}`);
    total += val * Math.pow(base, i);
  }
  steps.push(calcStrs.reverse().join(' + '));
  steps.push(`= ${total}`);
  return { result: total.toString(10), steps };
}

function binaryToOctalSteps(str: string) {
  let steps = [];
  while (str.length % 3 !== 0) str = '0' + str;
  steps.push(`Pad binary to multiple of 3: ${str}`);
  let octStr = "";
  for (let i = 0; i < str.length; i += 3) {
    let chunk = str.slice(i, i+3);
    let o = parseInt(chunk, 2).toString(8);
    steps.push(`${chunk} -> ${o}`);
    octStr += o;
  }
  octStr = octStr.replace(/^0+/, '') || '0';
  steps.push(`Result: ${octStr}`);
  return { result: octStr, steps };
}

function binaryToHexSteps(str: string) {
  let steps = [];
  while (str.length % 4 !== 0) str = '0' + str;
  steps.push(`Pad binary to multiple of 4: ${str}`);
  let hexStr = "";
  for (let i = 0; i < str.length; i += 4) {
    let chunk = str.slice(i, i+4);
    let h = parseInt(chunk, 2).toString(16).toUpperCase();
    steps.push(`${chunk} -> ${h}`);
    hexStr += h;
  }
  hexStr = hexStr.replace(/^0+/, '') || '0';
  steps.push(`Result: ${hexStr}`);
  return { result: hexStr, steps };
}

function octalToBinarySteps(str: string) {
  let steps = [];
  let binStr = "";
  for (let char of str) {
     let v = parseInt(char, 8);
     if (isNaN(v)) return { result: '', steps: ['Invalid octal input'] };
     let b = v.toString(2).padStart(3, '0');
     steps.push(`${char} -> ${b}`);
     binStr += b;
  }
  binStr = binStr.replace(/^0+/, '') || '0';
  steps.push(`Result: ${binStr}`);
  return { result: binStr, steps };
}

function hexToBinarySteps(str: string) {
  let steps = [];
  let binStr = "";
  for (let char of str.toUpperCase()) {
     let v = parseInt(char, 16);
     if (isNaN(v)) return { result: '', steps: ['Invalid hex input'] };
     let b = v.toString(2).padStart(4, '0');
     steps.push(`${char} -> ${b}`);
     binStr += b;
  }
  binStr = binStr.replace(/^0+/, '') || '0';
  steps.push(`Result: ${binStr}`);
  return { result: binStr, steps };
}

function octalToHexSteps(str: string) {
  let steps = [];
  steps.push("Step 1: Convert Octal to Binary");
  let binOut = octalToBinarySteps(str);
  steps.push(...binOut.steps);
  steps.push("Step 2: Convert Binary to Hexadecimal");
  let hexOut = binaryToHexSteps(binOut.result || '0');
  steps.push(...hexOut.steps);
  return { result: hexOut.result, steps };
}

function hexToOctalSteps(str: string) {
  let steps = [];
  steps.push("Step 1: Convert Hexadecimal to Binary");
  let binOut = hexToBinarySteps(str);
  steps.push(...binOut.steps);
  steps.push("Step 2: Convert Binary to Octal");
  let octOut = binaryToOctalSteps(binOut.result || '0');
  steps.push(...octOut.steps);
  return { result: octOut.result, steps };
}

function getConversionSteps(input: string, fromBase: number, toBase: number) {
  input = input.trim();
  if (!input) return { result: '', steps: [] };
  
  if (fromBase === toBase) {
    return { result: input, steps: ['Conversion is identical to input.'] };
  } else if (fromBase === 10) {
    return decimalToBaseSteps(input, toBase);
  } else if (toBase === 10) {
    return baseToDecimalSteps(input, fromBase);
  } else if (fromBase === 2 && toBase === 8) {
    return binaryToOctalSteps(input);
  } else if (fromBase === 2 && toBase === 16) {
    return binaryToHexSteps(input);
  } else if (fromBase === 8 && toBase === 2) {
    return octalToBinarySteps(input);
  } else if (fromBase === 16 && toBase === 2) {
    return hexToBinarySteps(input);
  } else if (fromBase === 8 && toBase === 16) {
    return octalToHexSteps(input);
  } else if (fromBase === 16 && toBase === 8) {
    return hexToOctalSteps(input);
  } 
  return { result: '', steps: ['Unknown conversion'] };
}

/* BINARY MATH LOGIC */
function binaryAddSteps(a: string, b: string): { result: string, steps: React.ReactNode[] } {
  a = a.padStart(4, '0');
  b = b.padStart(4, '0');
  let carry = Array(5).fill(0);
  let result = '';
  let steps: React.ReactNode[] = [];
  
  steps.push(<div key="title" className="font-bold mb-2">Addition: {a} + {b}</div>);
  
  let rows = [];
  for (let i = 3; i >= 0; i--) {
     let bitA = parseInt(a[i]);
     let bitB = parseInt(b[i]);
     let cin = carry[i+1];
     let sum = bitA + bitB + cin;
     let s = sum % 2;
     let cout = Math.floor(sum / 2);
     carry[i] = cout;
     result = s.toString() + result;
     rows.push(
       <tr key={i} className="border-b border-th-border/20 last:border-0 hover:bg-th-bg transition-colors">
         <td className="p-2 font-mono text-center border-r border-th-border/20">{3-i}</td>
         <td className="p-2 font-mono text-center border-r border-th-border/20">{bitA}</td>
         <td className="p-2 font-mono text-center border-r border-th-border/20">{bitB}</td>
         <td className="p-2 font-mono text-center border-r border-th-border/20">{cin}</td>
         <td className="p-2 font-mono text-center font-black text-th-accent border-r border-th-border/20">{s}</td>
         <td className="p-2 font-mono text-center font-black">{cout}</td>
       </tr>
     );
  }
  
  steps.push(
    <div key="table" className="overflow-x-auto border-2 border-th-border bg-th-bg shadow-[4px_4px_0px_var(--border-primary)] mb-4">
      <table className="w-full text-left border-collapse min-w-[400px]">
        <thead>
          <tr className="bg-th-bg-secondary border-b-2 border-th-border text-[10px] sm:text-xs font-black uppercase tracking-widest text-th-text-secondary">
            <th className="p-3 text-center border-r border-th-border">Col</th>
            <th className="p-3 text-center border-r border-th-border">A</th>
            <th className="p-3 text-center border-r border-th-border">B</th>
            <th className="p-3 text-center border-r border-th-border">C_in</th>
            <th className="p-3 text-center border-r border-th-border">Sum</th>
            <th className="p-3 text-center">C_out</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
  
  if (carry[0] > 0) {
    result = carry[0] + result;
    steps.push(<div key="carry" className="text-th-accent font-black tracking-widest text-sm uppercase mb-2">End carry {carry[0]} is prepended.</div>);
  }
  
  return { result, steps };
}

function binarySubSteps(a: string, b: string): { result: string, steps: React.ReactNode[] } {
  a = a.padStart(4, '0');
  b = b.padStart(4, '0');
  let steps: React.ReactNode[] = [];
  
  steps.push(<div key="sub-title" className="font-bold mb-4 bg-th-bg-secondary p-2 inline-block border-2 border-th-border">Subtraction: {a} - {b} (using 2&apos;s complement)</div>);
  
  let ones = b.split('').map(bit => bit === '1' ? '0' : '1').join('');
  let twosAdd = binaryAddSteps(ones, '0001');
  let twos = twosAdd.result.slice(-4);
  
  steps.push(
    <div key="comp" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div className="border-2 border-th-border p-4 bg-th-bg shadow-[4px_4px_0px_var(--border-primary)]">
        <div className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-th-text-secondary mb-2">1&apos;s Complement of B</div>
        <div className="font-mono text-xl">{ones}</div>
      </div>
      <div className="border-2 border-th-border p-4 bg-th-bg shadow-[4px_4px_0px_var(--border-primary)]">
        <div className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-th-text-secondary mb-2">2&apos;s Complement (+1)</div>
        <div className="font-mono text-xl text-th-accent">{twos}</div>
      </div>
    </div>
  );
  
  steps.push(<div key="add-title" className="font-bold mb-2 uppercase text-[10px] sm:text-xs tracking-widest text-th-text-secondary">Adding A ({a}) + 2&apos;s Comp ({twos}):</div>);
  
  let finalAdd = binaryAddSteps(a, twos);
  steps.push(<div key="final-add-steps">{finalAdd.steps.slice(1)}</div>);
  
  let res4bit = finalAdd.result.length > 4 ? finalAdd.result.slice(-4) : finalAdd.result;
  let discardedCarry = finalAdd.result.length > 4 ? '1' : '0';
  
  if (discardedCarry === '1') {
     steps.push(
       <div key="res-pos" className="mt-4 p-4 border-2 border-th-accent bg-th-accent/10 shadow-[4px_4px_0px_var(--color-accent)]">
         <span className="font-black uppercase text-th-accent block mb-1">Carry out = 1</span>
         <span className="text-sm sm:text-base">Result is positive. Discard carry. Final is <strong className="font-mono">{res4bit}</strong>.</span>
       </div>
     );
  } else {
     let mg1 = res4bit.split('').map(x=>x==='1'?'0':'1').join('');
     let mg2 = binaryAddSteps(mg1, '0001').result.slice(-4);
     steps.push(
       <div key="res-neg" className="mt-4 p-4 border-2 border-th-border bg-th-bg-secondary shadow-[4px_4px_0px_var(--border-primary)]">
         <span className="font-black uppercase text-th-text block mb-1">Carry out = 0</span>
         <span className="block mb-2 text-sm sm:text-base">Result is negative (in 2&apos;s complement form).</span>
         <span className="block text-sm sm:text-base">Magnitude is 2&apos;s comp of {res4bit} <span className="mx-2">=&gt;</span> <strong className="font-mono">-{mg2}</strong></span>
       </div>
     );
  }
  
  return { result: res4bit, steps };
}

function binaryMulSteps(a: string, b: string): { result: string, steps: React.ReactNode[] } {
  a = a.padStart(4, '0');
  b = b.padStart(4, '0');
  let steps: React.ReactNode[] = [];
  
  steps.push(<div key="mul-title" className="font-bold mb-4 uppercase tracking-widest text-[10px] sm:text-sm bg-th-bg-secondary p-2 inline-block border-2 border-th-border">Multiplication: {a} × {b}</div>);
  
  let partials: string[] = [];
  let rows = [];
  for (let i = 3; i >= 0; i--) {
    let bit = b[i];
    let p = bit === '1' ? a : '0000';
    let shift = '0'.repeat(3 - i);
    partials.push(p + shift);
    
    rows.push(
      <tr key={i} className="border-b border-th-border/20 last:border-0 hover:bg-th-bg transition-colors">
        <td className="p-2 sm:p-3 font-mono text-center border-r border-th-border/20 font-black">{bit}</td>
        <td className="p-2 sm:p-3 font-mono text-right tracking-[0.2em] sm:tracking-[0.5em] text-th-accent">{p}</td>
        <td className="p-2 sm:p-3 font-mono text-left tracking-[0.2em] sm:tracking-[0.5em] opacity-50">{shift}</td>
      </tr>
    );
  }
  
  let sumStr = (parseInt(a, 2) * parseInt(b, 2)).toString(2);
  
  steps.push(
    <div key="mul-table" className="overflow-x-auto border-2 border-th-border bg-th-bg shadow-[4px_4px_0px_var(--border-primary)] mb-4">
      <table className="w-full text-left border-collapse min-w-[400px]">
        <thead>
          <tr className="bg-th-bg-secondary border-b-2 border-th-border text-[10px] sm:text-xs font-black uppercase tracking-widest text-th-text-secondary">
            <th className="p-3 text-center border-r border-th-border w-1/3">Multiplier Bit</th>
            <th className="p-3 text-right">Partial Product</th>
            <th className="p-3 text-left">Shift</th>
          </tr>
        </thead>
        <tbody>
          {rows}
          <tr className="bg-th-bg-secondary border-t-2 border-th-border">
            <td className="p-3 font-black uppercase text-[10px] sm:text-xs tracking-widest border-r border-th-border text-center">Sum</td>
            <td colSpan={2} className="p-3 font-mono text-center text-base sm:text-lg tracking-[0.2em] sm:tracking-[0.5em] font-black text-th-accent">{sumStr}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  return { result: sumStr, steps };
}

function binaryDivSteps(a: string, b: string): { result: string, steps: React.ReactNode[] } {
  let aClean = a.padStart(4, '0').replace(/^0+/, '');
  let bClean = b.padStart(4, '0').replace(/^0+/, '');
  if (!aClean) aClean = '0';
  if (!bClean) return { result: 'Error', steps: [<div key="err" className="text-th-accent font-black">Division by zero</div>] };
  
  let steps: React.ReactNode[] = [];
  steps.push(<div key="div-title" className="font-bold mb-4 uppercase tracking-widest text-[10px] sm:text-sm bg-th-bg-secondary p-2 inline-block border-2 border-th-border">Division: {aClean} ÷ {bClean}</div>);
  
  let aDec = parseInt(aClean, 2);
  let bDec = parseInt(bClean, 2);
  let qDec = Math.floor(aDec / bDec);
  let rDec = aDec % bDec;
  let q = qDec.toString(2);
  let r = rDec.toString(2);
  
  steps.push(
    <div key="div-table" className="border-2 border-th-border bg-th-bg shadow-[4px_4px_0px_var(--border-primary)]">
      <div className="grid grid-cols-2 border-b border-th-border/30">
        <div className="p-4 sm:p-6 border-r border-th-border/30">
            <div className="text-[10px] uppercase tracking-widest font-black text-th-text-secondary mb-1">Decimal Convert</div>
            <div className="font-mono text-sm sm:text-base">{aDec} ÷ {bDec}</div>
        </div>
        <div className="p-4 sm:p-6">
            <div className="text-[10px] uppercase tracking-widest font-black text-th-text-secondary mb-1">Decimal Result</div>
            <div className="font-mono text-sm sm:text-base">{qDec} R {rDec}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-th-bg-secondary">
        <div className="p-4 sm:p-6 border-r border-th-border/30">
            <div className="text-[10px] uppercase tracking-widest font-black text-th-text-secondary mb-1">Quotient (Bin)</div>
            <div className="font-mono text-xl sm:text-3xl font-black text-th-accent break-all">{q}</div>
        </div>
        <div className="p-4 sm:p-6">
            <div className="text-[10px] uppercase tracking-widest font-black text-th-text-secondary mb-1">Remainder (Bin)</div>
            <div className="font-mono text-xl sm:text-3xl font-black text-th-text break-all">{r}</div>
        </div>
      </div>
    </div>
  );
  
  return { result: `Quotient: ${q}, Remainder: ${r}`, steps };
}


/* MAIN COMPONENT */
export default function NumberSystems() {
  const [activeTab, setActiveTab] = useState<'conv' | 'math'>('conv');
  
  // Conv state
  const [convInput, setConvInput] = useState('');
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(2);
  const [convResult, setConvResult] = useState<{result: string, steps: string[]}>({ result: '', steps: [] });

  // Math state
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [operation, setOperation] = useState('+');
  const [mathResult, setMathResult] = useState<{result: string, steps: React.ReactNode[]}>({ result: '', steps: [] });

  const handleConvert = () => {
    // Determine regex based on base
    let isValid = false;
    if (fromBase === 2) isValid = /^[01]+$/.test(convInput);
    if (fromBase === 8) isValid = /^[0-7]+$/.test(convInput);
    if (fromBase === 10) isValid = /^\d+$/.test(convInput);
    if (fromBase === 16) isValid = /^[0-9A-Fa-f]+$/.test(convInput);

    if (!isValid && convInput.length > 0) {
      setConvResult({ result: 'Invalid Input', steps: ['Input contains characters not valid for the selected base.'] });
      return;
    }

    setConvResult(getConversionSteps(convInput, fromBase, toBase));
  };

  const handleMath = () => {
    if (!/^[01]{1,4}$/.test(numA) || !/^[01]{1,4}$/.test(numB)) {
      setMathResult({ result: 'Invalid', steps: ['Please enter exactly 1 to 4 binary digits for both A and B.'] });
      return;
    }
    
    if (operation === '+') setMathResult(binaryAddSteps(numA, numB));
    else if (operation === '-') setMathResult(binarySubSteps(numA, numB));
    else if (operation === '*') setMathResult(binaryMulSteps(numA, numB));
    else if (operation === '/') setMathResult(binaryDivSteps(numA, numB));
  };

  return (
    <div className="min-h-screen bg-th-bg text-th-text font-sans">
      <nav className="border-b-2 border-th-border bg-th-bg px-6 py-4 flex items-center">
        <Link href="/" className="inline-flex items-center gap-3 px-4 py-2 border-2 border-th-border font-black uppercase tracking-widest text-xs hover:bg-th-text hover:text-th-bg transition-colors shadow-[4px_4px_0px_var(--border-primary)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none bg-th-bg">
          <ArrowLeft className="w-4 h-4" />
          Terminal Hub
        </Link>
        <div className="ml-auto flex items-center gap-2 font-black uppercase italic text-sm md:text-base">
          <Calculator className="w-5 h-5" />
          <span className="hidden sm:inline">Computation Matrix</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6 md:p-12">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 inline-block underline decoration-th-accent decoration-8 underline-offset-4">
            Number Systems Core
          </h1>
          <p className="text-th-text-secondary font-mono text-sm tracking-widest uppercase">
            Data execution environments / Conversions & Mathematics
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('conv')}
            className={`flex-1 py-4 px-6 border-2 border-th-border font-black uppercase tracking-widest text-sm transition-all shadow-[4px_4px_0px_var(--border-primary)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${activeTab === 'conv' ? 'bg-th-text text-th-bg' : 'bg-th-bg hover:bg-th-text hover:text-th-bg'}`}
          >
            Base Converter
          </button>
          <button 
            onClick={() => setActiveTab('math')}
            className={`flex-1 py-4 px-6 border-2 border-th-border font-black uppercase tracking-widest text-sm transition-all shadow-[4px_4px_0px_var(--border-primary)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${activeTab === 'math' ? 'bg-th-text text-th-bg' : 'bg-th-bg hover:bg-th-text hover:text-th-bg'}`}
          >
            4-Bit Binary Logic
          </button>
        </div>

        {activeTab === 'conv' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 md:p-8 border-2 border-th-border bg-th-card shadow-[8px_8px_0px_var(--border-primary)] space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-th-text-secondary">Input Value</label>
                <input 
                  type="text" 
                  value={convInput}
                  onChange={(e) => setConvInput(e.target.value.toUpperCase())}
                  className="w-full bg-th-bg border-2 border-th-border p-3 font-mono font-bold outline-none focus:border-th-accent"
                  placeholder="e.g. 1010"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-th-text-secondary">Configuration</label>
                <div className="flex gap-2 items-center">
                  <select 
                    value={fromBase} onChange={(e) => setFromBase(Number(e.target.value))}
                    className="w-full bg-th-bg border-2 border-th-border p-3 pr-8 appearance-none text-center font-mono font-bold outline-none cursor-pointer focus:border-th-accent"
                  >
                    <option value={2}>BIN (2)</option>
                    <option value={8}>OCT (8)</option>
                    <option value={10}>DEC (10)</option>
                    <option value={16}>HEX (16)</option>
                  </select>
                  <span className="font-black px-2">to</span>
                  <select 
                    value={toBase} onChange={(e) => setToBase(Number(e.target.value))}
                    className="w-full bg-th-bg border-2 border-th-border p-3 pr-8 appearance-none text-center font-mono font-bold outline-none cursor-pointer focus:border-th-accent"
                  >
                    <option value={2}>BIN (2)</option>
                    <option value={8}>OCT (8)</option>
                    <option value={10}>DEC (10)</option>
                    <option value={16}>HEX (16)</option>
                  </select>
                </div>
              </div>
              <button 
                onClick={handleConvert}
                className="w-full bg-th-text text-th-bg font-black uppercase tracking-widest p-3 border-2 border-th-border transition-all shadow-[4px_4px_0px_var(--border-primary)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Execute
              </button>
            </div>

            {convResult.result !== '' && (
              <div className="mt-8 pt-8 border-t-2 border-th-border border-dashed">
                <h3 className="font-black italic uppercase text-2xl mb-4">Output Log</h3>
                <div className="bg-th-bg-secondary border-2 border-th-border p-4 font-mono text-sm overflow-x-auto space-y-2">
                  {convResult.steps.map((step, idx) => (
                    <div key={idx} className="whitespace-pre">{step}</div>
                  ))}
                  <div className="mt-4 pt-4 border-t border-th-border/30 font-black text-lg">
                    [Result]: {convResult.result}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'math' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 md:p-8 border-2 border-th-border bg-th-card shadow-[8px_8px_0px_var(--border-primary)] space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
              <div className="col-span-1 sm:col-span-1 space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-th-text-secondary">4-Bit Num A</label>
                <input 
                  type="text" 
                  value={numA}
                  maxLength={4}
                  onChange={(e) => setNumA(e.target.value.replace(/[^01]/g, ''))}
                  className="w-full bg-th-bg border-2 border-th-border p-3 font-mono font-bold outline-none focus:border-th-accent text-center tracking-widest"
                  placeholder="0000"
                />
              </div>
              <div className="col-span-1 sm:col-span-1 space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-th-text-secondary">Op</label>
                <select 
                  value={operation} onChange={(e) => setOperation(e.target.value)}
                  className="w-full bg-th-bg border-2 border-th-border p-3 font-mono font-bold outline-none cursor-pointer focus:border-th-accent text-center appearance-none"
                >
                  <option value="+">Add (+)</option>
                  <option value="-">Sub (-)</option>
                  <option value="*">Mul (*)</option>
                  <option value="/">Div (/)</option>
                </select>
              </div>
              <div className="col-span-1 sm:col-span-1 space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-th-text-secondary">4-Bit Num B</label>
                <input 
                  type="text" 
                  value={numB}
                  maxLength={4}
                  onChange={(e) => setNumB(e.target.value.replace(/[^01]/g, ''))}
                  className="w-full bg-th-bg border-2 border-th-border p-3 font-mono font-bold outline-none focus:border-th-accent text-center tracking-widest"
                  placeholder="0000"
                />
              </div>
              <div className="col-span-1 sm:col-span-1">
                <button 
                  onClick={handleMath}
                  className="w-full bg-th-text text-th-bg font-black uppercase tracking-widest p-3 border-2 border-th-border transition-all shadow-[4px_4px_0px_var(--border-primary)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Compute
                </button>
              </div>
            </div>

            {mathResult.result !== '' && (
              <div className="mt-8 pt-8 border-t-2 border-th-border border-dashed">
                <h3 className="font-black italic uppercase text-2xl mb-4">Execution Steps</h3>
                <div className="border-2 border-th-border p-4 sm:p-6 overflow-x-auto">
                  {mathResult.steps.map((step, idx) => (
                    <React.Fragment key={idx}>{step}</React.Fragment>
                  ))}
                  <div className="mt-6 pt-6 border-t-[3px] border-th-border font-black text-xl sm:text-2xl uppercase tracking-widest text-th-accent">
                    [Result]: {mathResult.result}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </main>
    </div>
  );
}
