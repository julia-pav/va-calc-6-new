import { useMachine } from "@xstate/react";
import { Machine, assign } from "xstate";
import vaScript from "../../public/vaop/va-scripts/vaScriptBase10_v1.json";
import {
  Flex,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

type Direction = "Direction_init" | "Direction_zero";
// ... (other directions)

type VaScriptAction = {
  [direction in Direction]: string;
};

type ButtonProps = {
  onClick: () => void;
};

function ActionButton({
  variantB = "solid",
  colorB,
  label,
  direction,
  onClick,
}: {
  variantB?: string;
  colorB: string;
  label: string;
  direction: Direction;
  onClick: (direction: Direction) => void;
}) {
  return (
    <Button
      variant={variantB}
      colorScheme={colorB}
      onClick={() => onClick(direction)}
    >
      {label}
    </Button>
  );
}

type CalcContext = {
  currentAction: string;
  previousAction: string;
  directionAction: Direction;
  operandOne: string;
  operandTwo: string;
  result: string;
  warningMsg: string;
};

type CalcEvent =
  | { type: "CLICK"; direction: Direction }
  | { type: "UPDATE_RESULT"; result: string };

const calcMachine = Machine<CalcContext, CalcEvent>(
  {
    id: "calculator",
    initial: "active",
    context: {
      currentAction: "Action_init",
      previousAction: "Action_init",
      directionAction: "Direction_init",
      operandOne: "",
      operandTwo: "",
      result: "",
      warningMsg: "",
    },
    states: {
      active: {
        on: {
          CLICK: {
            actions: "getAction",
          },
        },
      },
    },
  },
  {
    actions: {
      getAction: assign((context, event) => {
        const direction = event.direction;
        // ... (your existing logic here)
        const nextAction = vaScript[context.currentAction][direction];
        // ... (continue with your logic)
        return {
          ...context,
          currentAction: nextAction,
          directionAction: direction,
          previousAction: context.currentAction,
        };
      }),
    },
  }
);

function CalcBase10() {
  const [state, send] = useMachine(calcMachine);

  const {
    currentAction,
    previousAction,
    directionAction,
    operandOne,
    operandTwo,
    result,
    warningMsg,
  } = state.context;

  return (
    <div>
      {/* (your JSX code here) */}
      <ActionButton
        colorB="blue"
        label="[ 1 ]"
        direction="Direction_one"
        onClick={() => send({ type: "CLICK", direction: "Direction_one" })}
      />
      {/* (other buttons with similar changes) */}
      <p>
        <img src="v-agent_32x32.png" alt="v-agent" width="32" height="32" />{" "}
        &nbsp; Powered by VAOP
      </p>
      <p>
        <small>previousAction:</small>[{previousAction}] ==&gt;{" "}
        <small>directionAction:</small>[{directionAction}] ==&gt;{" "}
        <small>currentAction:</small>[{currentAction}]
      </p>
    </div>
  );
}

export default CalcBase10;
