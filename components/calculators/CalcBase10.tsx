import { useMachine } from "@xstate/react";
import { Machine, assign } from "xstate";
import vaScript from "../../public/vaop/va-scripts/vaScriptBase10_v1.json";
import { Text, Button, VStack, HStack } from "@chakra-ui/react";
import { useState } from "react";

type Direction =
  | "Direction_init"
  | "Direction_zero"
  | "Direction_one"
  | "Direction_two"
  | "Direction_three"
  | "Direction_four"
  | "Direction_five"
  | "Direction_six"
  | "Direction_seven"
  | "Direction_eight"
  | "Direction_nine"
  | "Direction_plus"
  | "Direction_equal"
  | "Direction_clear";

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
        const nextAction = vaScript[context.currentAction][direction];

        if (vaScript.hasOwnProperty(nextAction)) {
          switch (nextAction) {
            case "Action_init":
              // do nothing
              break;
            case "Action_clear":
              return {
                ...context,
                operandOne: "",
                operandTwo: "",
                result: "",
              };
            case "Action_show_result":
              const temp = +context.operandOne + +context.operandTwo;
              return {
                ...context,
                result: temp.toString(),
              };
            case "Action_operand_1_attach_zero":
              return {
                ...context,
                operandOne: context.operandOne + "0",
              };
            // Add other cases for operand_1_attach_one, operand_1_attach_two, etc.
            case "Action_waiting_for_operand_2_for_plus":
              // do nothing
              break;
            case "Action_operand_2_attach_zero":
              return {
                ...context,
                operandTwo: context.operandTwo + "0",
              };
            // Add other cases for operand_2_attach_one, operand_2_attach_two, etc.
            case "Action_warning_10__Second_operand_is_missing":
              return {
                ...context,
                warningMsg: "Second operand is missing",
              };
            default:
              console.log(
                "Error: Unknown action in default:[" + nextAction + "]"
              );
          }
        } else {
          switch (nextAction) {
            default:
              console.log("Error: [" + nextAction + "]");
          }
          console.log("Stop --> [" + nextAction + "]");
        }

        return {
          ...context,
          directionAction: direction,
          previousAction: context.currentAction,
          currentAction: nextAction,
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
      <Text fontSize="50px" color="gray">
        va-calculator (base 10)
      </Text>
      <Text fontSize="25px" color="gray">
        [{operandOne}] + [{operandTwo}] = [{result}]
      </Text>
      <Text fontSize="25px" color="black">
        &nbsp;
      </Text>
      <Text as="i" fontSize="25px" color="red">
        {warningMsg}
      </Text>
      <Text fontSize="25px" color="red">
        &nbsp;
      </Text>
      <VStack spacing={3} align="start">
        <HStack spacing={4}>
          <Button
            colorScheme="blue"
            onClick={() => send({ type: "CLICK", direction: "Direction_one" })}
          >
            [ 1 ]
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => send({ type: "CLICK", direction: "Direction_two" })}
          >
            [ 2 ]
          </Button>
          <Button
            colorScheme="blue"
            onClick={() =>
              send({ type: "CLICK", direction: "Direction_three" })
            }
          >
            [ 3 ]
          </Button>
        </HStack>

        <HStack spacing={4}>
          <Button
            colorScheme="blue"
            onClick={() => send({ type: "CLICK", direction: "Direction_four" })}
          >
            [ 4 ]
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => send({ type: "CLICK", direction: "Direction_five" })}
          >
            [ 5 ]
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => send({ type: "CLICK", direction: "Direction_six" })}
          >
            [ 6 ]
          </Button>
        </HStack>

        <HStack spacing={4}>
          <Button
            colorScheme="blue"
            onClick={() =>
              send({ type: "CLICK", direction: "Direction_seven" })
            }
          >
            [ 7 ]
          </Button>
          <Button
            colorScheme="blue"
            onClick={() =>
              send({ type: "CLICK", direction: "Direction_eight" })
            }
          >
            [ 8 ]
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => send({ type: "CLICK", direction: "Direction_nine" })}
          >
            [ 9 ]
          </Button>
        </HStack>

        <HStack spacing={4}>
          <Button
            variant="outline"
            colorScheme="teal"
            onClick={() => send({ type: "CLICK", direction: "Direction_zero" })}
          >
            [ 0 ]
          </Button>
          <Button
            colorScheme="gray"
            onClick={() => send({ type: "CLICK", direction: "Direction_plus" })}
          >
            [ + ]
          </Button>
          <Button
            colorScheme="gray"
            onClick={() =>
              send({ type: "CLICK", direction: "Direction_equal" })
            }
          >
            [ = ]
          </Button>
        </HStack>

        <HStack spacing={4}>
          <Button
            colorScheme="gray"
            onClick={() =>
              send({ type: "CLICK", direction: "Direction_clear" })
            }
          >
            [ CA ]
          </Button>
        </HStack>
      </VStack>

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
