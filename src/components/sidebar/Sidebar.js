import Link from 'next/link';
import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-64 border border-r border-gray-300 overflow-y-auto">
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/button">Button</Link>
        </li>
      </ul>
    </div>
  );
}
