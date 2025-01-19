"use client";

import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { GiPeanut } from "react-icons/gi";
import { GiStrikingBalls } from "react-icons/gi";
import { GiBirdCage } from "react-icons/gi";
import { FaBaseballBatBall } from "react-icons/fa6";
import { GiFunnel } from "react-icons/gi";

const page = () => {
  return (
    <div>
      <Alert className="my-5">
        <GiStrikingBalls />
        <AlertTitle>Beer Ball</AlertTitle>
        <AlertDescription>
          4 People, winners receive 10 points each
        </AlertDescription>
      </Alert>

      <Alert className="my-5">
        <GiFunnel />
        <AlertTitle>Funnel Race</AlertTitle>
        <AlertDescription>
          Fastest time gets 10 points, slowest loses 5!
        </AlertDescription>
      </Alert>

      <Alert className="my-5">
        <GiBirdCage />
        <AlertTitle>Rage Cage</AlertTitle>
        <AlertDescription>
          Everyone who plays gets 5 points, loser loses 5 points
        </AlertDescription>
      </Alert>

      <Alert className="my-5">
        <FaBaseballBatBall />
        <AlertTitle>Baseball</AlertTitle>
        <AlertDescription>
          Flip cup & pong all at once. Winning team gets 10 points each
        </AlertDescription>
      </Alert>

    </div>
  );
};

export default page;
