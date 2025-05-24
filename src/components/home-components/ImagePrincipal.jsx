import React from 'react';


const ImagePrincipal = ({ src, alt }) => {
    return (
        <div className="md:block hidden flex justify-center items-center bg-dark md:col-span-1 md:py-40 col-span-2">
            <div className="max-w-3/4 aspect-square max-h-3/4 mx-auto border border-accent1 bg-gradient-to-r from-dark to-purple-500 border-4 rounded-full overflow-hidden flex justify-center items-center relative "> 
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default ImagePrincipal;
