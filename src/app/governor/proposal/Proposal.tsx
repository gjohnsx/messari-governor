"use client";

import {
  BarsArrowUpIcon,
  CheckBadgeIcon,
  StarIcon,
  ChevronLeftIcon,
  ArrowRightOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleLeftRightIcon,
  ArchiveBoxArrowDownIcon,
  ArrowPathIcon,
  CheckIcon
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3CenterLeftIcon,
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import daoLogo from "@/images/fwb.png";

const cards = [
  { name: "Summary", icon: ScaleIcon, amount: "$30,659.45" },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  // More transactions...
];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

const projects = [
  {
    name: "Workcation",
    href: "#",
    siteHref: "#",
    repoHref: "#",
    repo: "debbielewis/workcation",
    tech: "Laravel",
    lastDeploy: "3h ago",
    location: "United states",
    starred: true,
    active: true,
  },
  {
    name: "Workcation",
    href: "#",
    siteHref: "#",
    repoHref: "#",
    repo: "debbielewis/workcation",
    tech: "Laravel",
    lastDeploy: "3h ago",
    location: "United states",
    starred: true,
    active: true,
  },
  {
    name: "Workcation",
    href: "#",
    siteHref: "#",
    repoHref: "#",
    repo: "debbielewis/workcation",
    tech: "Laravel",
    lastDeploy: "3h ago",
    location: "United states",
    starred: true,
    active: true,
  },
  // More projects...
];
const activityItems = [
  {
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },
  {
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },
  {
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },
  // More items...
];



enum ProposalState {
    ActiveVote = "Active Vote",
    Succeeded = "Succeeded",
    Failed = "Failed",
    PreliminaryDiscussion = "Preliminary Discussion"
};

export default function Proposal() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [proposalStatus, setProposalStatus] = useState<ProposalState>(ProposalState.PreliminaryDiscussion);

  function ProposalStatusBadge() {
    const statuses = [
        {
            state: "Active Vote",
            colorClasses: "bg-blue-100 text-blue-800",
            icon: <ArchiveBoxArrowDownIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-blue-400" aria-hidden="true" />
        },
        {
            state: "Succeeded",
            colorClasses: "bg-green-100 text-green-800",
            icon: <CheckIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" aria-hidden="true" />
        },
        {
            state: "Failed",
            colorClasses: "bg-red-100 text-red-800",
            icon: <XMarkIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-red-400" aria-hidden="true" />
        },
        {
            state: "Preliminary Discussion",
            colorClasses: "bg-gray-100 text-gray-800",
            icon: <ChatBubbleLeftRightIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
        },
    ];

    return (
        // return the correct badge based on the proposalStatus
        <dd className="flex items-center text-sm font-medium capitalize text-gray-100 sm:mr-6">
            <span className={clsx(statuses.find(status => status.state === proposalStatus)?.colorClasses, "inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium")}>
                {statuses.find(status => status.state === proposalStatus)?.icon}
                {proposalStatus}
            </span>
        </dd>
    )
};

  const debugChangeStatus = () => {
    // set proposalStatus to whatever is the next state
    switch (proposalStatus) {
        case ProposalState.PreliminaryDiscussion:
            setProposalStatus(ProposalState.ActiveVote);
            break;
        case ProposalState.ActiveVote:
            setProposalStatus(ProposalState.Succeeded);
            break;
        case ProposalState.Succeeded:
            setProposalStatus(ProposalState.Failed);
            break;
        case ProposalState.Failed:
            setProposalStatus(ProposalState.PreliminaryDiscussion);
            break;
    }
  };

  const offChainVoteLink = "https://snapshot.org/#/friendswithbenefits.eth/proposal/0x263facf9dc0019d86e182e0573c1239ed7fd1ecb0060abab4835c0ac1a26d1e9";

  return (
    <>
        {/* Debug button to change state */}
        <button
            type="button"
            className="inline-flex items-center fixed top-20 right-2 rounded-full border border-transparent bg-purple-500 p-3 text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            onClick={debugChangeStatus}
        >
         <ArrowPathIcon className="h-6 w-6" aria-hidden="true" />
        </button>

      {/* Under Header */}
      <div className="w-full bg-messari-400">
        <div className="flex justify-between items-center max-w-7xl mx-auto xl:px-8 py-2">
          <Link
            href="/governor"
            className="text-white flex transition-colors hover:text-blue-500"
          >
            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
            <span>Back to all proposals</span>
          </Link>
          <button
            className="bg-messari-blue-light hidden sm:block hover:bg-messari-blue-dark text-white font-bold py-2 px-4 rounded"
            onClick={() => console.log("connect wallet")}
          >
            Connect Wallet
          </button>
        </div>
      </div>

      <div className="min-h-full">
        <div className="flex flex-1 flex-col">
          <main className="flex-1 w-full pb-8 bg-messari-500 max-w-7xl mx-auto">

            {/* Page header */}
            <div className="bg-messari-300 shadow">
              <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8 lg:pb-40">
                <div className="py-6 md:flex md:items-center md:justify-between">

                  {/* Main Info */}
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center">
                        <Image
                          src={daoLogo}
                          alt="DAO Logo"
                          className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-12 w-12 md:h-20 md:w-20"
                          priority
                        />
                        <div className="flex flex-col">
                            <h2 className="ml-3 text-md leading-7 text-gray-400 sm:truncate sm:leading-9">
                            Friends With Benefits DAO
                            </h2>
                            <h1 className="order-1 ml-3 text-2xl font-bold leading-7 text-white sm:truncate sm:leading-9">
                            FWB Fest 2023
                            </h1>
                        </div>
                      </div>
                      <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                        <dt className="sr-only">Proposal Status</dt>
                        <div className="flex space-x-1 justify-center">
                            <ProposalStatusBadge />
                            <dd className="flex items-center text-sm font-medium capitalize text-gray-100 sm:mr-6 sm:mt-0">
                                <ClockIcon
                                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                />
                                7 Days left to vote
                            </dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                    {/* <button
                      type="button"
                      className="bg-messari-blue-light px-12 hover:bg-messari-blue-dark text-white font-bold py-2 rounded"
                    >
                      Vote
                    </button> */}
                    <a
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      href={offChainVoteLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Off-Chain Vote</span>
                      <ArrowTopRightOnSquareIcon
                        className="ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="mt-4 sm:mt-8 lg:-mt-36">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                  {/* Card */}
                    <div
                      className="overflow-hidden rounded-lg bg-messari-600 shadow"
                    >
                      <div className="bg-messari-600 px-5 py-3 border-b border-gray-700">
                        <h3 className="text-md md:text-lg truncate font-medium text-white">
                            Summary
                        </h3>
                      </div>
                      <div className="p-5">
                        <p className="text-gray-100">
                            This proposal aims to confirm the production of the FWB FEST 2023 from Aug. 10-13, 2023. The proposal recommends tickets be priced at $399 for members and $499 for non-members and projects profits from $63,980 - $522,980 depending on the amount of tickets sold.
                        </p>
                      </div>
                    </div>
                  
                    <div
                      className="overflow-hidden rounded-lg bg-messari-600 shadow"
                    >
                      <div className="bg-messari-600 px-5 py-3 border-b border-gray-700">
                        <h3 className="text-md md:text-lg truncate font-medium text-white">
                            Active Vote
                        </h3>
                      </div>
                      <div className="p-5">
                        {/* Container */}
                        <div className="flex flex-col">

                            {/* Vote option row with progress bar */}
                            <div className="flex flex-col">
                                {/* Vote option | % */}
                                <div className="flex justify-between">
                                    <span className="text-white">
                                        Yes: Approve FWB Fest 2023
                                    </span>
                                    <span className="text-white">
                                        90%
                                    </span>
                                </div>

                                {/* Progress Bar with vote count */}
                                <div className="">
                                    <div className="bg-messari-300 rounded-full">
                                        <div className="bg-messari-blue-dark rounded-full w-[90%]">
                                            <p className="text-white text-xs indent-2">
                                                9.2k votes
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Vote option row with progress bar */}
                            <div className="flex flex-col">
                                {/* Vote option | % */}
                                <div className="flex justify-between">
                                    <span className="text-white">
                                        No: Do Not Approve FWB Fest 2023
                                    </span>
                                    <span className="text-white">
                                        10%
                                    </span>
                                </div>

                                {/* Progress Bar with vote count */}
                                <div className="">
                                    <div className="bg-messari-300 rounded-full">
                                        <div className="bg-messari-blue-dark rounded-full w-[10%]">
                                            <p className="text-white text-xs whitespace-nowrap indent-2">
                                                76 votes
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                      </div>
                        <div className="bg-messari-600 border-t border-gray-700 w-full">
                            <Link
                                type="button"
                                className="w-full flex items-center justify-center rounded-b-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                href={offChainVoteLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>Off-Chain Vote</span>
                                <ArrowTopRightOnSquareIcon
                                    className="ml-2 h-5 w-5"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </div>

                </div>
              </div>

              <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-white sm:px-6 lg:px-8">
                Recent activity
              </h2>

              {/* Activity list (smallest breakpoint only) */}
              <div className="shadow sm:hidden">
                <ul
                  role="list"
                  className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
                >
                  {transactions.map((transaction) => (
                    <li key={transaction.id}>
                      <a
                        href={transaction.href}
                        className="block bg-white px-4 py-4 hover:bg-gray-50"
                      >
                        <span className="flex items-center space-x-4">
                          <span className="flex flex-1 space-x-2 truncate">
                            <BanknotesIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="flex flex-col truncate text-sm text-gray-500">
                              <span className="truncate">
                                {transaction.name}
                              </span>
                              <span>
                                <span className="font-medium text-gray-900">
                                  {transaction.amount}
                                </span>{" "}
                                {transaction.currency}
                              </span>
                              <time dateTime={transaction.datetime}>
                                {transaction.date}
                              </time>
                            </span>
                          </span>
                          <ChevronRightIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <nav
                  className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
                  aria-label="Pagination"
                >
                  <div className="flex flex-1 justify-between">
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      Next
                    </a>
                  </div>
                </nav>
              </div>

              {/* Activity table (small breakpoint and up) */}
              <div className="hidden sm:block">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  <div className="mt-2 flex flex-col">
                    <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th
                              className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                              scope="col"
                            >
                              Transaction
                            </th>
                            <th
                              className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                              scope="col"
                            >
                              Amount
                            </th>
                            <th
                              className="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                              scope="col"
                            >
                              Status
                            </th>
                            <th
                              className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                              scope="col"
                            >
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {transactions.map((transaction) => (
                            <tr key={transaction.id} className="bg-white">
                              <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                <div className="flex">
                                  <a
                                    href={transaction.href}
                                    className="group inline-flex space-x-2 truncate text-sm"
                                  >
                                    <BanknotesIcon
                                      className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                    <p className="truncate text-gray-500 group-hover:text-gray-900">
                                      {transaction.name}
                                    </p>
                                  </a>
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {transaction.amount}
                                </span>
                                {transaction.currency}
                              </td>
                              <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                                <span
                                  className={clsx(
                                    statusStyles[transaction.status],
                                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                                  )}
                                >
                                  {transaction.status}
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                                <time dateTime={transaction.datetime}>
                                  {transaction.date}
                                </time>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {/* Pagination */}
                      <nav
                        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                        aria-label="Pagination"
                      >
                        <div className="hidden sm:block">
                          <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to{" "}
                            <span className="font-medium">10</span> of{" "}
                            <span className="font-medium">20</span> results
                          </p>
                        </div>
                        <div className="flex flex-1 justify-between sm:justify-end">
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                          >
                            Previous
                          </a>
                          <a
                            href="#"
                            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                          >
                            Next
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
