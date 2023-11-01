import React from "react";
import { Direction } from "../../types/types";

interface ActionListProps {
  actionData: string[];
  nextDirectionAction: Direction;
}

function ActionList({ actionData, nextDirectionAction }: ActionListProps) {
  return (
    <div className="border p-2 rounded bg-grey">
      {actionData.map((line, index) => {
        if (line) {
          return (
            <div className="whitespace-nowrap" key={index}>
              [{line}] - [{nextDirectionAction}]
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default ActionList;
