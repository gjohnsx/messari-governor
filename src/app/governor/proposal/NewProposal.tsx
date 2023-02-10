"use client";

import { useState, Fragment } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import {
  BoltIcon,
  CheckIcon,
  ChevronLeftIcon,
  FireIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Tab, Transition, Dialog } from "@headlessui/react";
import daoLogo from "@/images/fwb.png";
import {
  ArrowTopRightOnSquareIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

const truncateVoteCount = (voteCount: number) => {
  if (voteCount > 1000000) {
    return `${(voteCount / 1000000).toFixed(1)}M`;
  } else if (voteCount > 1000) {
    return `${(voteCount / 1000).toFixed(1)}K`;
  } else {
    return voteCount;
  }
};

export default function NewProposal() {
  const [votesDialogOpen, setVotesDialogOpen] = useState(false);
  const [strategiesDialogOpen, setStrategiesDialogOpen] = useState(false);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);

  return (
    <>
      {/* Votes Dialog */}
      <Transition.Root show={votesDialogOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setVotesDialogOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full pt-10 pointer-events-none">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-y-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-y-full"
                >
                  <Dialog.Panel className="w-screen pointer-events-auto">
                    <div className="flex flex-col h-full py-6 overflow-y-scroll shadow-xl bg-messari-500 rounded-t-md">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-white">
                            Votes
                          </Dialog.Title>
                          <div className="flex items-center ml-3 h-7">
                            <button
                              type="button"
                              className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-messari-blue-dark-500 focus:ring-offset-2"
                              onClick={() => setVotesDialogOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex-1 px-4 mt-6 sm:px-6">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-800">
                            <tbody className="border-t border-gray-800 divide-y divide-gray-800">
                            {votes.slice(0, 10).map((vote) => {
                    const votePercentage = vote.votePercentage.toString().split(
                        "."
                    )[0];
                    const widthClass = `w-${votePercentage}`;

                    return (
                    <tr key={vote.address} className="flex grid items-center grid-cols-5 text-sm text-white justify-evenly">
                      <td className="py-4 font-medium text-white whitespace-nowrap sm:pl-6">
                        <div className="flex items-center justify-start space-x-1">
                          <Image
                            src={vote.avatar}
                            alt="DAO Logo"
                            className="object-cover w-6 h-6 rounded-full bg-zinc-100"
                            priority
                            width={24}
                            height={24}
                          />
                          <Link
                            href={`https://etherscan.io/address/${vote.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-messari-blue-light"
                          >
                            {/* truncate address */}
                            {vote.address.length > 10
                              ? vote.address.substring(0, 10) + "..."
                              : vote.address}
                          </Link>
                        </div>
                      </td>

                      <td className="py-4 whitespace-nowrap">
                        {vote.vote}
                      </td>

                      <td className="py-4 font-medium text-center whitespace-nowrap">
                        {vote.voteAmount}
                      </td>

                      <td className="w-full py-4 mx-auto font-medium">
                        {/* Progress Bar with vote count */}
                        <div className="w-full">
                          <div className="rounded-full bg-messari-300">
                            <div className={clsx(
                                widthClass,
                                "bg-messari-blue-dark py-1.5 rounded-full"
                            )}>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 pr-6 font-medium text-right whitespace-nowrap">
                        {vote.votePercentage}%
                      </td>
                    </tr>
                  )
                })}
                            </tbody>
                          </table>
                          <div
                            className="flex items-center justify-between px-4 py-3 border-t border-gray-800 sm:px-6"
                            aria-label="Pagination"
                          >
                            <div className="flex justify-center flex-1">
                              <button
                                className="flex justify-center w-full px-3 py-2 space-x-1 text-sm font-medium leading-4 transition-all border border-gray-300 rounded-md shadow-sm text-messari-blue-light hover:bg-messari-300/60 focus:outline-none focus:ring-2 focus:ring-messari-blue-light focus:ring-offset-2 hover:border-messari-blue-light"
                                onClick={() =>
                                  console.log("loading more votes...")
                                }
                              >
                                Load More
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Strategies Dialog */}
      <Transition.Root show={strategiesDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={setStrategiesDialogOpen}
        >
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full pt-10 pointer-events-none">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-y-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-y-full"
                >
                  <Dialog.Panel className="w-screen pointer-events-auto">
                    <div className="flex flex-col h-full py-6 overflow-y-scroll shadow-xl bg-messari-500 rounded-t-md">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-white">
                            Strategies
                          </Dialog.Title>
                          <div className="flex items-center ml-3 h-7">
                            <button
                              type="button"
                              className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-messari-blue-dark-500 focus:ring-offset-2"
                              onClick={() => setStrategiesDialogOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="relative flex-1 px-4 mt-6 sm:px-6">
                        <table className="min-w-full divide-y divide-gray-300">
                          <tbody>
                            {graphQlProposalData.data.proposal.strategies.map(
                              (strategy) => (
                                <Fragment key={strategy.params.symbol}>
                                  <tr className="">
                                    <th
                                      colSpan={5}
                                      scope="colgroup"
                                      className="py-2 text-sm font-semibold text-left text-white sm:px-6"
                                    >
                                      {strategy.name}
                                    </th>
                                  </tr>

                                  {strategy.params.address && (
                                    <tr>
                                      <td className="py-2 text-sm text-gray-400 whitespace-nowrap sm:pl-6">
                                        Address
                                      </td>
                                      <td className="py-2 text-sm text-right text-gray-400 whitespace-nowrap sm:pl-6">
                                        <Link
                                          href={`https://etherscan.io/address/${strategy.params.address}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center justify-end text-messari-blue-light"
                                        >
                                          <span className="hover:underline">
                                            {strategy.params.address.substring(
                                              0,
                                              6
                                            ) +
                                              "..." +
                                              strategy.params.address.substring(
                                                strategy.params.address.length -
                                                  4,
                                                strategy.params.address.length
                                              )}
                                          </span>
                                          <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                                        </Link>
                                      </td>
                                    </tr>
                                  )}
                                  {strategy.params.decimals && (
                                    <tr>
                                      <td className="py-2 text-sm text-gray-400 whitespace-nowrap sm:pl-6">
                                        Decimals
                                      </td>
                                      <td className="py-2 text-sm text-right text-gray-400 whitespace-nowrap sm:pl-6">
                                        {strategy.params.decimals}
                                      </td>
                                    </tr>
                                  )}
                                  <tr className="border-b border-gray-800">
                                    <td className="py-2 text-sm text-gray-400 whitespace-nowrap sm:pl-6">
                                      Symbol
                                    </td>
                                    <td className="py-2 text-sm text-right text-gray-400 whitespace-nowrap sm:pl-6">
                                      {strategy.params.symbol &&
                                        strategy.params.symbol}
                                    </td>
                                  </tr>
                                </Fragment>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Details Dialog */}
      <Transition.Root show={detailsDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={setDetailsDialogOpen}
        >
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full pt-10 pointer-events-none">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-y-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-y-full"
                >
                  <Dialog.Panel className="w-screen pointer-events-auto">
                    <div className="flex flex-col h-full py-6 overflow-y-scroll shadow-xl bg-messari-500 rounded-t-md">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between max-w-lg px-6 mx-auto">
                          <Dialog.Title className="text-lg font-medium text-white">
                            Details
                          </Dialog.Title>
                          <div className="flex items-center ml-3 h-7">
                            <button
                              type="button"
                              className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-messari-blue-dark-500 focus:ring-offset-2"
                              onClick={() => setDetailsDialogOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="md:mx-auto md:max-w-lg prose-a:text-messari-blue-light relative flex-1 px-4 mt-6 prose prose-p:text-white prose-strong:text-white prose-strong:text-xl !prose-headings:text-white sm:px-6 prose-li:text-white">
                        <ReactMarkdown>
                          {graphQlProposalData.data.proposal.body}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="bg-messari-600">
        {/* Under Header */}
        <div className="w-full bg-messari-400">
          <div className="flex items-center justify-between py-2 mx-auto max-w-7xl xl:px-8">
            <Link
              href="/governor"
              className="flex text-white transition-colors hover:text-blue-500"
            >
              <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
              <span>Back to all proposals</span>
            </Link>
            <button
              className="hidden px-4 py-2 font-bold text-white rounded bg-messari-blue-light sm:block hover:bg-messari-blue-dark"
              onClick={() => console.log("connect wallet")}
            >
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="text-white border-b border-transparent shadow md:pb-28 md:bg-messari-300 bg-messari-600 md:px-8">
          {/* Header */}
          <div className="flex justify-between max-w-4xl px-4 py-6 mx-auto md:flex-row-reverse md:justify-end">
            <div>
              <h4 className="order-2 text-gray-400 md:text-lg">
                {graphQlProposalData.data.proposal.space.name}
              </h4>
              <h1 className="order-1 text-xl font-bold md:text-3xl">
                {graphQlProposalData.data.proposal.title}
              </h1>
            </div>
            <Image
              src={daoLogo}
              alt="DAO Logo"
              className="object-cover w-12 h-12 rounded-full bg-zinc-100 md:h-16 md:w-16 md:mr-4"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto flex items-center w-full px-4 py-2 bg-messari-600 dark:bg-transparent text-[#AED8FD] text-sm">
            <span className="whitespace-nowrap md:text-messari-blue-light md:border md:border-messari-blue-light md:px-4 md:py-px md:uppercase md:mr-1">
              Active vote
            </span>
            <span className="md:hidden">-</span>
            <span className="flex items-center space-x-px md:mx-2 whitespace-nowrap flex-nowrap">
              5 days left to vote via
              <BoltIcon
                className="w-3 h-3 mx-px text-amber-500"
                aria-hidden="true"
              />
              Off-Chain Vote
            </span>

            <Link
              href="#"
              className="items-center flex-grow-0 hidden px-3 py-2 ml-auto space-x-1 text-sm font-medium leading-4 text-white border border-gray-300 rounded-md shadow-sm md:inline-flex hover:bg-messari-300/60 hover:border-messari-blue-light focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <GlobeAltIcon className="w-4 h-4" aria-hidden="true" />
              <span>Off-Chain Vote</span>
            </Link>
          </div>
        </div>

        {/* Info */}
        <div className="max-w-4xl pb-4 mx-auto text-white border-b-8 md:border-0 border-messari-500 bg-messari-600 md:-mt-16 md:rounded-md">
          {/* Summary */}
          <div className="overflow-hidden md:divide-y md:divide-gray-800 md:bg-messari-500 md:rounded-md md:shadow">
            <div className="px-4 pt-2 md:pt-4 md:px-6">
              <h2 className="mb-2 font-bold md:text-lg">Summary</h2>
            </div>
            <div className="px-4 pb-2 md:py-4 md:px-6">
              <p>
                This proposal aims to confirm the production of the FWB FEST
                2023 from Aug. 10-13, 2023. The proposal recommends tickets be
                priced at $399 for members and $499 for non-members and projects
                profits from $63,980 - $522,980 depending on the amount of
                tickets sold.
              </p>
            </div>
          </div>

          {/* Classification */}
          <div className="my-4 overflow-hidden md:divide-y md:divide-gray-800 md:bg-messari-500 md:rounded-md md:shadow">
            <div className="px-4 pt-2 md:pt-4 md:px-6">
              <h2 className="mb-2 font-bold md:text-lg">Classification</h2>
            </div>
            <div className="px-4 pb-2 md:py-4 md:px-6">
              <div className="flex flex-wrap gap-y-1 md:gap-x-10">
                <div className="flex flex-col">
                  <label
                    htmlFor="category"
                    className="hidden text-sm text-gray-400 md:inline"
                  >
                    Category
                  </label>
                  <span
                    id="category"
                    className="inline-flex items-center rounded-md md:bg-transparent bg-messari-300 md:px-0 px-2.5 py-0.5 text-sm md:text-md font-medium text-white mr-2"
                  >
                    Team and Operations
                  </span>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="subcategory"
                    className="hidden text-sm text-gray-400 md:inline"
                  >
                    Sub-category
                  </label>

                  <span
                    id="subcategory"
                    className="inline-flex items-center rounded-md md:bg-transparent bg-messari-300 md:px-0 px-2.5 py-0.5 text-sm md:text-md font-medium text-white mr-2"
                  >
                    Treasury Funded Expense
                  </span>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="importance"
                    className="hidden text-sm text-gray-400 md:inline"
                  >
                    Importance
                  </label>

                  <span
                    id="importance"
                    className="inline-flex items-center space-x-1 rounded-md bg-messari-300 md:bg-transparent md:px-0 px-2.5 py-0.5 text-sm font-medium md:text-md text-white"
                  >
                    <FireIcon
                      className="w-4 h-4 text-messari-blue-dark"
                      aria-hidden="true"
                    />
                    <span>Medium</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="px-4 py-4 md:hidden">
            <h2 className="mb-2 font-bold md:hidden">Useful Links</h2>
            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 space-x-1 text-sm font-medium leading-4 text-white border border-gray-300 rounded-md shadow-sm hover:bg-messari-300/60 hover:border-messari-blue-light focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <GlobeAltIcon className="w-4 h-4" aria-hidden="true" />
              <span>Off-Chain Vote</span>
            </Link>
          </div>
        </div>

        {/* Tabs for screens smaller than md */}
        <Tab.Group
          as="div"
          className="px-4 py-6 mb-2 border-t border-gray-800 shadow inset-1 md:hidden bg-messari-600 md:px-8"
        >
          <div className="flex items-baseline justify-between flex-nowrap">
            <h2 className="mb-2 font-bold text-white md:text-2xl">
              Off-Chain Vote
            </h2>

            <span className="text-sm uppercase text-messari-blue-light md:border md:border-messari-blue-light md:px-4 md:py-px md:uppercase">
              active vote
            </span>
          </div>
          <span className="text-sm text-gray-400">Started 2 days ago</span>

          <Tab.List className="flex justify-between mx-auto my-4 space-x-2">
            <Tab className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-400 border-gray-400 border ui-selected:text-messari-blue-light ui-selected:border-messari-blue-light">
              Active Vote
            </Tab>
            <Tab className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-400 border-gray-400 border ui-selected:text-messari-blue-light ui-selected:border-messari-blue-light">
              Voters
            </Tab>
            <Tab className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-400 border-gray-400 border ui-selected:text-messari-blue-light ui-selected:border-messari-blue-light">
              Key Info
            </Tab>
            <Tab className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-400 border-gray-400 border ui-selected:text-messari-blue-light ui-selected:border-messari-blue-light">
              Details
            </Tab>
          </Tab.List>

          <Tab.Panels className="text-white">
            {/* Active Vote */}
            <Tab.Panel>
              <h4 className="mr-2 text-sm font-medium text-white">
                Voting ends in 5 days
              </h4>
              <div className="flex flex-col mt-4">
                {proposalVoteOptions.map((option) => (
                  <div className="flex flex-col" key={option.title}>
                    <div className="flex justify-between">
                      <span className="text-sm text-white">{option.title}</span>
                      <span className="text-white">
                        {option.percentage.toString()}%
                      </span>
                    </div>

                    {/* Progress Bar with vote count */}
                    <div className="">
                      <div className="rounded-full bg-messari-300">
                        <div
                          className={`bg-messari-blue-dark rounded-full w-[${option.percentage}%]`}
                        >
                          <p className="text-xs text-white whitespace-nowrap indent-2">
                            {truncateVoteCount(option.voteCount)} Votes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>

            {/* Voters */}
            <Tab.Panel>
              <div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-800">
                  <tbody className="divide-y divide-gray-800 bg-messari-600">
                    {votes.slice(0, 5).map((vote) => (
                      <tr key={vote.address} className="text-sm text-white">
                        <td className="py-4 pl-4 pr-3 font-medium text-white whitespace-nowrap sm:pl-6">
                          <div className="flex items-center justify-start space-x-1">
                            <Image
                              src={vote.avatar}
                              alt="DAO Logo"
                              className="object-cover w-6 h-6 rounded-full bg-zinc-100"
                              priority
                              width={24}
                              height={24}
                            />
                            <span>
                              {/* truncate address */}
                              {vote.address.length > 10
                                ? vote.address.substring(0, 10) + "..."
                                : vote.address}
                            </span>
                          </div>
                        </td>

                        <td className="px-3 py-4 whitespace-nowrap">
                          {vote.vote.substring(0, 15) + "..."}
                        </td>

                        <td className="py-4 pl-3 pr-4 font-medium text-right whitespace-nowrap sm:pr-6">
                          {vote.voteAmount}
                        </td>

                        <td className="hidden py-4 pl-3 pr-4 font-medium text-right sm:table-cell whitespace-nowrap sm:pr-6">
                          {/* Progress Bar with vote count */}
                          <div className="">
                            <div className="rounded-full bg-messari-300">
                              <div className="bg-messari-blue-dark rounded-full w-[90%]">
                                %
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div
                  className="flex items-center justify-between py-3 border-t border-gray-800 bg-messari-600 sm:px-6"
                  aria-label="Pagination"
                >
                  <button
                    className="flex justify-center w-full px-3 py-2 space-x-1 text-sm font-medium leading-4 transition-all border border-gray-300 rounded-md shadow-sm hover:bg-messari-300/60 focus:outline-none focus:ring-2 focus:ring-messari-blue-light focus:ring-offset-2 hover:border-messari-blue-light"
                    onClick={() => setVotesDialogOpen(true)}
                  >
                    View All 51 Voters
                  </button>
                </div>
              </div>
            </Tab.Panel>

            {/* Key Info */}
            <Tab.Panel>
              <div className="mt-8 -mx-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <tbody>
                    <tr>
                      <td className="py-2 pl-4 pr-3 text-sm text-gray-400 whitespace-nowrap sm:pl-6">
                        Author
                      </td>
                      <td className="py-2 pl-4 pr-3 text-sm text-right text-white whitespace-nowrap sm:pl-6">
                        <Link
                          href="https://etherscan.io/address/drewcoffman.eth"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-end text-messari-blue-light"
                        >
                          <span className="hover:underline">
                            drewcoffman.eth
                          </span>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pl-4 pr-3 text-sm text-gray-400 whitespace-nowrap sm:pl-6">
                        Author Type
                      </td>
                      <td className="py-2 pl-4 pr-3 text-sm text-right text-white whitespace-nowrap sm:pl-6">
                        <span>Core</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pl-4 pr-3 text-sm text-gray-400 whitespace-nowrap sm:pl-6">
                        Strategies
                      </td>
                      <td className="py-2 pl-4 pr-3 text-sm text-right text-white whitespace-nowrap sm:pl-6">
                        <button
                          className="text-messari-blue-light hover:underline"
                          onClick={() => setStrategiesDialogOpen(true)}
                        >
                          3 strategies
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pl-4 pr-3 text-sm text-gray-400 whitespace-nowrap sm:pl-6">
                        IPFS
                      </td>
                      <td className="py-2 pl-4 pr-3 text-sm text-right text-white whitespace-nowrap sm:pl-6">
                        <Link
                          href="https://cloudflare-ipfs.com/ipfs/bafkreibdyb5w5asdcj7djv42p44efxbwfivxatbt3cpiyv7ioynkdqnfky"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-end text-messari-blue-light"
                        >
                          <span className="hover:underline">#bafkrei</span>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pl-4 pr-3 text-sm text-gray-400 whitespace-nowrap sm:pl-6">
                        Voting System
                      </td>
                      <td className="py-2 pl-4 pr-3 text-sm text-right text-white whitespace-nowrap sm:pl-6">
                        <span>Single choice voting</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pl-4 pr-3 text-sm text-gray-400 whitespace-nowrap sm:pl-6">
                        Snapshot Block
                      </td>
                      <td className="py-2 pl-4 pr-3 text-sm text-right text-white whitespace-nowrap sm:pl-6">
                        <Link
                          href={`https://etherscan.io/block/${graphQlProposalData.data.proposal.snapshot}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-end text-messari-blue-light"
                        >
                          <span className="hover:underline">
                            {graphQlProposalData.data.proposal.snapshot}
                          </span>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pl-4 pr-3 text-sm text-gray-400 whitespace-nowrap sm:pl-6">
                        Start Date
                      </td>
                      <td className="py-2 pl-4 pr-3 text-sm text-right text-white whitespace-nowrap sm:pl-6">
                        <span>Feb 7, 2023</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pl-4 pr-3 text-sm text-gray-400 whitespace-nowrap sm:pl-6">
                        End Date
                      </td>
                      <td className="py-2 pl-4 pr-3 text-sm text-right text-white whitespace-nowrap sm:pl-6">
                        <span>Feb 14, 2023</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pl-4 pr-3 text-sm text-gray-400 whitespace-nowrap sm:pl-6">
                        Total Votes Cast
                      </td>
                      <td className="py-2 pl-4 pr-3 text-sm text-right text-white whitespace-nowrap sm:pl-6">
                        <span>
                          {truncateVoteCount(
                            graphQlProposalData.data.proposal.scores.reduce(
                              (acc, curr) => (acc += curr)
                            )
                          )}{" "}
                          Votes
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pl-4 pr-3 text-sm text-gray-400 whitespace-nowrap sm:pl-6">
                        Total Voters
                      </td>
                      <td className="py-2 pl-4 pr-3 text-sm text-right text-white whitespace-nowrap sm:pl-6">
                        <span>
                          {graphQlProposalData.data.proposal.votes} Voters
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <button
                className="flex justify-center w-full px-3 py-2 space-x-1 text-sm font-medium leading-4 text-white transition-all border border-gray-300 rounded-md shadow-sm hover:bg-messari-300/60 focus:outline-none focus:ring-2 focus:ring-messari-blue-light focus:ring-offset-2 hover:border-messari-blue-light"
                onClick={() => setDetailsDialogOpen(true)}
              >
                View Details
              </button>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        {/* Regular content for screens md and up */}
        <div className="hidden max-w-4xl py-10 mx-auto my-2 border-t border-b border-gray-800 shadow md:block bg-messari-600">
          <div className="flex items-baseline justify-between flex-nowrap">
            <h2 className="mb-2 font-bold text-white md:text-2xl">
              Off-Chain Vote
            </h2>

            <span className="text-sm uppercase text-messari-blue-light md:border md:border-messari-blue-light md:px-4 md:py-px md:uppercase">
              active vote
            </span>
          </div>
          <span className="text-sm text-gray-400">Started 2 days ago</span>

          {/* Active Vote */}
          <div className="my-4 overflow-hidden md:divide-y md:divide-gray-800 md:bg-messari-500 md:rounded-md md:shadow">
            <div className="px-4 pt-2 md:pt-4 md:px-6">
              <h2 className="mb-2 font-bold text-white md:text-lg">
                Active Vote
              </h2>
            </div>
            <div className="px-4 pb-2 md:py-4 md:px-6">
              <h4 className="mr-2 text-sm font-medium text-white">
                Voting ends in 5 days
              </h4>
              <div className="flex flex-col mt-4">
                {proposalVoteOptions.map((option) => (
                  <div className="flex flex-col" key={option.title}>
                    <div className="flex justify-between">
                      <span className="text-sm text-white">{option.title}</span>
                      <span className="text-white">
                        {option.percentage.toString()}%
                      </span>
                    </div>

                    {/* Progress Bar with vote count */}
                    <div className="">
                      <div className="rounded-full bg-messari-300">
                        <div
                        //   className={`bg-messari-blue-dark rounded-full w-[1%]`}
                          className={`bg-messari-blue-dark rounded-full w-[${option.percentage}%]`}
                        >
                          <p className="text-xs text-white whitespace-nowrap indent-2">
                            {truncateVoteCount(option.voteCount)} Votes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Voters */}
          <div className="my-4 overflow-hidden md:divide-y md:divide-gray-800 md:bg-messari-500 md:rounded-md md:shadow">
            <div className="px-4 pt-2 md:pt-4 md:px-6">
              <h2 className="mb-2 font-bold text-white md:text-lg">Voters</h2>
            </div>
            <div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-800">
                <tbody className="divide-y divide-gray-800">
                  {votes.slice(0, 5).map((vote) => {
                    const votePercentage = vote.votePercentage.toString().split(
                        "."
                    )[0];
                    const widthClass = `w-${votePercentage}`;

                    return (
                    <tr key={vote.address} className="flex grid items-center grid-cols-5 text-sm text-white justify-evenly">
                      <td className="py-4 font-medium text-white whitespace-nowrap sm:pl-6">
                        <div className="flex items-center justify-start space-x-1">
                          <Image
                            src={vote.avatar}
                            alt="DAO Logo"
                            className="object-cover w-6 h-6 rounded-full bg-zinc-100"
                            priority
                            width={24}
                            height={24}
                          />
                          <Link
                            href={`https://etherscan.io/address/${vote.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-messari-blue-light"
                          >
                            {/* truncate address */}
                            {vote.address.length > 10
                              ? vote.address.substring(0, 10) + "..."
                              : vote.address}
                          </Link>
                        </div>
                      </td>

                      <td className="py-4 whitespace-nowrap">
                        {vote.vote}
                      </td>

                      <td className="py-4 font-medium text-center whitespace-nowrap">
                        {vote.voteAmount}
                      </td>

                      <td className="w-full py-4 mx-auto font-medium">
                        {/* Progress Bar with vote count */}
                        <div className="w-full">
                          <div className="rounded-full bg-messari-300">
                            <div className={clsx(
                                widthClass,
                                "bg-messari-blue-dark py-1.5 rounded-full"
                            )}>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 pr-6 font-medium text-right whitespace-nowrap">
                        {vote.votePercentage}%
                      </td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
              <div
                className="flex items-center justify-between py-3 text-white border-t border-gray-800 sm:px-6"
                aria-label="Pagination"
              >
                <button
                  className="flex justify-center w-full px-3 py-2 space-x-1 text-sm font-medium leading-4 transition-all border border-gray-300 rounded-md shadow-sm hover:bg-messari-300/60 focus:outline-none focus:ring-2 focus:ring-messari-blue-light focus:ring-offset-2 hover:border-messari-blue-light"
                  onClick={() => setVotesDialogOpen(true)}
                >
                  View All 51 Voters
                </button>
              </div>
            </div>
          </div>

          {/* Key Info */}
          <div className="my-4 overflow-hidden md:divide-y md:divide-gray-800 md:bg-messari-500 md:rounded-md md:shadow">
            <div className="px-4 pt-2 md:pt-4 md:px-6">
              <h2 className="mb-2 font-bold text-white md:text-lg">Key Info</h2>
            </div>
            <div className="px-4 pb-2 md:py-4 md:px-6">
              <div className="grid min-w-full grid-cols-2 gap-x-10">
                <div className="flex justify-between">
                  <span className="py-2 text-sm text-gray-400 whitespace-nowrap ">
                    Author
                  </span>
                  <span className="py-2 text-sm text-right text-white whitespace-nowrap ">
                    <Link
                      href="https://etherscan.io/address/drewcoffman.eth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-end text-messari-blue-light"
                    >
                      <span className="hover:underline">drewcoffman.eth</span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="py-2 text-sm text-gray-400 whitespace-nowrap ">
                    Author Type
                  </span>
                  <span className="py-2 text-sm text-right text-white whitespace-nowrap ">
                    Core
                  </span>
                </div>
                <div className="flex justify-between">
                  <div className="py-2 text-sm text-gray-400 whitespace-nowrap ">
                    Strategies
                  </div>
                  <div className="py-2 text-sm text-right text-white whitespace-nowrap ">
                    <button
                      className="text-messari-blue-light hover:underline"
                      onClick={() => setStrategiesDialogOpen(true)}
                    >
                      3 strategies
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="py-2 text-sm text-gray-400 whitespace-nowrap ">
                    IPFS
                  </div>
                  <div className="py-2 text-sm text-right text-white whitespace-nowrap ">
                    <Link
                      href="https://cloudflare-ipfs.com/ipfs/bafkreibdyb5w5asdcj7djv42p44efxbwfivxatbt3cpiyv7ioynkdqnfky"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-end text-messari-blue-light"
                    >
                      <span className="hover:underline">#bafkrei</span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="py-2 text-sm text-gray-400 whitespace-nowrap ">
                    Voting System
                  </div>
                  <div className="py-2 text-sm text-right text-white whitespace-nowrap ">
                    <span>Single choice voting</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="py-2 text-sm text-gray-400 whitespace-nowrap ">
                    Snapshot Block
                  </div>
                  <div className="py-2 text-sm text-right text-white whitespace-nowrap ">
                    <Link
                      href={`https://etherscan.io/block/${graphQlProposalData.data.proposal.snapshot}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-end text-messari-blue-light"
                    >
                      <span className="hover:underline">
                        {graphQlProposalData.data.proposal.snapshot}
                      </span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="py-2 text-sm text-gray-400 whitespace-nowrap ">
                    Start Date
                  </div>
                  <div className="py-2 text-sm text-right text-white whitespace-nowrap ">
                    <span>Feb 7, 2023</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="py-2 text-sm text-gray-400 whitespace-nowrap ">
                    End Date
                  </div>
                  <div className="py-2 text-sm text-right text-white whitespace-nowrap ">
                    <span>Feb 14, 2023</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="py-2 text-sm text-gray-400 whitespace-nowrap ">
                    Total Votes Cast
                  </div>
                  <div className="py-2 text-sm text-right text-white whitespace-nowrap ">
                    <span>
                      {truncateVoteCount(
                        graphQlProposalData.data.proposal.scores.reduce(
                          (acc, curr) => (acc += curr)
                        )
                      )}{" "}
                      Votes
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="py-2 text-sm text-gray-400 whitespace-nowrap ">
                    Total Voters
                  </div>
                  <div className="py-2 text-sm text-right text-white whitespace-nowrap ">
                    <span>
                      {graphQlProposalData.data.proposal.votes} Voters
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details button */}
          <div>
            <button
              className="flex justify-center w-full px-3 py-2 space-x-1 text-sm font-medium leading-4 text-white transition-all border border-gray-300 rounded-md shadow-sm hover:bg-messari-300/60 focus:outline-none focus:ring-2 focus:ring-messari-blue-light focus:ring-offset-2 hover:border-messari-blue-light"
              onClick={() => setDetailsDialogOpen(true)}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Related Proposals */}
        <div className="max-w-4xl py-6 mx-auto text-white border-t-8 shadow md:border-0 border-messari-500 bg-messari-600">
          <h2 className="mb-2 font-bold text-white md:text-2xl">
            Related Proposals
          </h2>

          {/* List */}
          <div>
            <ul role="list" className="space-y-2">
              {relatedProposals.map((proposal) => (
                <li
                  key={proposal.title}
                  className="flex items-start justify-between px-4 py-4 overflow-hidden text-sm rounded-md shadow md:justify-end md:items-center md:flex-row-reverse bg-messari-500 sm:px-6"
                >
                  <div className="hidden md:ml-auto md:flex md:flex-col">
                    <span
                      className={clsx(
                        "px-3 py-1.5 min-w-[100px] text-center uppercase text-xs border",
                        proposal.status === "Succeeded"
                          ? "text-green-500 border-green-500"
                          : "text-red-500 border-red-500"
                      )}
                    >
                      {proposal.status}
                    </span>
                    <p className="hidden pt-2 text-right text-gray-400 md:block">
                      {proposal.created}
                    </p>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="font-bold hover:underline hover:text-messari-blue-light md:text-lg md:font-normal"
                    >
                      {proposal.title}
                    </Link>

                    <h4 className="mb-2 text-gray-400 md:text-md">
                      {proposal.dao}
                    </h4>

                    {/* Badges */}
                    <div className="my-2 md:hidden">
                      <span className="inline-flex items-center rounded-md bg-messari-300 px-2.5 py-0.5 space-x-1 font-medium text-white mr-2">
                        {proposal.status === "Succeeded" && (
                          <>
                            <CheckIcon
                              className="w-4 h-4 text-green-500"
                              aria-hidden="true"
                            />
                            <span>{proposal.status}</span>
                          </>
                        )}
                        {proposal.status === "Failed" && (
                          <>
                            <XMarkIcon
                              className="w-4 h-4 text-red-500"
                              aria-hidden="true"
                            />
                            <span>{proposal.status}</span>
                          </>
                        )}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-messari-300 px-2.5 py-0.5 space-x-1 font-medium text-white mr-2">
                        <FireIcon
                          className={clsx(
                            proposal.priority === "Low"
                              ? "text-gray-400"
                              : "text-messari-blue-dark",
                            "h-4 w-4 mr-1"
                          )}
                          aria-hidden="true"
                        />
                        <span>{proposal.priority}</span>
                      </span>
                    </div>
                    <p className="text-gray-400 md:hidden">
                      Created {proposal.created}
                    </p>
                  </div>

                  <Image
                    src={daoLogo}
                    alt="DAO Logo"
                    className="object-cover rounded-full md:mr-4 w-9 h-9 bg-zinc-100 dark:bg-zinc-800 md:h-16 md:w-16"
                    priority
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

const relatedProposals = [
  {
    title: "Moving FWB to a Single Membership Tier",
    dao: "Friends With Benefits DAO",
    daoImgSrc: "@/images/fbw.png",
    created: "4 months ago",
    status: "Succeeded",
    priority: "Medium",
  },
  {
    title: "FWB Season 7 Operational Budget",
    dao: "Friends With Benefits DAO",
    daoImgSrc: "@/images/fbw.png",
    created: "5 months ago",
    status: "Succeeded",
    priority: "Medium",
  },
  {
    title: "EWB x FWB Pop Up",
    dao: "Friends With Benefits DAO",
    daoImgSrc: "@/images/fbw.png",
    created: "7 months ago",
    status: "Succeeded",
    priority: "Low",
  },
  {
    title: "Fake Proposal",
    dao: "Friends With Benefits DAO",
    daoImgSrc: "@/images/fbw.png",
    created: "a year ago",
    status: "Failed",
    priority: "Low",
  },
];

const proposalVoteOptions = [
  {
    title: "Yes: Approve FWB Fest 2023",
    percentage: 99,
    voteCount: 14860,
  },
  {
    title: "No: Do Not Approve FWB Fest 2023",
    percentage: 1,
    voteCount: 82,
  },
];

const votes = [
  {
    address: "bodge.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "2K FWB",
    votePercentage: 12.03,
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x625D6405DCac9C82F4b681A131d9182115448F75?s=36",
  },
  {
    address: "nufrontiers.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "1.1K FWB",
    votePercentage: 6.33,
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x083227628A8ce4B78AC244Ffd140392393024242?s=36",
  },
  {
    address: "0x7AE41835444183A23bAA10EbfdF2997D10130f5d",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "700 FWB",
      votePercentage: 4.19,
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x7AE41835444183A23bAA10EbfdF2997D10130f5d?s=36",
  },
  {
    address: "drewcoffman.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "551 FWB",
      votePercentage: 3.29,
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0xc7A0D765C3aF6E2710bA05A56c5E2cA190C2E11e?s=36",
  },
  {
    address: "kirkusmaximus.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "543 FWB",
      votePercentage: 3.25,
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x2afE4De9D1C679E42C03649D86FFDDDc07751AE6?s=36",
  },
  {
    address: "0xE802A4D7dBB8c2010b336A49f86a765a7eb0Dce8",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "450 FWB",
      votePercentage: 3,
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0xE802A4D7dBB8c2010b336A49f86a765a7eb0Dce8?s=36",
  },
  {
    address: "gbresnitz.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "385 FWB",
      votePercentage: 2.5,
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x473e95Ac3646D286651aDF5Fa736368DFdCf9605?s=36",
  },
  {
    address: "0x7d8D2c8EA18f9a3Da11066f02057DAd708f97e8F",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "365 FWB",
      votePercentage: 2.4,
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x7d8D2c8EA18f9a3Da11066f02057DAd708f97e8F?s=36",
  },
  {
    address: "quintela.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "322 FWB",
      votePercentage: 2.3,
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x26982bdD9A25dEa454d62B5BeC236B4ECd0A5b0b?s=36",
  },
  {
    address: "fabiolaio.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "261 FWB",
      votePercentage: 2,
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x06A61Fd03051ae191C5c0321324c85Db11340bc7?s=36",
  },
];

const graphQlProposalData = {
  data: {
    proposal: {
      id: "0x263facf9dc0019d86e182e0573c1239ed7fd1ecb0060abab4835c0ac1a26d1e9",
      title: "FWB Fest 2023",
      choices: [
        "Yes: Approve FWB Fest 2023",
        "No: Do Not Approve FWB Fest 2023",
      ],
      start: 1675807200,
      end: 1676412000,
      snapshot: "16579341",
      strategies: [
        {
          name: "erc20-balance-of",
          network: "1",
          params: {
            symbol: "FWB",
            address: "0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8",
            decimals: 18,
          },
        },
        {
          name: "uniswap",
          network: "1",
          params: {
            symbol: "FWB (UNI-V2)",
            address: "0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8",
            decimals: 18,
          },
        },
        {
          name: "delegation",
          network: "1",
          params: {
            symbol: "FWB (delegated)",
            strategies: [
              {
                name: "erc20-balance-of",
                params: {
                  address: "0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8",
                  decimals: 18,
                },
              },
              {
                name: "uniswap",
                params: {
                  address: "0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8",
                  decimals: 18,
                },
              },
            ],
          },
        },
      ],
      state: "active",
      author: "0xc7A0D765C3aF6E2710bA05A56c5E2cA190C2E11e",
      space: {
        id: "friendswithbenefits.eth",
        name: "Friends With Benefits",
      },
      votes: 115,
      scores: [16450.635634422415, 82.14439295279634],
      scores_by_strategy: [
        [16450.635634422415, 0, 0],
        [82.14439295279634, 0, 0],
      ],
      scores_total: 16532.78002737521,
      scores_updated: 1675973653,
      body: "\nAuthors: Greg Bresnitz, Paul Tao, Zach Tetreault, Alex Zhang\n\n**Summary**\n\nThis proposal is to decide as a community on whether or not we host and produce FWB FEST 2023 this August 10 - 13, 2023.\n\nIt outlines a vision for how FWB FEST cements itself as the recurring annual gathering point for our community, along with a business model, budget request, and a review of FWB FEST 2022 and last year’s P&L. \n\n**Background – FWBFEST22**\n\nOn August 10-12, 2022, the FWB community hosted FWB FEST 2022,  a three-day festival and conference that brought our digital city to life roughly 500 members from the FWB community together in one place for the first time.\n\nThe venue was the Idyllwild Arts Academy, an 80-acre arts campus in the mountains of Idyllwild, California. We utilized the existing lecture halls for discourse and talks, amphitheaters for musical performances, and the surrounding woods and campus grounds for workshops, outdoor recreation, and experiences. \n\nThe event, which featured performances and talks from James Blake, Pussy Riot’s Nadya Tolokonnikova, Oneohtrix Point Never, JPEG Mafia, Telefon Tel Aviv, Uniswap founder Hayden Adams, and Other Internet’s Toby Shorin, drove significant public engagement on social media and drew coverage from major media publications. Headlines ranged from “Inside ‘crypto Woodstock,’ where technologists plot a utopian future” (The Washington Post) to “[FWB FEST proved that the blockchain doesn’t have to be boring](https://theface.com/music/friends-with-benefits-festival-dao-web3-blockchain-crypto-nft-music-califorinia-discord)” (The Face)  to “[A Weekend in the Woods With Crypto’s Cool Kids](https://www.elle.com/life-love/a41002433/friends-with-benefits-fest-crypto/)” (Elle).\n\nYou can view a video recap of the festival [here](https://www.youtube.com/watch?v=MmifS5T0yt0).\n\n**Festival P&L**\n\nHistorically, few festivals break even during their first year, although most of them are hesitant to make that public. This is especially true for festivals as small and intimate as FWB FEST, which is why our goal for year one was to establish a core event for FWB that we could build upon in the future. \n\nFWB FEST 2022 generated roughly $569,712 in revenue, from sources ranging from ticket sales to partnerships. Expenses for the event were roughly $1,013,415 with a majority going toward talent and production. The event was also conceived, planned, and announced under completely different crypto market conditions, with tickets going on sale in Q4 of 2021, right as the market began to crater. Tickets were also sold in ETH, with ETH’s price dropping significantly since the point of sale. Ultimately, FWB FEST 2022 ended up costing the DAO’s treasury around  $443,702. \n\n\n|FEST P&L|  |\n|--|--|\n| **Revenue**\n| Sponsorships | $ 205,000 |\n| Ticket Sales | $ 363,362\n| Merch Sales | $ 1,350\n| **Total Revenue** | $ 569,712\n| Expenses\n| CA Sales Tax | $ 22,501\n| Talent | $ 329,730\n| Production/Operations | $ 246,459\n| Marketing  | $ 28,337\n| F&B | $ 192,634\n| Admin/Staff | $ 187,753\n| $FWB Payment to Speakers |$ 6,000\n| **Total Expenses** | $ 1,013,415\n| **Net Loss** | $ (443,702)\n\n**Notes:**\nTalent: Musical talent, speaking talent, artist hospitality, artist relations team\nProduction/Operations: Venue fee, backline, signage, restrooms, credentials, medics, vans, waste management, A/V, backline, radios, gas, etc.\nMarketing: Photos, videos, PR\nF&B: Meals, snacks, bars\nAdmin/staff: Insurance, security, general operations personnel\n\nAs a first-year festival, we accomplished a lot. But we also have a lot of room for improvement.  Based on community feedback both public and private, we have developed an overarching strategy for FWB FEST 2023 and identified a number of steps we can take to increase profitability and deliver the most value to members of our community. The following outline is not exhaustive and is meant to be a jumping off point for community discussion. We are using this feedback session to take in suggestions from DAO members so we can continue to refine it. \n\n**Vision: FWB FEST 2023 and Beyond**\n\nFWB FEST 2022 made us realize the importance that a routine mass gathering plays in our community. If FWB’s future is to act as a new kind of social network, we believe FWB FEST has the potential to be our flagship event as a community and our north star — a time and place where we can come together to celebrate the community's latest achievements and communicate our aspirations.\n\nFor FWB FEST to realize this vision and for this to be a viable and sustainable operation, we believe there are a number of values we must hold true. Operating indie, micro-festivals is challenging, but by abiding by the below principles, we believe we have a path forward. \n\n1) Community-driven programming\n2) Financially accessible attendance \n3) Decentralized participation\n4) Break-Even Financials \n\n**Strategy: FWB FEST 23** \n\n**Business Model**\n\nFWB FEST 2023 will make a few primary adjustments from 2022 that will allow it to become more sustainable while fostering the same quality of experience.\n\n**1) Increase community programming & Decrease booked talent**\n\n\nOne of the biggest draws for FWB FEST 2022 was the community itself. Rather than running from stage to stage to catch every performance or talk, a lot of attendees voiced an interest in more down time with other attendees.\n\nSimultaneously, we plan to double down on community driven discussions and talks, which were a huge hit at FWB FEST 2022. These in-the-round sessions hosted in the library by community members created a more informal setting that often led to a higher sense of engagement and discourse.  \n\nWe will find more robust ways to drive community programming using a submission-based format as well as creating more impromptu community moments at the festival. This creates the opportunity to reduce cost from outside higher priced talent and focus those budgets on more decentralized programming, ultimately reducing programming costs by nearly 40%.\n\n**2) Shift food and beverage to à la carte**\n\nOne of the easier ways to cut costs to the DAO is to streamline the food program. While last year was epic, no other festivals take on the burden of feeding attendees. Moving forward, we will adhere to the standard festival model, with simple affordable options, with the exception of Thursday when food will be free to all FWB Day attendees (see below).\n\n**3) Shifts tickets to fiat & stable coin** \n\nTo reduce the impact of market dynamics on the FEST P&L, pricing tickets in fiat and stablecoin will make financial planning easier while incurring less transaction costs in paying vendors and talent.\n\nAdditionally, this allows us to sell tickets to prospective FWB members as well as friends & family of FWB members.\n\nFWB members will be able to purchase tickets for $399 and non-members will be able to purchase for $499.\n\n**4) Add an FWB day only for members, denominated in $FWB**\n\nIn addition to our Friday-Sunday schedule,  we will be adding a bonus day of programming on Thursday that only community members can attend through a separate ticket, about the future of FWB. This FWB early access day will allow for members to have early on-site arrival as well as create a dedicated space to connect with other OG members as well as discuss the future of the FWB DAO. Programming will include discussions led by contributors, major initiatives and projects in the works, a Town Hall, and more. Tickets for this early access day will be only available for FWB members, at an additional $FWB price.\n\n**5) Create a clear way to transact in $FWB token**\n\nIn order to create more on-site utility for the FWB token, we will be creating an FWB flea-market where community members can sell wares to each other, denominated in both $FWB and FIAT. FWB will charge vendor fees in $FWB.\n\n**Key Takeaways & Improvements** \n\nWith this strategy in mind, we will be applying our learnings from FWB FEST 2022 to implement the following improvements in 2023: \n\n**Ticket sales**\n\n1) Tickets will be sold with a 5-month lead time at minimum.\n2) Capacity will be increased to 1000 tickets, compared to 500 in 2022, which will help with profitability due to largely stable production and operation costs.\n3) Tickets will be priced in USD, USDC, and ETH, creating multiple purchasing options for more accessible entry.\n4) We will introduce premium tickets that include housing, including RV housing options for people who want to stay on-site.\n5) We will launch an early arrival day (Thursday), exclusive for FWB members and priced in $FWB, allowing for early check-in, community-focused conversation, and entertainment.\n6) We will explore on-campus housing at the dorms as a potential lower-cost option. \n\n**Budget**\n\n7) Budget to be shared with community before FEST, along with contingency plans that will be put up to vote \n8) We will lower overall musical talent budget and costs by 25 percent, through decreasing volume of acts and implementing more community programming \n9) Like at FWB FEST 2022, food and beverage will be complementary on Thursday, but  for sale on Friday and Saturday\n\n**Marketing**\n\n10) Better communicate that this is a destination festival in advance, so attendees have time to make plans\n\n**Opportunities for community involvement** \n\n11) Build more thorough pipeline for all FWB members to contribute music and educational programming\n12) Create opportunities for FWB members to assist with on-site production or facilitation in exchange for a FEST ticket\n13) Create a “Community Flea Market” that allows community members to sell products to each other \n\n**2023 Festival P&L**\n\nWe project higher revenue in 2023, due to increased capacity, increased partnership interest (due to increased attendance as well as heavy press and social presence from year 1), and adjusted models for food & beverage and merchandise.\n\nTickets will be $399 for members, $499 for non-members. Members who want to attend early access day on August 10th can purchase separate tickets in $FWB.\n\nBelow are three potential P&Ls based on three different ticket sales benchmarks: 1000 tickets, 1500 tickets, and 2000 tickets.\n\n| Projected FEST P&L - 1000 tix |  |\n|--|--|\n| **Revenue** |  |\n| Sponsorships | $ 350,000\n| Ticket Sales (1000) | $ 503,980\n| F&B, Merch Sales | $ 25,000\n|**Total Revenue** |$ 878,980\n|**Expenses**\n| CA Sales Tax | $ 50,000\n|Talent | $ 200,000\n| Production/Operations | $ 385,000\n| Marketing | $ 30,000\n| F&B | $ 20,000\n| Admin/Staff | $ 130,000\n| **Total Expenses** | $815,000\n| **Projected Net Profit** | $ 63,980\n|\n| **Projected FEST P&L - 1500 tix** |  |\n|**Revenue**\n| Sponsorships | $ 350,000\n| Ticket Sales (1500) | $ 713,480\n| F&B, Merch Sales | $ 37,500\n| **Total Revenue** |$ 1,100,980\n| **Expenses**\n| CA Sales Tax | $ 50,000\n| Talent | $ 225,000\n| Production/Operations | $ 385,000\n| Marketing | $ 30,000\n| F&B | $ 20,000\n| Admin/Staff | $ 130,000\n| **Total Expenses** | $840,000\n| Projected Net Profit | $ 285,980\n|\n|**Projected FEST P&L - 2000 tix**\n| **Revenue**\n| Sponsorships | $ 350,000\n| Ticket Sales (2000) | $ 580,000\n| F&B, Merch Sales | $ 50,000\n| **Total Revenue** | $ 1,337,980\n| **Expenses**\n| CA Sales Tax | $ 50,000\n| Talent | $ 225,000\n| Production/Operations | $ 385,000\n| Marketing | $ 30,000\n| F&B | $ 20,000\n| Admin/Staff | $ 130,000\n| **Total Expenses** | $840,000\n| **Projected Net Profit** | $ 522,980\n\n**Timeline & Marketing Schedule**\n\n**Go-To-Market Strategy**\n\nOur goal is to use our community and marketing assets from last year to build real demand around FEST as the “web3 cultural event of the year.” Our multi-pronged marketing approach will include press, owned social channels, Discord, FWBApp, and partner communities. In addition to our own network, we will be leveraging our connections in the wider world of music and web3, so that we have number of like-minded communities helping us spread the word from the moment tickets go on sale. \n\n**Timeline**\n![](https://i.ibb.co/RQnjHPK/Clean-Shot-2023-02-07-at-12-01-38-2x.png)\n\n**Conclusion** \n\nFWB FEST 2022 showed us the power that a routine mass gathering can play inside of the FWB ecosystem. It was revitalizing for the community, created a stronger sense of purpose for members and contributors alike, and contextualized FWB as being beyond “a crypto Discord”.\n\nThe capacity to evolve FWB FEST into a sustainable experience that brings us together once a year, despite a member’s level of engagement digitally, feels important and the opportunity for FWB FEST to drive FWB’s expansion into cultural markets is sizable. \n\nThis being said, we do not propose this lightly: events are a massive draw on resources, in terms of time, money, and personnel. Especially in a bear market, we cannot guarantee that FEST will do well financially, and there is a possibility that it could cut into our treasury. \n\nWe feel confident that despite the potential downside, the upside far outweighs the negative. Still, this is a major decision for the DAO, and one we must collectively agree upon as a group. The writers of this proposal invite members of FWB to voice their opinions and concerns, so we can address each of them  constructively and together. Our goal is to open up the process and level up FEST so that each participant can feel proud of what we have accomplished.",
    },
  },
};
