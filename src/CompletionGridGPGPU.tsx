import React, { useEffect, useState } from "react";
import { CompletionGrid } from "./CompletionGrid";

const CompletionGridGPGPU: React.FC = () => {
  const [completedCount, updateCount] = useState(0);

  return <CompletionGrid completedCount={completedCount} totalCount={100} />;
};

export default CompletionGridGPGPU;
