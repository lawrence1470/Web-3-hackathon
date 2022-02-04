import React from 'react';

const Logo = () => {
    return (
        <div>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
               aria-label="logo">
                <svg width="95" height="94" viewBox="0 0 95 94" className="w-6 h-auto text-indigo-500"
                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96 0V47L48 94H0V47L48 0H96Z"/>
                </svg>

                The Oyster
            </a>
        </div>
    );
};

export default Logo;