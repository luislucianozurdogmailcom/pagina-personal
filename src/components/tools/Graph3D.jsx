import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import * as math from 'mathjs';

const Graph3D = () => {
  const [functionText, setFunctionText] = useState('sin(sqrt(x^2 + y^2))');
  const [rangeX, setRangeX] = useState({ min: -10, max: 10 });
  const [rangeY, setRangeY] = useState({ min: -10, max: 10 });
  const [plotData, setPlotData] = useState([]);

  useEffect(() => {
    generatePlotData();
  }, [functionText, rangeX, rangeY]);

  const generatePlotData = () => {
    try {
      // --- SOLUCIÓN DEL BUG ---
      // Si alguno de los rangos es 0, negativo o inválido, evitamos el bucle infinito.
      if (rangeX.max <= rangeX.min || rangeY.max <= rangeY.min) {
          setPlotData([]);
          return;
      }

      const steps = 40; 
      const xValues = [];
      const yValues = [];
      const zValues = [];

      const stepX = (rangeX.max - rangeX.min) / steps;
      for (let x = rangeX.min; x <= rangeX.max; x += stepX) {
        xValues.push(x);
      }

      const stepY = (rangeY.max - rangeY.min) / steps;
      for (let y = rangeY.min; y <= rangeY.max; y += stepY) {
        yValues.push(y);
      }

      for (let i = 0; i < yValues.length; i++) {
        const zRow = [];
        for (let j = 0; j < xValues.length; j++) {
          const scope = { x: xValues[j], y: yValues[i] };
          zRow.push(math.evaluate(functionText, scope));
        }
        zValues.push(zRow);
      }

      setPlotData([{
        z: zValues,
        x: xValues,
        y: yValues,
        type: 'surface',
        colorscale: 'Oranges', 
        showscale: false, 
        contours: {
            z: { show: true, usecolormap: true, highlightcolor: "#ffffff", project: { z: true } }
        }
      }]);
    } catch (error) {
      console.error('Error al graficar la función 3D:', error);
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      <h2 className="text-xl font-bold mb-6 text-gray-100 flex items-center">
        <svg className="w-5 h-5 mr-2 text-accent1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
        Graficador 3D (Superficies)
      </h2>
      
      <div className="mb-6 bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-4 items-center">
        <div className="w-full md:w-1/2">
          <label className="block text-gray-400 text-sm mb-2 font-mono uppercase tracking-wider">Función f(x, y) =</label>
          <input
            type="text"
            value={functionText}
            onChange={(e) => setFunctionText(e.target.value)}
            className="w-full bg-[#0a0a0a] text-gray-100 p-3 rounded-xl border border-white/10 focus:border-accent1 focus:ring-1 focus:ring-accent1 outline-none font-mono transition-colors"
            placeholder="Ejemplo: sin(x) * cos(y)"
          />
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div>
                <label className="block text-gray-400 text-[10px] mb-1 font-mono uppercase tracking-wider">Rango X (Min / Max)</label>
                <div className="flex space-x-2">
                    <input type="number" value={rangeX.min} onChange={(e) => setRangeX(prev => ({ ...prev, min: e.target.value === '' ? '' : parseFloat(e.target.value) }))} className="w-full bg-[#0a0a0a] text-gray-100 p-2.5 rounded-lg border border-white/10 outline-none font-mono text-sm" />
                    <input type="number" value={rangeX.max} onChange={(e) => setRangeX(prev => ({ ...prev, max: e.target.value === '' ? '' : parseFloat(e.target.value) }))} className="w-full bg-[#0a0a0a] text-gray-100 p-2.5 rounded-lg border border-white/10 outline-none font-mono text-sm" />
                </div>
            </div>
            <div>
                <label className="block text-gray-400 text-[10px] mb-1 font-mono uppercase tracking-wider">Rango Y (Min / Max)</label>
                <div className="flex space-x-2">
                    <input type="number" value={rangeY.min} onChange={(e) => setRangeY(prev => ({ ...prev, min: e.target.value === '' ? '' : parseFloat(e.target.value) }))} className="w-full bg-[#0a0a0a] text-gray-100 p-2.5 rounded-lg border border-white/10 outline-none font-mono text-sm" />
                    <input type="number" value={rangeY.max} onChange={(e) => setRangeY(prev => ({ ...prev, max: e.target.value === '' ? '' : parseFloat(e.target.value) }))} className="w-full bg-[#0a0a0a] text-gray-100 p-2.5 rounded-lg border border-white/10 outline-none font-mono text-sm" />
                </div>
            </div>
        </div>
      </div>
      
      <div className="flex-grow bg-[#0a0a0a] rounded-2xl border border-white/10 p-2 overflow-hidden shadow-inner flex flex-col min-h-[400px] xl:min-h-[500px]">
        <Plot
          data={plotData}
          layout={{
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#9ca3af', family: 'monospace' },
            scene: {
                xaxis: { 
                    title: 'Eje X', gridcolor: '#27272a', zerolinecolor: '#fb923c', 
                    backgroundcolor: 'transparent', showbackground: false 
                },
                yaxis: { 
                    title: 'Eje Y', gridcolor: '#27272a', zerolinecolor: '#fb923c', 
                    backgroundcolor: 'transparent', showbackground: false 
                },
                zaxis: { 
                    title: 'f(x, y)', gridcolor: '#27272a', zerolinecolor: '#fb923c', 
                    backgroundcolor: 'transparent', showbackground: false 
                },
                bgcolor: 'transparent'
            },
            autosize: true,
            margin: { l: 0, r: 0, b: 0, t: 0 },
            hovermode: 'closest'
          }}
          config={{
            displayModeBar: false,
            responsive: true
          }}
          style={{ width: '100%', height: '100%', minHeight: '400px' }}
          useResizeHandler={true}
        />
      </div>
      
      <p className="mt-4 text-[10px] text-gray-500 text-center font-mono uppercase tracking-widest">
        Click izquierdo para rotar. Click derecho para paneo. Scroll para zoom.
      </p>
    </div>
  );
};

export default Graph3D;