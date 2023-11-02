import vaScript from "../../public/vaop/va-scripts/vaScriptBase10_v1.json";
import {
  Flex,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

import { VaScriptAction } from "../../types/types";
import { Direction } from "../../types/types";
import { ActionMap } from "../../types/types";
import { ActionMapping } from "../../types/types";
import ActionList from "./ActionList";
import ActionButton from "./ActionButton";
import Action_show_result from "./Actions/Action_show_result";


function CalcBase10() {
	const [currentAction, setCurrentAction] = useState<VaScriptAction>("Action_init");
	const [previousAction, setPreviousAction] = useState<VaScriptAction>("Action_init");
	const [directionAction, setDirectionAction] = useState<Direction>("Direction_init");
	const [nextDirectionAction, setNextDirectionAction] = useState<Direction>("nextDirection_init");
	const [operandOne, setOperandOne] = useState<string>("");
	const [operandTwo, setOperandTwo] = useState<string>("");
	const [result, setResult] = useState<string>("");
	const [warningMsg, setWarningMsg] = useState<string>("");
	const [actionsText, setActionsText] = useState<string>("actionsText_init");
	const [actionLines, setActionsLines] = useState<string[]>([]);

  const actionFunctions: Record<VaScriptAction, Function> = {
    // Action_init,
    // Action_operand_1_attach_zero,
    // Action_operand_1_attach_one,
    // Action_operand_1_attach_two,
    // Action_operand_1_attach_three,
    // Action_operand_1_attach_four,
    // Action_operand_1_attach_five,
    // Action_operand_1_attach_six,
    // Action_operand_1_attach_seven,
    // Action_operand_1_attach_eight,
    // Action_operand_1_attach_nine,
    // Action_waiting_for_operand_2_for_plus,
    // Action_operand_2_attach_zero,
    // Action_operand_2_attach_one,
    // Action_operand_2_attach_two,
    // Action_operand_2_attach_three,
    // Action_operand_2_attach_four,
    // Action_operand_2_attach_five,
    // Action_operand_2_attach_six,
    // Action_operand_2_attach_seven,
    // Action_operand_2_attach_eight,
    // Action_operand_2_attach_nine,
    // Action_warning_10__Second_operand_is_missing,
    // Action_clear,
    Action_show_result
  };

  //const { Action_show_result } = require('./Actions/Action_show_result');

	const handleMouseOver = (inputData: Direction): void => {
		setNextDirectionAction(inputData);
	  };

	const handleMouseLeave = (): void => {
		setNextDirectionAction("nextDirection_init");
	  };

  function getAction(direction: Direction) {
    console.log("Click!!!");
    console.log(direction);

    setWarningMsg("");

    const nextAction = vaScript[currentAction][direction] as VaScriptAction;

    var temp = getActionsBlockFromScriptByAction(nextAction);
    const actionLines = temp.split("\n");
    setActionsLines(actionLines);
    setActionsText(temp);

    if (vaScript.hasOwnProperty(nextAction)) {
      console.log("currentAction in case:[" + nextAction + "]");

      switch (nextAction) {
        case "Action_init":
          // do nothing
          break;
        case "Action_clear":
          setOperandOne("");
          setOperandTwo("");
          setResult("");
          break;
        case "Action_show_result":
          actionFunctions[nextAction](operandOne, operandTwo, setResult);
          break;
        case "Action_operand_1_attach_zero":
          setOperandOne(operandOne + "0");
          break;
        case "Action_operand_1_attach_one":
          setOperandOne(operandOne + "1");
          break;
        case "Action_operand_1_attach_two":
          setOperandOne(operandOne + "2");
          break;
        case "Action_operand_1_attach_three":
          setOperandOne(operandOne + "3");
          break;
        case "Action_operand_1_attach_four":
          setOperandOne(operandOne + "4");
          break;
        case "Action_operand_1_attach_five":
          setOperandOne(operandOne + "5");
          break;
        case "Action_operand_1_attach_six":
          setOperandOne(operandOne + "6");
          break;
        case "Action_operand_1_attach_seven":
          setOperandOne(operandOne + "7");
          break;
        case "Action_operand_1_attach_eight":
          setOperandOne(operandOne + "8");
          break;
        case "Action_operand_1_attach_nine":
          setOperandOne(operandOne + "9");
          break;
        case "Action_waiting_for_operand_2_for_plus":
          // do nothing
          break;
        case "Action_operand_2_attach_zero":
          setOperandTwo(operandTwo + "0");
          break;
        case "Action_operand_2_attach_one":
          setOperandTwo(operandTwo + "1");
          break;
        case "Action_operand_2_attach_two":
          setOperandTwo(operandTwo + "2");
          break;
        case "Action_operand_2_attach_three":
          setOperandTwo(operandTwo + "3");
          break;
        case "Action_operand_2_attach_four":
          setOperandTwo(operandTwo + "4");
          break;
        case "Action_operand_2_attach_five":
          setOperandTwo(operandTwo + "5");
          break;
        case "Action_operand_2_attach_six":
          setOperandTwo(operandTwo + "6");
          break;
        case "Action_operand_2_attach_seven":
          setOperandTwo(operandTwo + "7");
          break;
        case "Action_operand_2_attach_eight":
          setOperandTwo(operandTwo + "8");
          break;
        case "Action_operand_2_attach_nine":
          setOperandTwo(operandTwo + "9");
          break;
        case "Action_warning_10__Second_operand_is_missing":
          setWarningMsg("Second operand is missing");
          break;
        default:
          console.log("Error: Unknown action in default:[" + nextAction + "]");
      }
    } else {
      switch (nextAction) {
        default:
          console.log("Error: [" + nextAction + "]");
      }

      console.log("Stop --> [" + nextAction + "]");
    }

    setDirectionAction(direction);
    setPreviousAction(currentAction);
    setCurrentAction(nextAction);
  }
  return (
    // @ts-ignore
    <VStack p={2}>
      <Text fontSize="50px" color="gray">
        va-calculator (base 10)
      </Text>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <div>
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
              <ActionButton
                colorB="blue"
                label="[ 1 ]"
                direction="Direction_one"
                onClick={(direction: Direction) => getAction(direction)}
  				onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="blue"
                label="[ 2 ]"
                direction="Direction_two"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="blue"
                label="[ 3 ]"
                direction="Direction_three"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
            </HStack>

            <HStack spacing={4}>
              <ActionButton
                colorB="blue"
                label="[ 4 ]"
                direction="Direction_four"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="blue"
                label="[ 5 ]"
                direction="Direction_five"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="blue"
                label="[ 6 ]"
                direction="Direction_six"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
            </HStack>

            <HStack spacing={4}>
              <ActionButton
                colorB="blue"
                label="[ 7 ]"
                direction="Direction_seven"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="blue"
                label="[ 8 ]"
                direction="Direction_eight"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="blue"
                label="[ 9 ]"
                direction="Direction_nine"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
            </HStack>

            <HStack spacing={4}>
              <ActionButton
                variantB="outline"
                colorB="teal"
                label="[ 0 ]"
                direction="Direction_zero"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="gray"
                label="[ + ]"
                direction="Direction_plus"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
              <ActionButton
                colorB="gray"
                label="[ = ]"
                direction="Direction_equal"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
            </HStack>

            <HStack spacing={4}>
              <ActionButton
                colorB="gray"
                label="[ CA ]"
                direction="Direction_clear"
                onClick={(direction: Direction) => getAction(direction)}
  				      onMouseOver={(direction: Direction) => handleMouseOver(direction)}
  				      onMouseLeave={() => handleMouseLeave()}
              />
            </HStack>
          </VStack>

          {/* <p>
        <img src="v-agent_32x32.png" alt="v-agent" width="32" height="32" /> &nbsp;  Powered by VAOP  
        </p> */}
          {/* <p>
            <small>previousAction:</small>[{previousAction}] ==&gt;{" "}
            <small>directionAction:</small>[{directionAction}] ==&gt;{" "}
            <small>currentAction:</small>[{currentAction}]
          </p> */}
        </div>
        <div className="">
          <Text as="i" fontSize="12px" color="blue">
            <ActionList actionData={actionLines} nextDirectionAction={nextDirectionAction} />
          </Text>
        </div>
      </Stack>
    </VStack>
  );
}


function getActionsBlockFromScriptByAction(action: VaScriptAction): string {
  let directionMappings = vaScript[action] as ActionMapping;
  let resultString: string = "";

  for (const key in directionMappings) {
    if (directionMappings.hasOwnProperty(key)) {
      const value: VaScriptAction = directionMappings[key];
      resultString += `${key} --- ${value}\n`;
    }
  }

  return resultString;
}

// const getActionsBlockFromScriptByAction = (action: string): string => {
//   const directionMappings = vaScript[action];

//   return Object.keys(directionMappings)
//     .filter(key => directionMappings.hasOwnProperty(key))
//     .map(key => `${key},${directionMappings[key]}\n\n\n`)
//     .join('');
// };



export default CalcBase10;
