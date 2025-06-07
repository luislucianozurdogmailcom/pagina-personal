import React from "react";
import { useState } from "react";
import Graph from "../components/tools/Graph";
import Calculator from "../components/tools/Calculator";

const Tools = () => (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extralight font-sans mb-8 text-center mt-15 text-stone-100 bg-accent1 p-2 text-center ">Herramientas</h1>
        <div className="grid gap-6 grid-cols-2">
                <div
                    className="bg-accent1 col-span-2 rounded-lg shadow hover:shadow-xl shadow-orange-400 transition-shadow duration-200 overflow-hidden flex flex-col"
                >
                    <Graph />
                </div>
                {/*

                    <div
                    className="bg-accent1 md:col-span-1 col-span-2 rounded-lg shadow hover:shadow-xl shadow-orange-400 transition-shadow duration-200 overflow-hidden flex flex-col"
                    >
                    <Calculator />
                </div>
                */}
        </div>
    </div>
);

export default Tools;