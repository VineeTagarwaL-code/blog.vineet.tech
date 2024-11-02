"use client";
import { useCallback, useEffect, useState } from "react";

import { Activity, ActivityCalendar } from "react-activity-calendar";

type GithubGraphProps = {
  username: string;
  blockMargin?: number;
  colorPallete?: string[];
};

export const GithubGraph = ({
  username,
  blockMargin,
  colorPallete,
}: GithubGraphProps) => {
  const [contribution, setContribution] = useState<Activity[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      const contributions = await fetchContributionData(username);
      setContribution(contributions);
    } catch (error) {
      throw Error("Error fetching contribution data");
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const label = {
    totalCount: `{{count}} contributions in the last year`,
  };

  return (
    <div className="mt-16">
      <ActivityCalendar
        data={contribution}
        maxLevel={4}
        blockMargin={blockMargin ?? 2}
        loading={loading}
        labels={label}
        theme={{
          light: colorPallete
            ? colorPallete
            : ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        }}
      />
    </div>
  );
};
async function fetchContributionData(username: string): Promise<Activity[]> {
  const response = await fetch(`https://github.vineet.tech/api/${username}`);
  const responseBody = await response.json();

  if (!response.ok) {
    throw Error("Erroring fetching contribution data");
  }
  return responseBody.data;
}
