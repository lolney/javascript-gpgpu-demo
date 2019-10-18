import React from "react";
import styles from "./styles.module.css";

type CompletionCellProps = {
  completed?: boolean;
};

type CompletionGridProps = {
  completedCount: number;
  totalCount: number;
};

const CompletionCell: React.FC<CompletionCellProps> = ({ completed }) => (
  <div style={{color: completed ? 'green' : 'red'}}>{completed ? "✔" : "❓"}</div>
);

export const CompletionGrid: React.FC<CompletionGridProps> = ({
  completedCount,
  totalCount
}) => (
  <div className={styles.grid}>
    {Array(completedCount)
      .fill(0)
      .map((_, i) => (
        <CompletionCell completed key={i} />
      ))}
    {Array(totalCount - completedCount)
      .fill(0)
      .map((_, i) => (
        <CompletionCell key={i} />
      ))}
  </div>
);
