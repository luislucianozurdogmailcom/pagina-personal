import React, { useState } from "react";

const LiveExam = ({ examData }) => {
    const [answers, setAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    // Maneja la selección de una opción
    const handleOptionSelect = (questionId, selectedOption) => {
        if (!isSubmitted) {
            setAnswers({
                ...answers,
                [questionId]: selectedOption
            });
        }
    };

    // Evalúa el examen al hacer clic en "Finalizar"
    const handleSubmit = () => {
        let currentScore = 0;
        examData.questions.forEach((q) => {
            if (answers[q.id] === q.correctAnswer) {
                currentScore++;
            }
        });
        setScore(currentScore);
        setIsSubmitted(true);
    };

    // Reinicia el estado para volver a intentar
    const handleRetry = () => {
        setAnswers({});
        setIsSubmitted(false);
        setScore(0);
    };

    if (!examData) return <div className="text-center mt-10">Cargando examen...</div>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Cabecera del examen */}
            <div className="bg-accent1 p-6 rounded-xl shadow-sm border-2 border-stone-200 mb-8">
                <h1 className="text-3xl font-semibold text-stone-900 mb-2">{examData.title}</h1>
                <p className="text-stone-700">{examData.description}</p>
            </div>

            {/* Lista de Preguntas */}
            <div className="space-y-8">
                {examData.questions.map((q, index) => (
                    <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                        <h2 className="text-xl font-medium text-stone-800 mb-4">
                            {index + 1}. {q.text}
                        </h2>
                        
                        <div className="space-y-3">
                            {q.options.map((option, i) => {
                                const isSelected = answers[q.id] === option;
                                const isCorrect = q.correctAnswer === option;
                                
                                // Lógica de colores para cuando el examen ya fue entregado
                                let optionClasses = "p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ";
                                
                                if (!isSubmitted) {
                                    optionClasses += isSelected 
                                        ? "border-orange-400 bg-orange-50 text-orange-900" 
                                        : "border-stone-200 hover:border-orange-300 bg-stone-50 text-stone-700";
                                } else {
                                    if (isCorrect) {
                                        optionClasses += "border-green-500 bg-green-50 text-green-900 font-semibold"; // Correcta
                                    } else if (isSelected && !isCorrect) {
                                        optionClasses += "border-red-500 bg-red-50 text-red-900 line-through"; // Incorrecta seleccionada
                                    } else {
                                        optionClasses += "border-stone-200 bg-stone-50 text-stone-400 opacity-50"; // Resto
                                    }
                                }

                                return (
                                    <div 
                                        key={i} 
                                        onClick={() => handleOptionSelect(q.id, option)}
                                        className={optionClasses}
                                    >
                                        <div className="flex items-center">
                                            <div className={`w-5 h-5 rounded-full border-2 mr-3 flex justify-center items-center
                                                ${isSelected && !isSubmitted ? 'border-orange-400' : 'border-stone-300'}
                                                ${isSubmitted && isCorrect ? 'border-green-500' : ''}
                                                ${isSubmitted && isSelected && !isCorrect ? 'border-red-500' : ''}
                                            `}>
                                                {isSelected && !isSubmitted && <div className="w-2.5 h-2.5 bg-orange-400 rounded-full"></div>}
                                                {isSubmitted && isCorrect && <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>}
                                                {isSubmitted && isSelected && !isCorrect && <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>}
                                            </div>
                                            <span>{option}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Controles de envío y resultados */}
            <div className="mt-8 flex flex-col items-center">
                {!isSubmitted ? (
                    <button 
                        onClick={handleSubmit}
                        disabled={Object.keys(answers).length < examData.questions.length}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Entregar Examen
                    </button>
                ) : (
                    <div className="bg-stone-800 text-white p-6 rounded-xl text-center shadow-lg w-full max-w-md">
                        <h3 className="text-2xl font-bold mb-2">Resultados</h3>
                        <p className="text-xl mb-4">
                            Puntaje: <span className={score >= (examData.questions.length / 2) ? "text-green-400" : "text-red-400"}>
                                {score} / {examData.questions.length}
                            </span>
                        </p>
                        <button 
                            onClick={handleRetry}
                            className="bg-stone-600 hover:bg-stone-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                        >
                            Reintentar Examen
                        </button>
                    </div>
                )}
                {!isSubmitted && Object.keys(answers).length < examData.questions.length && (
                    <p className="text-stone-500 mt-3 text-sm">Responde todas las preguntas para poder entregar.</p>
                )}
            </div>
        </div>
    );
};

export default LiveExam;