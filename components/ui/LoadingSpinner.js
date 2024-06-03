import React from 'react';

export default function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="relative w-10 h-10">
                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-600 opacity-60 animate-bounce"></div>
                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-600 opacity-60 animate-bounce delay-500"></div>
            </div>
        </div>
    );
}
