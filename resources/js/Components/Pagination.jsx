import React from 'react';
import { Link } from '@inertiajs/react';
  
export default function Pagination({ links }) {
  
    return (
        <nav className="text-center mt-4">
            {links.map((link) => (
                <Link
                href={link.url || ""}
                key={link.label}
                className={
                    "inline-block py-2 px-3 rounded-lg bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-lg " +
                    (link.active ? "bg-gray-950 text-white" : " ") +
                    (link.url ? " hover:bg-gray-800 " :
                        "text-gray-500 cursor-not-allowed ")
                    
                }
                dangerouslySetInnerHTML={{__html: link.label}}
                ></Link>
            ))}
        </nav>
    );
}