import React, { useState } from 'react';
import * as math from 'mathjs';

const Calculator = () => {
  // ... (MANTENÉ TODO TU ESTADO Y FUNCIONES LÓGICAS IGUALES HASTA handleCalculate, handleAllClear, etc) ...
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState('');

  const handleButtonClick = (value) => {
    if (result && !math.isNumeric(value) && value !== '.' && value !== ')') {
        setExpression(result + value);
        setResult('');
        setHistory(result);
    } else if (result && (math.isNumeric(value) || value === '.' || value === '(' || value === 'e' || value === 'pi')) {
        setExpression(value);
        setResult('');
        setHistory('');
    } else {
        setExpression((prev) => prev + value);
    }
  };

  const handleCalculate = () => {
    try {
      if (!expression) return;
      const calculated = math.evaluate(expression);
      const formatted = math.format(calculated, { precision: 10 });
      setHistory(expression);
      setResult(String(formatted));
      setExpression(String(formatted));
    } catch (error) {
      setResult('Error de sintaxis');
      setTimeout(() => setResult(''), 2000);
    }
  };

  const handleAllClear = () => {
    setExpression('');
    setResult('');
    setHistory('');
  };

  const handleClearEntry = () => {
    setExpression('');
    if(result) setResult('');
  };

  const handleDelete = () => {
    if (result) handleAllClear();
    else setExpression((prev) => prev.slice(0, -1));
  };

  // Componente de Botón Rediseñado
  const CalcButton = ({ label, value, onClick, className = '', isOperator = false, isAction = false, isDanger = false }) => {
    const textToInsert = value !== undefined ? value : label;

    let baseStyle = "p-3 sm:p-4 rounded-xl text-lg font-semibold transition-all duration-200 active:scale-95 flex items-center justify-center font-mono";
    let colorStyle = "";

    if (isOperator) {
        colorStyle = "bg-stone-800/80 text-orange-400 hover:bg-stone-700 border border-white/5";
    } else if (isAction) {
        colorStyle = "bg-gradient-to-r from-accent1 to-orange-400 text-dark hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] border-none";
    } else if (isDanger) {
        colorStyle = "bg-red-900/20 text-red-400 hover:bg-red-900/40 border border-red-500/20";
    } else {
        colorStyle = "bg-white/5 text-gray-200 hover:bg-white/10 border border-white/5";
    }

    return (
      <button
        onClick={() => onClick ? onClick() : handleButtonClick(textToInsert)}
        className={`${baseStyle} ${colorStyle} ${className}`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="flex flex-col h-full w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-6 text-gray-100 flex items-center">
        <svg className="w-5 h-5 mr-2 text-accent1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
        Calculadora Científica
      </h2>

      {/* Pantalla (Estilo LCD oscuro) */}
      <div className="bg-[#0a0a0a] p-5 rounded-2xl border border-white/10 mb-6 flex flex-col justify-end h-32 shadow-inner relative overflow-hidden">
        {/* Reflejo sutil */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/[0.02] pointer-events-none rounded-t-2xl"></div>
        
        <div className="text-accent1/60 text-sm text-right h-6 overflow-hidden truncate font-mono tracking-wider">
          {history}
        </div>
        <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            onKeyDown={(e) => {
                if(e.key === 'Enter') handleCalculate();
                if(e.key === 'Escape') handleClearEntry();
            }}
            className="bg-transparent text-right text-4xl text-gray-100 w-full focus:outline-none font-mono tracking-wider mt-2"
            placeholder="0"
        />
      </div>

      {/* Teclado */}
      <div className="grid grid-cols-4 gap-3 flex-grow select-none">
        <CalcButton label="AC" onClick={handleAllClear} isDanger />
        <CalcButton label="C" onClick={handleClearEntry} isDanger className="text-sm" />
        <CalcButton label="DEL" onClick={handleDelete} className="bg-stone-800/80 text-gray-400 border border-white/5" />
        <CalcButton label="/" isOperator />

        <CalcButton label="(" isOperator />
        <CalcButton label=")" isOperator />
        <CalcButton label="^" isOperator />
        <CalcButton label="sqrt" value="sqrt(" isOperator />

        <CalcButton label="sin" value="sin(" isOperator />
        <CalcButton label="cos" value="cos(" isOperator />
        <CalcButton label="ln" value="log(" isOperator />
        <CalcButton label="log" value="log10(" isOperator />

        <CalcButton label="7" />
        <CalcButton label="8" />
        <CalcButton label="9" />
        <CalcButton label="*" isOperator />

        <CalcButton label="4" />
        <CalcButton label="5" />
        <CalcButton label="6" />
        <CalcButton label="-" isOperator />

        <CalcButton label="1" />
        <CalcButton label="2" />
        <CalcButton label="3" />
        <CalcButton label="+" isOperator />

        <CalcButton label="e" isOperator className="font-serif italic" />
        <CalcButton label="0" />
        <CalcButton label="." />
        <CalcButton label="=" onClick={handleCalculate} isAction />
      </div>
      
      <div className="mt-6 text-[10px] text-gray-500 flex justify-between px-2 font-mono uppercase tracking-widest">
         <span>ln = log base e</span>
         <span>log = log base 10</span>
      </div>
    </div>
  );
};

export default Calculator;