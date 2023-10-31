import React from "react";

interface ActionListProps {
  actionData: string[];
}

function ActionList({ actionData }: ActionListProps) {
  return (
    <div className="border p-2 rounded bg-grey">
      {actionData.map((line, index) => (
        <div className="whitespace-nowrap" key={index}>
          {line}
        </div>
      ))}
    </div>
  );
}

export default ActionList;
