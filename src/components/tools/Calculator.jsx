import React, { useState, useEffect } from 'react';
import * as math from 'mathjs';

const Calculator = () => {
  // Estados principales de la calculadora
  const [display, setDisplay] = useState('0');
  const [secondaryDisplay, setSecondaryDisplay] = useState('');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memory, setMemory] = useState(null);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [angleMode, setAngleMode] = useState('deg'); // 'deg' o 'rad'
  
  // Función para evaluar expresiones matemáticas
  const evaluateExpression = (expression) => {
    try {
      // Configurar el modo de ángulo
      const config = { angle: angleMode };
      return math.evaluate(expression, config);
    } catch (error) {
      return 'Error';
    }
  };
  
  // Manipular entrada de números
  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };
  
  // Manipular entrada de puntos decimales
  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };
  
  // Manipular operadores
  const performOperation = (operation) => {
    const inputValue = parseFloat(display);
    
    if (secondaryDisplay === '') {
      setSecondaryDisplay(`${display} ${operation} `);
      setWaitingForOperand(true);
    } else if (waitingForOperand) {
      setSecondaryDisplay(secondaryDisplay.slice(0, -2) + `${operation} `);
    } else {
      // Evaluar la expresión acumulada
      const expressionToEvaluate = secondaryDisplay + display;
      try {
        const result = evaluateExpression(expressionToEvaluate.replace(/×/g, '*').replace(/÷/g, '/'));
        
        setHistory(prevHistory => [
          ...prevHistory, 
          { expression: expressionToEvaluate, result }
        ]);
        
        setSecondaryDisplay(`${result} ${operation} `);
        setDisplay(String(result));
        setWaitingForOperand(true);
      } catch (error) {
        setDisplay('Error');
      }
    }
  };
  
  // Calcular resultado
  const calculateResult = () => {
    if (secondaryDisplay === '') return;
    
    const expressionToEvaluate = secondaryDisplay + display;
    try {
      // Reemplazar símbolos para compatibilidad con mathjs
      const preparedExpression = expressionToEvaluate.replace(/×/g, '*').replace(/÷/g, '/');
      const result = evaluateExpression(preparedExpression);
      
      setHistory(prevHistory => [
        ...prevHistory, 
        { expression: expressionToEvaluate, result: String(result) }
      ]);
      
      setSecondaryDisplay('');
      setDisplay(String(result));
      setWaitingForOperand(true);
    } catch (error) {
      setDisplay('Error');
    }
  };
  
  // Funciones científicas
  const applyScientificFunction = (func) => {
    const inputValue = parseFloat(display);
    let result;
    
    try {
      switch (func) {
        case 'sin':
        case 'cos':
        case 'tan':
        case 'log':
        case 'ln':
        case 'sqrt':
        case 'exp':
          result = evaluateExpression(`${func}(${display})`);
          break;
        case 'square':
          result = evaluateExpression(`${display}^2`);
          break;
        case 'cube':
          result = evaluateExpression(`${display}^3`);
          break;
        case 'inverse':
          result = evaluateExpression(`1/${display}`);
          break;
        case 'factorial':
          result = evaluateExpression(`factorial(${display})`);
          break;
        case 'pow10':
          result = evaluateExpression(`10^${display}`);
          break;
        default:
          return;
      }
      
      setHistory(prevHistory => [
        ...prevHistory, 
        { expression: `${func}(${display})`, result: String(result) }
      ]);
      
      setDisplay(String(result));
      setWaitingForOperand(true);
    } catch (error) {
      setDisplay('Error');
    }
  };
  
  // Limpiar calculadora
  const clearAll = () => {
    setDisplay('0');
    setSecondaryDisplay('');
    setWaitingForOperand(false);
  };
  
  // Limpiar entrada actual
  const clearEntry = () => {
    setDisplay('0');
  };
  
  // Eliminar último dígito
  const deleteLastDigit = () => {
    setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
  };
  
  // Cambiar signo
  const toggleSign = () => {
    setDisplay(display.charAt(0) === '-' ? display.slice(1) : '-' + display);
  };
  
  // Calcular porcentaje
  const calculatePercentage = () => {
    if (secondaryDisplay === '') {
      setDisplay('0');
      return;
    }
    
    try {
      const value = parseFloat(display);
      const baseValue = parseFloat(secondaryDisplay);
      const result = (baseValue * value) / 100;
      setDisplay(String(result));
    } catch (error) {
      setDisplay('Error');
    }
  };
  
  // Operaciones de memoria
  const memoryStore = () => setMemory(parseFloat(display));
  const memoryRecall = () => memory !== null && setDisplay(String(memory));
  const memoryClear = () => setMemory(null);
  const memoryAdd = () => setMemory((memory || 0) + parseFloat(display));
  const memorySubtract = () => setMemory((memory || 0) - parseFloat(display));
  
  // Cambiar modo de ángulo
  const toggleAngleMode = () => {
    setAngleMode(angleMode === 'deg' ? 'rad' : 'deg');
  };
  
  // Configuración visual de botones
  const btnStandard = "w-full py-3 text-center transition-colors rounded-lg";
  const btnNumber = `${btnStandard} bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium`;
  const btnOperation = `${btnStandard} bg-gray-200 hover:bg-gray-300 text-gray-800`;
  const btnFunction = `${btnStandard} bg-blue-100 hover:bg-blue-200 text-blue-800`;
  const btnAction = `${btnStandard} bg-blue-500 hover:bg-blue-600 text-white font-bold`;
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Calculadora Científica</h2>
      
      {/* Pantalla de la calculadora */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4 border border-gray-200">
        <div className="text-gray-600 text-sm h-6 text-right">
          {secondaryDisplay}
        </div>
        <div className="text-3xl font-medium text-right overflow-x-auto">
          {display}
        </div>
        <div className="flex justify-between items-center mt-1">
          <div className="text-xs text-gray-500">
            {memory !== null ? 'M' : ''}
          </div>
          <div className="text-xs text-gray-500">
            Mode: {angleMode.toUpperCase()}
          </div>
        </div>
      </div>
      
      {/* Botones de memoria y modo */}
      <div className="grid grid-cols-6 gap-2 mb-2">
        <button onClick={memoryClear} className={btnOperation}>MC</button>
        <button onClick={memoryRecall} className={btnOperation}>MR</button>
        <button onClick={memoryAdd} className={btnOperation}>M+</button>
        <button onClick={memorySubtract} className={btnOperation}>M-</button>
        <button onClick={memoryStore} className={btnOperation}>MS</button>
      </div>
      
      {/* Funciones científicas */}
      <div className="grid grid-cols-4 gap-2 mb-2">
        <button onClick={() => applyScientificFunction('square')} className={btnFunction}>x²</button>
        <button onClick={() => applyScientificFunction('cube')} className={btnFunction}>x³</button>
        <button onClick={() => applyScientificFunction('exp')} className={btnFunction}>exp</button>
        <button onClick={() => applyScientificFunction('pow10')} className={btnFunction}>10^x</button>
        
        <button onClick={() => applyScientificFunction('sin')} className={btnFunction}>sin</button>
        <button onClick={() => applyScientificFunction('cos')} className={btnFunction}>cos</button>
        <button onClick={() => applyScientificFunction('tan')} className={btnFunction}>tan</button>
        <button onClick={() => applyScientificFunction('inverse')} className={btnFunction}>1/x</button>
        
        <button onClick={() => applyScientificFunction('log')} className={btnFunction}>log</button>
        <button onClick={() => applyScientificFunction('ln')} className={btnFunction}>ln</button>
        <button onClick={() => applyScientificFunction('sqrt')} className={btnFunction}>√</button>
        <button onClick={() => applyScientificFunction('factorial')} className={btnFunction}>n!</button>
      </div>
      
      {/* Teclado numérico y operaciones básicas */}
      <div className="grid grid-cols-4 gap-2">
        <button onClick={clearAll} className={btnOperation}>AC</button>
        <button onClick={clearEntry} className={btnOperation}>CE</button>
        <button onClick={deleteLastDigit} className={btnOperation}>⌫</button>
        <button onClick={() => performOperation('÷')} className={btnOperation}>÷</button>
        
        <button onClick={() => inputDigit(7)} className={btnNumber}>7</button>
        <button onClick={() => inputDigit(8)} className={btnNumber}>8</button>
        <button onClick={() => inputDigit(9)} className={btnNumber}>9</button>
        <button onClick={() => performOperation('×')} className={btnOperation}>×</button>
        
        <button onClick={() => inputDigit(4)} className={btnNumber}>4</button>
        <button onClick={() => inputDigit(5)} className={btnNumber}>5</button>
        <button onClick={() => inputDigit(6)} className={btnNumber}>6</button>
        <button onClick={() => performOperation('-')} className={btnOperation}>−</button>
        
        <button onClick={() => inputDigit(1)} className={btnNumber}>1</button>
        <button onClick={() => inputDigit(2)} className={btnNumber}>2</button>
        <button onClick={() => inputDigit(3)} className={btnNumber}>3</button>
        <button onClick={() => performOperation('+')} className={btnOperation}>+</button>
        
        <button onClick={toggleSign} className={btnNumber}>±</button>
        <button onClick={() => inputDigit(0)} className={btnNumber}>0</button>
        <button onClick={inputDot} className={btnNumber}>.</button>
        <button onClick={calculateResult} className={btnAction}>=</button>
      </div>
      
      {/* Botón para mostrar/ocultar historial */}
      <div className="mt-4">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 transition-colors"
        >
          {showHistory ? 'Ocultar historial' : 'Mostrar historial'}
        </button>
      </div>
      
      {/* Historial */}
      {showHistory && (
        <div className="mt-3 border-t pt-3">
          <h3 className="font-medium mb-2">Historial</h3>
          <div className="max-h-40 overflow-y-auto">
            {history.length === 0 ? (
              <p className="text-gray-500 text-sm">No hay operaciones en el historial</p>
            ) : (
              history.map((item, index) => (
                <div 
                  key={index} 
                  className="py-1 border-b border-gray-100 text-sm"
                  onClick={() => setDisplay(item.result)}
                >
                  <div className="text-gray-600">{item.expression}</div>
                  <div className="font-medium">{item.result}</div>
                </div>
              ))
            )}
          </div>
          {history.length > 0 && (
            <button
              onClick={() => setHistory([])}
              className="mt-2 text-sm text-red-600 hover:text-red-800"
            >
              Limpiar historial
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Calculator;