import './header.style.css';
import Image from 'next/image';
import * as React from 'react';

function Header() {
    return (
        <div className="header">
            <Image src="/logo.svg" width={150} height={50} className="logo" alt="logo" />
        </div>
    );
}

export default Header;
