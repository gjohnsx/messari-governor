"use client";

import OldProposal from "./OldProposal";
import NewProposal from "./NewProposal";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

export default function VersionSwitch() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    console.log("VersionSwitch: enabled", enabled);
  }, [enabled]);

  return (
    <>
      {/* <div className="fixed flex items-center justify-between h-16 px-4 py-2 space-x-1 text-white bg-gray-700 border border-gray-200 rounded-full shadow w-72 bottom-14 md:left-1/3 left-10">
        <p>
          Switch between versions
        </p>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-messari-blue-light" : "bg-gray-500"
          } inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div> */}

      {enabled ? <NewProposal /> : <OldProposal />}
    </>
  );
}
