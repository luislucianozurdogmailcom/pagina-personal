import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import * as math from 'mathjs';

const Graph = () => {
  // Estado para la función y sus parámetros
  const [functionType, setFunctionType] = useState('quadratic');
  const [functionText, setFunctionText] = useState('x^2');
  const [parameters, setParameters] = useState({ a: 1, b: 0, c: 0 });
  const [range, setRange] = useState({ min: -10, max: 10 });
  const [plotData, setPlotData] = useState([]);

  // Recalcular puntos cuando cambien los parámetros
  useEffect(() => {
    generatePlotData();
  }, [functionType, functionText, parameters, range]);

  // Generar datos para la gráfica
  const generatePlotData = () => {
    try {
      // Crear array de valores x
      const xValues = [];
      const step = (range.max - range.min) / 200;
      for (let x = range.min; x <= range.max; x += step) {
        xValues.push(x);
      }
      
      // Calcular valores y según el tipo de función
      let yValues;
      let displayFunction;
      const { a, b, c } = parameters;
      
      if (functionType === 'quadratic') {
        yValues = xValues.map(x => a * x * x + b * x + c);
        displayFunction = `${a}x² + ${b}x + ${c}`;
      } else if (functionType === 'linear') {
        yValues = xValues.map(x => b * x + c);
        displayFunction = `${b}x + ${c}`;
      } else {
        // Función personalizada
        yValues = xValues.map(x => {
          const scope = { x };
          return math.evaluate(functionText, scope);
        });
        displayFunction = functionText;
      }
      
      setPlotData([{
        x: xValues,
        y: yValues,
        type: 'scatter',
        mode: 'lines',
        marker: { color: '#3b82f6' },
        name: displayFunction
      }]);
    } catch (error) {
      console.error('Error al graficar la función:', error);
    }
  };
  
  // Manejar cambios en los parámetros
  const handleParamChange = (param, value) => {
    setParameters(prev => ({
      ...prev,
      [param]: parseFloat(value) || 0
    }));
  };
  
  return (
    <div className="bg-stone-700 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-stone-100 text-center">Graficador de Funciones</h2>
      
      {/* Selector de tipo de función */}
      <div className="mb-4">
        <label className="block text-stone-100 mb-2">Tipo de función:</label>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded transition-colors ${functionType === 'quadratic' ? 'bg-orange-400 text-white' : 'bg-stone-200'}`}
            onClick={() => setFunctionType('quadratic')}
          >
            Cuadrática (ax² + bx + c)
          </button>
          <button
            className={`px-4 py-2 rounded transition-colors ${functionType === 'linear' ? 'bg-orange-400 text-white' : 'bg-stone-200'}`}
            onClick={() => setFunctionType('linear')}
          >
            Lineal (mx + b)
          </button>
          <button
            className={`px-4 py-2 rounded transition-colors ${functionType === 'custom' ? 'bg-orange-400 text-white' : 'bg-stone-200'}`}
            onClick={() => setFunctionType('custom')}
          >
            Personalizada
          </button>
        </div>
      </div>
      
      {/* Controles según el tipo de función */}
      {functionType === 'custom' ? (
        <div className="mb-4">
          <label className="block text-stone-100 mb-2">Función f(x) =</label>
          <input
            type="text"
            value={functionText}
            onChange={(e) => setFunctionText(e.target.value)}
            className="w-full text-stone-100 p-2 border rounded"
            placeholder="Ejemplo: x^2 + sin(x)"
          />
          <p className="text-sm text-stone-100 mt-1">
            Usa operadores como +, -, *, /, ^ y funciones como sin(), cos(), sqrt(), etc.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {functionType === 'quadratic' && (
            <div>
              <label className="block text-stone-100 mb-1">a:</label>
              <input
                type="number"
                value={parameters.a}
                onChange={(e) => handleParamChange('a', e.target.value)}
                className="w-full p-2 border rounded text-stone-100"
                step="0.1"
              />
            </div>
          )}
          <div>
            <label className="block text-stone-100 mb-1">{functionType === 'quadratic' ? 'b:' : 'm:'}</label>
            <input
              type="number"
              value={parameters.b}
              onChange={(e) => handleParamChange('b', e.target.value)}
              className="w-full p-2 border rounded text-stone-100"
              step="0.1"
            />
          </div>
          <div>
            <label className="block text-stone-100 mb-1">{functionType === 'quadratic' ? 'c:' : 'b:'}</label>
            <input
              type="number"
              value={parameters.c}
              onChange={(e) => handleParamChange('c', e.target.value)}
              className="w-full p-2 border rounded text-stone-100"
              step="0.1"
            />
          </div>
        </div>
      )}
      
      {/* Controles de rango */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-stone-100 mb-1">Mínimo X:</label>
          <input
            type="number"
            value={range.min}
            onChange={(e) => setRange(prev => ({ ...prev, min: parseFloat(e.target.value) || -10 }))}
            className="w-full p-2 border rounded text-stone-100"
          />
        </div>
        <div>
          <label className="block text-stone-100 mb-1">Máximo X:</label>
          <input
            type="number"
            value={range.max}
            onChange={(e) => setRange(prev => ({ ...prev, max: parseFloat(e.target.value) || 10 }))}
            className="w-full p-2 border rounded text-stone-100"
          />
        </div>
      </div>
      
      {/* Gráfico */}
      <div className="border rounded p-2 bg-accent1">
        <Plot
          data={plotData}
          layout={{
            title: `f(x) = ${functionType === 'quadratic' ? `${parameters.a}x² + ${parameters.b}x + ${parameters.c}` : 
                   functionType === 'linear' ? `${parameters.b}x + ${parameters.c}` : 
                   functionText}`,
            xaxis: { title: 'x' },
            yaxis: { title: 'f(x)' },
            autosize: true,
            height: 400,
            margin: { l: 50, r: 50, b: 50, t: 80 }
          }}
          config={{
            displayModeBar: true,
            responsive: true
          }}
          style={{ width: '100%' }}
        />
      </div>
      
      <div className="mt-4 text-sm text-stone-100">
        <p>* El gráfico es interactivo: prueba a hacer zoom, pan, o guardar la imagen.</p>
      </div>
    </div>
  );
};

export default Graph;