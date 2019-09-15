import React from "react";

type CompletionGridProps = {
  completedCount: number;
  totalCount: number;
};

export const CompletionGrid: React.FC<CompletionGridProps> = ({
  completedCount,
  totalCount
}) => (
  <div>
    {Array(completedCount)
      .fill(0)
      .map((_, i) => (
        <div key={i} />
      ))}
    {Array(totalCount - completedCount)
      .fill(0)
      .map((_, i) => (
        <div key={i} />
      ))}
  </div>
);
