import React, { useState } from 'react';


export default function MaterialInput({ label, type, value, onChange }) {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <div className="relative">
            <input
                type={type ? type : 'text'}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`block w-full pt-6 px-4 pb-2 text-white bg-[rgba(255,255,255,0)] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-white ${isFocused || value ? 'pt-4' : ''}`}
                placeholder={isFocused ? '' : ""}
            />
            <label
                htmlFor="floating_input"
                className={`absolute left-4 top-4 translate-all duration-300  ${isFocused || value ? ' top-2 text-xs text-[rgba(255,255,255,0.7)]' : 'text-[rgba(255,255,255,0.7)]'}`}
            >
                {label}
            </label>
        </div>
    );
}
