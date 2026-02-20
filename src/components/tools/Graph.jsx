import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import * as math from 'mathjs';

const Graph = () => {
  // ... (MANTENÉ TODO TU ESTADO Y LÓGICA DE generatePlotData Y handleParamChange IGUAL) ...
  const [functionType, setFunctionType] = useState('custom');
  const [functionText, setFunctionText] = useState('x^2+sin(5*x)+1');
  const [parameters, setParameters] = useState({ a: 1, b: 0, c: 0 });
  const [range, setRange] = useState({ min: -5, max: 5 });
  const [plotData, setPlotData] = useState([]);

  useEffect(() => {
    generatePlotData();
  }, [functionType, functionText, parameters, range]);

  const generatePlotData = () => {
    try {
      const xValues = [];
      const step = (range.max - range.min) / 200;
      for (let x = range.min; x <= range.max; x += step) {
        xValues.push(x);
      }
      let yValues = xValues.map(x => {
        const scope = { x };
        return math.evaluate(functionText, scope);
      });
      const displayFunction = functionText;
      
      setPlotData([{
        x: xValues,
        y: yValues,
        type: 'scatter',
        mode: 'lines',
        line: { color: '#fb923c', width: 3 }, // Color naranja (accent1)
        name: displayFunction
      }]);
    } catch (error) {
      console.error('Error al graficar la función:', error);
    }
  };
  
  const handleParamChange = (param, value) => {
    setParameters(prev => ({ ...prev, [param]: parseFloat(value) || 0 }));
  };
  
  return (
    <div className="flex flex-col h-full w-full">
      <h2 className="text-xl font-bold mb-6 text-gray-100 flex items-center">
        <svg className="w-5 h-5 mr-2 text-accent1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
        Graficador de Funciones
      </h2>
      
      {/* Controles */}
      <div className="mb-6 bg-white/5 p-4 rounded-2xl border border-white/5">
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2 font-mono uppercase tracking-wider">Función f(x) =</label>
          <input
            type="text"
            value={functionText}
            onChange={(e) => setFunctionText(e.target.value)}
            className="w-full bg-[#0a0a0a] text-gray-100 p-3 rounded-xl border border-white/10 focus:border-accent1 focus:ring-1 focus:ring-accent1 outline-none font-mono transition-colors"
            placeholder="Ejemplo: x^2 + sin(x)"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400 text-xs mb-1 font-mono uppercase tracking-wider">Mínimo X</label>
            <input
              type="number"
              value={range.min}
              onChange={(e) => setRange(prev => ({ ...prev, min: parseFloat(e.target.value) || 0 }))}
              className="w-full bg-[#0a0a0a] text-gray-100 p-2.5 rounded-lg border border-white/10 focus:border-accent1 outline-none font-mono text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-xs mb-1 font-mono uppercase tracking-wider">Máximo X</label>
            <input
              type="number"
              value={range.max}
              onChange={(e) => setRange(prev => ({ ...prev, max: parseFloat(e.target.value) || 0 }))}
              className="w-full bg-[#0a0a0a] text-gray-100 p-2.5 rounded-lg border border-white/10 focus:border-accent1 outline-none font-mono text-sm"
            />
          </div>
        </div>
      </div>
      
      {/* Gráfico Adaptado a Dark Mode */}
      <div className="flex-grow bg-[#0a0a0a] rounded-2xl border border-white/10 p-2 overflow-hidden shadow-inner flex flex-col min-h-[300px] xl:min-h-[400px]">
        <Plot
          data={plotData}
          layout={{
            paper_bgcolor: 'transparent', // Fondo exterior transparente
            plot_bgcolor: 'transparent',  // Fondo interior transparente
            font: { color: '#9ca3af' },   // Textos grises
            xaxis: { 
                title: 'Eje X',
                gridcolor: '#27272a',     // Cuadrícula oscura
                zerolinecolor: '#52525b', // Línea del 0 destacada
                zerolinewidth: 2
            },
            yaxis: { 
                title: 'f(x)',
                gridcolor: '#27272a',
                zerolinecolor: '#52525b',
                zerolinewidth: 2
            },
            autosize: true,
            margin: { l: 40, r: 20, b: 40, t: 20 }, // Márgenes reducidos
            hovermode: 'closest'
          }}
          config={{
            displayModeBar: false, // Ocultamos la barra superior para un look más limpio
            responsive: true
          }}
          style={{ width: '100%', height: '100%', minHeight: '300px' }}
          useResizeHandler={true}
        />
      </div>
      
      <p className="mt-4 text-[10px] text-gray-500 text-center font-mono uppercase tracking-widest">
        Interactuá con el gráfico arrastrando para hacer zoom o paneo.
      </p>
    </div>
  );
};

export default Graph;