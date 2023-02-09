"use client";

import {
  ChevronLeftIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleLeftRightIcon,
  ArchiveBoxArrowDownIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import { ClockIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import daoLogo from "@/images/fwb.png";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const votes = [
  {
    address: "bodge.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "2K FWB",
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x625D6405DCac9C82F4b681A131d9182115448F75?s=36",
  },
  {
    address: "nufrontiers.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "1.1K FWB",
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x083227628A8ce4B78AC244Ffd140392393024242?s=36",
  },
  {
    address: "0x7AE4...0f5d",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "700 FWB",
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x7AE41835444183A23bAA10EbfdF2997D10130f5d?s=36",
  },
  {
    address: "drewcoffman.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "551 FWB",
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0xc7A0D765C3aF6E2710bA05A56c5E2cA190C2E11e?s=36",
  },
  {
    address: "kirkusmaximus.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "543 FWB",
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x2afE4De9D1C679E42C03649D86FFDDDc07751AE6?s=36",
  },
  {
    address: "0xE802...Dce8",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "450 FWB",
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0xE802A4D7dBB8c2010b336A49f86a765a7eb0Dce8?s=36",
  },
  {
    address: "gbresnitz.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "385 FWB",
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x473e95Ac3646D286651aDF5Fa736368DFdCf9605?s=36",
  },
  {
    address: "0x7d8D...7e8F",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "365 FWB",
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x7d8D2c8EA18f9a3Da11066f02057DAd708f97e8F?s=36",
  },
  {
    address: "quintela.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "322 FWB",
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x26982bdD9A25dEa454d62B5BeC236B4ECd0A5b0b?s=36",
  },
  {
    address: "fabiolaio.eth",
    vote: "Yes: Approve FWB Fest 2023",
    voteAmount: "261 FWB",
    avatar:
      "https://cdn.stamp.fyi/avatar/eth:0x06A61Fd03051ae191C5c0321324c85Db11340bc7?s=36",
  },
];

enum ProposalState {
  ActiveVote = "Active Vote",
  Succeeded = "Succeeded",
  Failed = "Failed",
  PreliminaryDiscussion = "Preliminary Discussion",
}

export default function Proposal() {
  const [proposalStatus, setProposalStatus] = useState<ProposalState>(
    ProposalState.ActiveVote
  );
  const [votesDialogOpen, setVotesDialogOpen] = useState(true);

  function ProposalStatusBadge() {
    const statuses = [
      {
        state: "Active Vote",
        colorClasses: "bg-blue-100 text-blue-800",
        icon: (
          <ArchiveBoxArrowDownIcon
            className="mr-1.5 h-5 w-5 flex-shrink-0 text-blue-400"
            aria-hidden="true"
          />
        ),
      },
      {
        state: "Succeeded",
        colorClasses: "bg-green-100 text-green-800",
        icon: (
          <CheckIcon
            className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
            aria-hidden="true"
          />
        ),
      },
      {
        state: "Failed",
        colorClasses: "bg-red-100 text-red-800",
        icon: (
          <XMarkIcon
            className="mr-1.5 h-5 w-5 flex-shrink-0 text-red-400"
            aria-hidden="true"
          />
        ),
      },
      {
        state: "Preliminary Discussion",
        colorClasses: "bg-gray-100 text-gray-800",
        icon: (
          <ChatBubbleLeftRightIcon
            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
        ),
      },
    ];

    return (
      // return the correct badge based on the proposalStatus
      <dd className="flex items-center text-sm font-medium capitalize text-gray-100 sm:mr-6">
        <span
          className={clsx(
            statuses.find((status) => status.state === proposalStatus)
              ?.colorClasses,
            "inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium"
          )}
        >
          {statuses.find((status) => status.state === proposalStatus)?.icon}
          {proposalStatus}
        </span>
      </dd>
    );
  }

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

  const offChainVoteLink =
    "https://snapshot.org/#/friendswithbenefits.eth/proposal/0x263facf9dc0019d86e182e0573c1239ed7fd1ecb0060abab4835c0ac1a26d1e9";

  return (
    <>
      {/* Debug button to change state */}
      {/* <button
        type="button"
        className="inline-flex items-center fixed top-20 right-2 rounded-full border border-transparent bg-purple-500 p-3 text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        onClick={debugChangeStatus}
      >
        <ArrowPathIcon className="h-6 w-6" aria-hidden="true" />
      </button> */}

      {/* Votes Dialog */}
      <Transition.Root show={votesDialogOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setVotesDialogOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pt-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-y-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-y-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen">
                    <div className="flex h-full flex-col overflow-y-scroll bg-messari-400 py-6 shadow-xl rounded-t-md">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-white">
                            Votes
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-messari-blue-dark-500 focus:ring-offset-2"
                              onClick={() => setVotesDialogOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-800">
                            <tbody className="divide-y divide-gray-800 bg-messari-600">
                              {votes.map((vote) => (
                                <tr
                                  key={vote.address}
                                  className="text-white text-sm"
                                >
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-white sm:pl-6">
                                    <div className="flex items-center justify-start space-x-1">
                                      <Image
                                        src={vote.avatar}
                                        alt="DAO Logo"
                                        className="rounded-full bg-zinc-100 object-cover h-6 w-6"
                                        priority
                                        width={24}
                                        height={24}
                                      />
                                      <span>
                                        {/* truncate address */}
                                        {vote.address.length > 10
                                          ? vote.address.substring(0, 10) +
                                            "..."
                                          : vote.address}
                                      </span>
                                    </div>
                                  </td>

                                  <td className="whitespace-nowrap px-3 py-4">
                                    {vote.vote.substring(0, 15) + "..."}
                                  </td>

                                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right font-medium sm:pr-6">
                                    {vote.voteAmount}
                                  </td>

                                  <td className="hidden sm:table-cell whitespace-nowrap py-4 pl-3 pr-4 text-right font-medium sm:pr-6">
                                    {/* Progress Bar with vote count */}
                                    <div className="">
                                      <div className="bg-messari-300 rounded-full">
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
                            className="flex items-center justify-between border-t border-gray-800 bg-messari-600 px-4 py-3 sm:px-6"
                            aria-label="Pagination"
                          >
                            <div className="flex flex-1 justify-center">
                              <button
                                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                onClick={() =>
                                  console.log("loading more votes...")
                                }
                              >
                                Load More
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

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
                    <Link
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="sm:mt-8 lg:-mt-36">
              <div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
                {/* Cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Summary card */}
                  <div className="overflow-hidden bg-messari-600 shadow">
                    <div className="bg-messari-600 px-5 py-3 border-b border-gray-700">
                      <h3 className="text-md md:text-lg truncate font-medium text-white">
                        Summary
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-100">
                        This proposal aims to confirm the production of the FWB
                        FEST 2023 from Aug. 10-13, 2023. The proposal recommends
                        tickets be priced at $399 for members and $499 for
                        non-members and projects profits from $63,980 - $522,980
                        depending on the amount of tickets sold.
                      </p>
                    </div>
                  </div>

                  {/* Active vote card */}
                  <div className="overflow-hidden rounded-lg bg-messari-600 shadow">
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
                            <span className="text-white">90%</span>
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
                            <span className="text-white">10%</span>
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

              {/* Votes Table */}
              <div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead className="bg-messari-600 w-full">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-md md:text-lg font-medium text-white sm:pl-6"
                      >
                        Votes
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      ></th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      ></th>
                      <th
                        scope="col"
                        className="hidden sm:table-cell py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 bg-messari-600">
                    {votes.map((vote) => (
                      <tr key={vote.address} className="text-white text-sm">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-white sm:pl-6">
                          <div className="flex items-center justify-start space-x-1">
                            <Image
                              src={vote.avatar}
                              alt="DAO Logo"
                              className="rounded-full bg-zinc-100 object-cover h-6 w-6"
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

                        <td className="whitespace-nowrap px-3 py-4">
                          {vote.vote.substring(0, 15) + "..."}
                        </td>

                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right font-medium sm:pr-6">
                          {vote.voteAmount}
                        </td>

                        <td className="hidden sm:table-cell whitespace-nowrap py-4 pl-3 pr-4 text-right font-medium sm:pr-6">
                          {/* Progress Bar with vote count */}
                          <div className="">
                            <div className="bg-messari-300 rounded-full">
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
                  className="flex items-center justify-between border-t border-gray-800 bg-messari-600 px-4 py-3 sm:px-6"
                  aria-label="Pagination"
                >
                  <div className="flex flex-1 justify-center">
                    <button
                      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      onClick={() => setVotesDialogOpen(true)}
                    >
                      View All 51 Voters
                    </button>
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
