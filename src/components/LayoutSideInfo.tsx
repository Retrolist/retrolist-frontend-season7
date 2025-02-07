import React from "react";
import { useProjectCount } from "../hooks/useProjectCount";
import { apiRound } from "../utils/api";
import { topic } from "../utils/common";
import { StatCard } from "./StatCard";

function votingPeriod(round: string) {
  switch (round) {
    case "5":
      return "Sep 30 - Oct 14";
    case "6":
      return "Oct 28th - Nov 13th";
    case "7":
      return "Feb 5 - Jul 31, 2025"
    case "8":
      return "Feb 13 - Jul 31, 2025"
    default:
      return "";
  }
}

function reward(round: string) {
  switch (round) {
    case "5":
      return "8M OP";
    case "6":
      return "2.4M OP";
    case "7":
      return "Up to 8M OP";
    case "8":
      return "Up to 8M OP"; 
    default:
      return "";

  }
}

export default function LayoutSideInfo({
  children,
}: {
  children: React.ReactNode;
}) {
  const projectCount = useProjectCount();
  const round = apiRound();

  return (
    <div className="container 2xl:max-w-[1440px] mt-11">
      <div className="relative hero-section-gradient-bg rounded-2xl flex items-center sm:px-10 lg:px-20 h-60 pb-8">
        <div
          className="hidden lg:block"
          style={{ maxWidth: "calc(100% - 260px)" }}
        >
          <div className="text-3xl lg:text-4xl font-bold">
            Season 7:{" "}
            <span className="text-red-600">{topic(round)}</span>
          </div>
        </div>
        <div
          className="block lg:hidden pl-8 sm:px-0"
        >
          <div className="text-3xl lg:text-4xl font-bold">
            <div className="mb-2">Season 7</div>
            <div className="text-red-600">{topic(round)}</div>
          </div>
        </div>
        <img
          className="absolute bottom-0 right-12 lg:right-24 hidden sm:block"
          src="/img/logo.png"
          alt="logo"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 justify-center relative -top-10 px-8">
        <StatCard
          title={projectCount.eligible ? "Eligible Projects" : "Projects"}
          description={`${
            projectCount.eligible || projectCount.total || "..."
          }`}
          icon="lucide:users-2"
        />
        <StatCard
          title="Voting Period"
          description={votingPeriod(round)}
          icon="lucide:calendar"
          size="text-xl sm:text-2xl"
        />
        <StatCard
          title="Total Rewards"
          description={reward(round)}
          icon="lucide:award"
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
