import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const NavLink = ({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={twMerge(
        clsx('flex items-center gap-4 p-3 rounded-full hover:bg-valentine-light/10 transition-colors text-xl',
          {
            'font-bold': isActive,
          }
        )
      )}
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </Link>
  );
};

export const Navigation: FC = () => {
  return (
    <nav className="w-[275px] px-2">
      <div className="flex flex-col sticky top-0 h-screen py-1">
        <div className="flex justify-center md:justify-start p-3">
          <Image
            src="/heart.svg"
            alt="Logo"
            width={32}
            height={32}
            className="text-valentine-light"
          />
        </div>

        <div className="space-y-1">
          <NavLink
            href="/feed"
            label="Home"
            icon={
              <svg className="w-7 h-7 text-valentine-light" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.1L1 12h3v9h6v-7h4v7h6v-9h3L12 2.1zm0 4.3l6 6v7h-2v-7H8v7H6v-7l6-6z" />
              </svg>
            }
          />
          <NavLink
            href="/profile"
            label="Profile"
            icon={
              <svg className="w-7 h-7 text-valentine-light" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            }
          />
        </div>
      </div>
    </nav>
  );
}; 