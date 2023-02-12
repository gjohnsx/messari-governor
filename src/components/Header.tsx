"use client";

import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import {
  ArchiveBoxArrowDownIcon,
  Bars3Icon,
  BookOpenIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CloudIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  GlobeAmericasIcon,
  HomeIcon,
  LightBulbIcon,
  ListBulletIcon,
  QuestionMarkCircleIcon,
  RectangleGroupIcon,
  Square3Stack3DIcon,
  TableCellsIcon,
  TicketIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
  MoonIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { SVGProps } from "react";
import { ThemeSelector } from "./ThemeSelector";

const mobileNav = {
  myAccount: [
    { name: "Account Overview", icon: HomeIcon, href: "#" },
    { name: "Profile Settings", icon: Cog6ToothIcon, href: "#" },
    { name: "Manage Plan & Billing", icon: CreditCardIcon, href: "#" },
    { name: "API Key", icon: CloudIcon, href: "#" },
  ],
  data: [
    { name: "Assets Screener", icon: TableCellsIcon, href: "#" },
    { name: "Charts", icon: ChartBarIcon, href: "#" },
    { name: "Watchlists", icon: ListBulletIcon, href: "#" },
    { name: "Fundraising Data", icon: CurrencyDollarIcon, href: "#" },
    { name: "Protocol Metrics", icon: Square3Stack3DIcon, href: "#" },
  ],
  research: [
    { name: "All Research", icon: GlobeAmericasIcon, href: "#" },
    { name: "Pro Research", icon: RectangleGroupIcon, href: "#" },
    { name: "Enterprise Research", icon: BuildingOfficeIcon, href: "#" },
    { name: "Protocol Reporting", icon: CurrencyDollarIcon, href: "#" },
  ],
  governor: [
    { name: "DAOs", icon: GlobeAltIcon, href: "#" },
    { name: "Proposals", icon: ArchiveBoxArrowDownIcon, href: "#" },
    { name: "Tools", icon: WrenchScrewdriverIcon, href: "#" },
  ],
  more: [
    { name: "Messari Pro", icon: InformationCircleIcon, href: "#" },
    { name: "Messari Enterprise", icon: InformationCircleIcon, href: "#" },
    { name: "Messari Protocol Services", icon: InformationCircleIcon, href: "#" },
    { name: "Messari Asset Intelligence", icon: InformationCircleIcon, href: "#" },
    { name: "Mainnet", icon: TicketIcon, href: "#" },
    { name: "Crypto Theses for 2023", icon: BookOpenIcon, href: "#" },
    { name: "Newsletter", icon: EnvelopeIcon, href: "#" },
    { name: "API", icon: CloudIcon, href: "#" },
    { name: "About Us", icon: UserGroupIcon, href: "#" },
    { name: "Careers", icon: BriefcaseIcon, href: "#" },
    { name: "Support", icon: QuestionMarkCircleIcon, href: "#" },
  ],
};

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-[#233a4f] dark:bg-messari-500">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <div className="flex lg:flex-1">
                    <Link href="/governor" className="-m-1.5 p-1.5">
                      <span className="sr-only">Messari</span>
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_652_19018)">
                          <path
                            d="M0 0V36L9.27391 26.7825V9.21751L0 0Z"
                            fill="white"
                          />
                          <path
                            d="M18.2609 18.15L13.6246 13.542V36.0002L22.8971 26.7827V13.542L18.2609 18.15Z"
                            fill="white"
                          />
                          <path
                            d="M27.2478 9.21751V36L36.5217 26.7825V0L27.2478 9.21751Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_652_19018">
                            <rect width="36.5217" height="36" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                      href="#"
                      className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      Data
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      Research
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      Intel
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      Governor
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      News
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MagnifyingGlassIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 border border-transparent rounded-md bg-messari-600 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="Search the Messari Database"
                      type="search"
                      autoComplete="off"
                    />
                  </div>
                </div>
                    <button 
                      id="search"
                      className="md:hidden"
                    >
                      <MagnifyingGlassIcon
                          className="w-5 h-5 ml-auto text-gray-400"
                          aria-hidden="true"
                      />
                    </button>
              </div>

              <ThemeSelector className="ml-3" />

              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              <div className="hidden md:ml-4 md:block">
                <div className="flex items-center space-x-2">
                  <button
                    className="hidden px-4 py-2 font-bold text-white rounded sm:block hover:bg-messari-400"
                    onClick={() => console.log("Sign up")}
                  >
                    Log In
                  </button>
                  <button
                    className="hidden px-4 py-2 font-bold text-white rounded bg-messari-blue-light sm:block hover:bg-messari-blue-dark"
                    onClick={() => console.log("Sign up")}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="flex items-center justify-center py-2 space-x-2 bg-messari-300">
              <button
                className="px-4 py-2 font-bold text-white border border-gray-400 rounded hover:bg-messari-400"
                onClick={() => console.log("Sign up")}
              >
                Log In
              </button>
              <button
                className="px-4 py-2 font-bold text-white rounded bg-messari-blue-light hover:bg-messari-blue-dark"
                onClick={() => console.log("Sign up")}
              >
                Sign Up
              </button>
            </div>
            
            <div className="flex items-center justify-center w-full py-2 space-x-2">
              {/* <ModeToggle /> */}
              <span className="inline-flex text-white rounded-md shadow-sm isolate">
                <button
                  type="button"
                  className="relative inline-flex items-center px-6 py-1 text-sm font-medium uppercase border border-gray-300 rounded-l focus:z-10 focus:border-messari-blue-light focus:outline-none focus:ring-1 focus:ring-messari-blue-light"
                >
                  <LightBulbIcon className="w-4 h-4 mr-2 -ml-1" />
                  <span>light</span>
                </button>
                <button
                  type="button"
                  className="relative inline-flex items-center px-6 py-1 -ml-px text-sm font-medium uppercase border border-gray-300 focus:z-10 focus:border-messari-blue-light focus:outline-none focus:ring-1 focus:ring-messari-blue-light"
                >
                  <MoonIcon className="w-4 h-4 mr-2 -ml-1" />
                  <span>dark</span>
                </button>
                <button
                  type="button"
                  className="relative inline-flex items-center px-6 py-1 -ml-px text-sm font-medium uppercase border border-gray-300 rounded-r focus:z-10 focus:border-messari-blue-light focus:outline-none focus:ring-1 focus:ring-messari-blue-light"
                >
                  <Cog6ToothIcon className="w-4 h-4 mr-2 -ml-1" />
                  <span>system</span>
                </button>
              </span>
            </div>

            {/* My Account */}
            <div className="py-1 border-t border-gray-700">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-between w-full p-2 text-white hover:bg-gray-700 focus:outline-none">
                      <span className="text-white">My Account</span>
                      {open ? (
                        <ChevronUpIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronDownIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="py-2 pl-8 text-white">
                      {mobileNav.myAccount.map((item) => (
                        <Link key={item.name} href={item.href} className="mb-4">
                          <div className="flex items-center mb-4 space-x-2">
                            <item.icon className="w-5 h-5" aria-hidden="true" />
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            {/* Data */}
            <div className="py-1 border-t border-gray-700">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-between w-full p-2 text-white hover:bg-gray-700 focus:outline-none">
                      <span className="text-white">Data</span>
                      {open ? (
                        <ChevronUpIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronDownIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="py-2 pl-8 text-white">
                      {mobileNav.data.map((item) => (
                        <Link key={item.name} href={item.href} className="mb-4">
                          <div className="flex items-center mb-4 space-x-2">
                            <item.icon className="w-5 h-5" aria-hidden="true" />
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            {/* Research */}
            <div className="py-1 border-t border-gray-700">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-between w-full p-2 text-white hover:bg-gray-700 focus:outline-none">
                      <span className="text-white">Research</span>
                      {open ? (
                        <ChevronUpIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronDownIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="py-2 pl-8 text-white">
                      {mobileNav.research.map((item) => (
                        <Link key={item.name} href={item.href} className="mb-4">
                          <div className="flex items-center mb-4 space-x-2">
                            <item.icon className="w-5 h-5" aria-hidden="true" />
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            {/* Intel */}
            <div className="py-1 border-t border-gray-700">
              <Disclosure.Button
                as="a"
                href="#"
                className="flex items-center justify-between w-full p-2 text-white hover:bg-gray-700 focus:outline-none"
              >
                Intel
              </Disclosure.Button>
            </div>

            {/* Governor */}
            <div className="py-1 border-t border-gray-700">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-between w-full p-2 text-white hover:bg-gray-700 focus:outline-none">
                      <span className="text-white">Governor</span>
                      {open ? (
                        <ChevronUpIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronDownIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="py-2 pl-8 text-white">
                      {mobileNav.governor.map((item) => (
                        <Link key={item.name} href={item.href} className="mb-4">
                          <div className="flex items-center mb-4 space-x-2">
                            <item.icon className="w-5 h-5" aria-hidden="true" />
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            {/* News */}
            <div className="py-1 border-t border-gray-700">
              <Disclosure.Button
                as="a"
                href="#"
                className="flex items-center justify-between w-full p-2 text-white hover:bg-gray-700 focus:outline-none"
              >
                News
              </Disclosure.Button>
            </div>

            {/* More */}
            <div className="py-1 border-t border-gray-700">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-between w-full p-2 text-white hover:bg-gray-700 focus:outline-none">
                      <span className="text-white">More</span>
                      {open ? (
                        <ChevronUpIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronDownIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="py-2 pl-8 text-white">
                      {mobileNav.more.map((item) => (
                        <Link key={item.name} href={item.href} className="mb-4">
                          <div className="flex items-center mb-4 space-x-2">
                            <item.icon className="w-5 h-5" aria-hidden="true" />
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="py-1 border-t border-gray-800">
            <div className="p-4 mx-4 my-4 text-white rounded-md bg-messari-blue-dark/50">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium">We&apos;re Hiring</h3>
                  <div className="mt-2 text-sm">
                    <p>
                      Join our mission to organize and contextualize all crypto information at a global scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
