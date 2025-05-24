import React from "react";
import { FiPhone, FiMail, FiLinkedin, FiOctagon } from "react-icons/fi";

const contactMethods = [
    {
        icon: <FiPhone className="text-3xl text-orange-600" />,
        title: "Teléfono",
        value: "+54 9 11 3562-1000",
        link: "tel:+5491112345678",
    },
    {
        icon: <FiMail className="text-3xl text-orange-600" />,
        title: "Email personal",
        value: "luislucianozurdo@gmail.com",
        link: "mailto:luislucianozurdo@gmail.com",
    },
    {
        icon: <FiMail className="text-3xl text-orange-600" />,
        title: "Email institucional",
        value: "llzurdo@campus.ungs.edu.ar",
        link: "mailto:llzurdo@campus.ungs.edu.ar",
    },
    {
        icon: <FiLinkedin className="text-3xl text-orange-600" />,
        title: "LinkedIn",
        value: "linkedin.com/in/luis-luciano-zurdo/",
        link: "https://www.linkedin.com/in/luis-luciano-zurdo/",
    },
];

const Contact = () => (
    <div className="flex items-center justify-center my-20 bg-dark px-4">
        <div className="w-full max-w-lg grid gap-6 p-4 bg-accent1 rounded-xl m-4">
            <h2 className="text-2xl my-4 font-bold font-sans text-stone-700 text-center">
                Contactame Aqui 
            </h2>
            {contactMethods.map((method) => (
                <a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-accent1 rounded-lg shadow-xl hover:shadow-orange-500 transition-all duration-300 p-6 hover:bg-orange-50"
                >
                    {method.icon}
                    <div>
                        <div className="text-lg font-semibold text-slate-700">{method.title}</div>
                        <div className="text-stone-700">{method.value}</div>
                    </div>
                </a>
            ))}
        </div>
    </div>
);

export default Contact;
