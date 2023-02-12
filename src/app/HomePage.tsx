"use client";

import { SVGProps, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import avatarImage from '@/images/avatar.jpg'
import clsx from 'clsx';
import { ThemeSelector } from '@/components/ThemeSelector';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 isolate">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="https://gjohns.xyz" target="_blank" rel="noreferrer" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={avatarImage}
                alt=""
                className={clsx(
                  'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
                  'h-9 w-9'
                )}
                priority
              />
            </Link>
          </div>
          <ThemeSelector className="mr-8" />
        </nav>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                My application for Frontend Engineer
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
                Redefining the user experience for Messari Governor, I reimagined the Governor platform with a focus on simplicity and clarity. 
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <Link
                  href="/governor"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Visit the new Governor
                </Link>
                <Link href="https://github.com/gjohnsx/messari-governor" target="_blank" rel="noreferrer" className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  Github <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
