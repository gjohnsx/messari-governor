"use client";

import OldProposal from "./OldProposal";
import NewProposal from "./NewProposal";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

export default function VersionSwitch() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    console.log("VersionSwitch: enabled", enabled);
  }, [enabled]);

  return (
    <div>
      {/* <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-messari-blue-light" : "bg-messari-300"
        } fixed top-40 right-20 inline-flex h-6 w-11 items-center rounded-full ring ring-messari-blue-dark`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch> */}
      {enabled ? <NewProposal /> : <OldProposal />}
    </div>
  );
}
