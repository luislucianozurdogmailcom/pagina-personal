import React, { useState } from 'react';
import * as math from 'mathjs';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState('');

  // Manejar clics en botones
  const handleButtonClick = (value) => {
    // Lógica para encadenar operaciones con el resultado anterior
    if (result && !math.isNumeric(value) && value !== '.' && value !== ')') {
        setExpression(result + value);
        setResult('');
        setHistory(result);
    } else if (result && (math.isNumeric(value) || value === '.' || value === '(' || value === 'e' || value === 'pi')) {
        // Si hay resultado y el usuario empieza algo nuevo, reseteamos
        setExpression(value);
        setResult('');
        setHistory('');
    } else {
        setExpression((prev) => prev + value);
    }
  };

  // Calcular resultado
  const handleCalculate = () => {
    try {
      if (!expression) return;
      // mathjs evalúa 'log' como natural y 'log10' como base 10
      const calculated = math.evaluate(expression);
      
      // Formateo para evitar decimales infinitos y notación científica limpia
      const formatted = math.format(calculated, { precision: 10 });
      
      setHistory(expression);
      setResult(String(formatted));
      setExpression(String(formatted));
    } catch (error) {
      setResult('Error de sintaxis');
      setTimeout(() => setResult(''), 2000);
    }
  };

  // Borrar TODO (Reset total)
  const handleAllClear = () => {
    setExpression('');
    setResult('');
    setHistory('');
  };

  // Borrar entrada actual (Clear Entry)
  const handleClearEntry = () => {
    setExpression('');
    if(result) {
        setResult('');
    }
  };

  // Borrar último caracter (Backspace)
  const handleDelete = () => {
    if (result) {
        handleAllClear();
    } else {
        setExpression((prev) => prev.slice(0, -1));
    }
  };

  // Componente de Botón
  const CalcButton = ({ label, value, onClick, className = '', isOperator = false, isAction = false, isDanger = false }) => {
    // El valor que se escribe puede ser distinto a la etiqueta (ej: etiqueta "ln" -> escribe "log(")
    const textToInsert = value !== undefined ? value : label;

    let baseStyle = "p-3 sm:p-4 rounded text-lg font-semibold transition-all duration-200 active:scale-95 shadow-sm flex items-center justify-center";
    let colorStyle = "";

    if (isOperator) {
        colorStyle = "bg-stone-600 text-orange-400 hover:bg-stone-500 border border-stone-500";
    } else if (isAction) {
        colorStyle = "bg-orange-400 text-stone-900 hover:bg-orange-500 shadow-orange-400/20";
    } else if (isDanger) {
        colorStyle = "bg-red-900/40 text-red-200 hover:bg-red-900/60 border border-red-900/50";
    } else {
        colorStyle = "bg-stone-800 text-stone-100 hover:bg-stone-600 border border-stone-600";
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
    <div className="bg-stone-700 p-6 rounded-lg shadow-lg h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-stone-100 text-center">Calculadora</h2>

      {/* Pantalla */}
      <div className="bg-stone-800 p-4 rounded-lg border border-stone-600 mb-4 flex flex-col justify-end h-32 shadow-inner">
        <div className="text-stone-400 text-sm text-right h-6 overflow-hidden truncate">
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
            className="bg-transparent text-right text-3xl text-stone-100 w-full focus:outline-none font-mono"
            placeholder="0"
        />
      </div>

      {/* Teclado - Grid ajustado */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 flex-grow select-none">
        
        {/* Fila Edición y Limpieza */}
        <CalcButton label="AC" onClick={handleAllClear} isDanger />
        <CalcButton label="C" onClick={handleClearEntry} isDanger className="text-sm" /> {/* Borra input actual */}
        <CalcButton label="DEL" onClick={handleDelete} className="bg-stone-600 text-stone-200" />
        <CalcButton label="/" isOperator />

        {/* Fila Científica 1: Constantes y Exponentes */}
        <CalcButton label="(" isOperator />
        <CalcButton label=")" isOperator />
        <CalcButton label="^" isOperator />
        <CalcButton label="sqrt" value="sqrt(" isOperator />

        {/* Fila Científica 2: Trigonometría y Logaritmos */}
        <CalcButton label="sin" value="sin(" isOperator />
        <CalcButton label="cos" value="cos(" isOperator />
        <CalcButton label="ln" value="log(" isOperator /> {/* log() en mathjs es base e */}
        <CalcButton label="log" value="log10(" isOperator /> {/* log10 explícito */}

        {/* Fila 7-8-9 * */}
        <CalcButton label="7" />
        <CalcButton label="8" />
        <CalcButton label="9" />
        <CalcButton label="*" isOperator />

        {/* Fila 4-5-6 - */}
        <CalcButton label="4" />
        <CalcButton label="5" />
        <CalcButton label="6" />
        <CalcButton label="-" isOperator />

        {/* Fila 1-2-3 + */}
        <CalcButton label="1" />
        <CalcButton label="2" />
        <CalcButton label="3" />
        <CalcButton label="+" isOperator />

        {/* Fila 0 . = */}
        <CalcButton label="e" isOperator className="font-serif italic" />
        <CalcButton label="0" />
        <CalcButton label="." />
        <CalcButton label="=" onClick={handleCalculate} isAction />
      </div>
      
      <div className="mt-4 text-xs text-stone-400 text-center flex justify-between px-2">
         <span>ln = log base e</span>
         <span>log = log base 10</span>
      </div>
    </div>
  );
};

export default Calculator;