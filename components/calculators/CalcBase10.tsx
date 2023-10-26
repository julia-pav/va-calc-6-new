import vaScript from '../../public/vaop/va-scripts/vaScriptBase10_v1.json';
import { Flex, Text, IconButton, Button, VStack, HStack } from '@chakra-ui/react'
import { useState } from 'react';

import { Direction } from '../../types/types';


  type VaScriptAction = {
    [direction in Direction]: string;
  };


  type ButtonProps = {
    onClick: () => void;
  };

 

function CalcBase10() {

  const [currentAction, setCurrentAction] = useState<string>('Action_init');
  const [previousAction, setPreviousAction] = useState<string>('Action_init');
  const [directionAction, setDirectionAction] = useState<Direction>('Direction_init');
  const [operandOne, setOperandOne] = useState<string>('');
  const [operandTwo, setOperandTwo] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [warningMsg, setWarningMsg] = useState<string>('rrrrr');
  const [actionsText, setActionsText] = useState<string>('actionsText_init');


  function getAction(direction: Direction) {
    console.log('Click!!!'); 
    console.log(direction); 

    setWarningMsg('');

    const nextAction = vaScript[currentAction][direction];

    setActionsText(getActionsBlockFromScriptByAction(nextAction));

    //setActionsText(nextAction);
  
    if(vaScript.hasOwnProperty(nextAction)){
  
      console.log('currentAction in case:[' + nextAction +']');

      

      switch(nextAction) {
        case "Action_init":
          // do nothing
          break;
        case "Action_clear":
          setOperandOne('');
          setOperandTwo('');
          setResult('')
          break;
        case "Action_show_result":
            var temp = +operandOne + +operandTwo;
            setResult(temp);
            break;
        case "Action_operand_1_attach_zero":
          setOperandOne(operandOne + '0')
          break;
        case "Action_operand_1_attach_one":
            setOperandOne(operandOne + '1')
            break;
          case "Action_operand_1_attach_two":
          setOperandOne(operandOne + '2')
          break;
        case "Action_operand_1_attach_three":
          setOperandOne(operandOne + '3')
          break;
        case "Action_operand_1_attach_four":
          setOperandOne(operandOne + '4')
          break;
        case "Action_operand_1_attach_five":
          setOperandOne(operandOne + '5')
          break;
        case "Action_operand_1_attach_six":
          setOperandOne(operandOne + '6')
          break;
        case "Action_operand_1_attach_seven":
          setOperandOne(operandOne + '7')
          break;
        case "Action_operand_1_attach_eight":
          setOperandOne(operandOne + '8')
          break;
        case "Action_operand_1_attach_nine":
          setOperandOne(operandOne + '9')
          break;
        case "Action_waiting_for_operand_2_for_plus":
          // do nothing
          break;
        case "Action_operand_2_attach_zero":
          setOperandTwo(operandTwo + '0')
          break;
        case "Action_operand_2_attach_one":
            setOperandTwo(operandTwo + '1')
            break;
        case "Action_operand_2_attach_two":
          setOperandTwo(operandTwo + '2')
          break;
        case "Action_operand_2_attach_three":
          setOperandTwo(operandTwo + '3')
          break;
        case "Action_operand_2_attach_four":
          setOperandTwo(operandTwo + '4')
          break;
        case "Action_operand_2_attach_five":
          setOperandTwo(operandTwo + '5')
          break;
        case "Action_operand_2_attach_six":
          setOperandTwo(operandTwo + '6')
          break;
        case "Action_operand_2_attach_seven":
          setOperandTwo(operandTwo + '7')
          break;
        case "Action_operand_2_attach_eight":
          setOperandTwo(operandTwo + '8')
          break;
        case "Action_operand_2_attach_nine":
            setOperandTwo(operandTwo + '9')
          break;
        case "Action_warning_10__Second_operand_is_missing":
          setWarningMsg('____Second operand is missing')
          break;
        default:
          console.log('Error: Unknown action in default:[' + nextAction + ']')
      }
    } else {
      switch(nextAction) {

          default:
            console.log('Error: [' + nextAction + ']')
        }


      console.log('Stop --> [' + nextAction + ']')
    }

    setDirectionAction(direction);
    setPreviousAction(currentAction);
    setCurrentAction(nextAction);
    

  }
  return (
    <div>
        <Text fontSize='50px' color='gray'>
            va-calculator (base 10)
        </Text>
        <Text fontSize='25px' color='gray'>
          [{operandOne}] + [{operandTwo}] = [{result}] 
        </Text>
        <Text fontSize='25px' color='black'>
          &nbsp; 
        </Text>   
        <Text as='i' fontSize='12px' color='red'>
          {actionsText}
        </Text>
        <Text fontSize='25px' color='red'>
          &nbsp; 
        </Text>      
          <VStack spacing={3} align="start">
            <HStack spacing={4}>
              <ActionButton colorB='blue' label="[ 1 ]" direction="Direction_one" onClick={getAction} />
              <ActionButton colorB='blue' label="[ 2 ]" direction="Direction_two" onClick={getAction} />
              <ActionButton colorB='blue' label="[ 3 ]" direction="Direction_three" onClick={getAction} />
            </HStack>

            <HStack spacing={4}>
              <ActionButton colorB='blue' label="[ 4 ]" direction="Direction_four" onClick={getAction} />
              <ActionButton colorB='blue' label="[ 5 ]" direction="Direction_five" onClick={getAction} />
              <ActionButton colorB='blue' label="[ 6 ]" direction="Direction_six" onClick={getAction} />
            </HStack>

            <HStack spacing={4}>
              <ActionButton colorB='blue' label="[ 7 ]" direction="Direction_seven" onClick={getAction} />
              <ActionButton colorB='blue' label="[ 8 ]" direction="Direction_eight" onClick={getAction} />
              <ActionButton colorB='blue' label="[ 9 ]" direction="Direction_nine" onClick={getAction} />
            </HStack>


            <HStack spacing={4}>
              <ActionButton variantB='outline' colorB='teal' label="[ 0 ]" direction="Direction_zero" onClick={getAction} />
              <ActionButton colorB='gray' label="[ + ]" direction="Direction_plus" onClick={getAction} />
              <ActionButton colorB='gray' label="[ = ]" direction="Direction_equal" onClick={getAction} />
            </HStack>

            <HStack spacing={4}>
             
              <ActionButton colorB='gray' label="[ CA ]" direction="Direction_clear" onClick={getAction} />
            </HStack>
          </VStack>
   
        <p>
        <img src="v-agent_32x32.png" alt="v-agent" width="32" height="32" /> &nbsp;  Powered by VAOP  
        </p>
        <p>
         <small>previousAction:</small>[{previousAction}] ==&gt; <small>directionAction:</small>[{directionAction}] ==&gt; <small>currentAction:</small>[{currentAction}]
        </p>
     
    </div>
  );
}

function ActionButton({ variantB='solid', colorB, label, direction, onClick }: { variantB?: string, colorB: string; label: string; direction: Direction; onClick: (direction: Direction) => void }) {
  return (
    <Button variant={variantB} colorScheme={colorB} onClick={() => onClick(direction)}>
      {label}
    </Button>
  );
}

function getActionsBlockFromScriptByAction(action:String){
  let directionMappings = vaScript[action];
  let resultString = '';

  for (const key in directionMappings) {
    if (directionMappings.hasOwnProperty(key)) {
      const value = directionMappings[key];
      resultString += `${key},${value}\n\n\n`;
    }
  }

  return resultString
}

// const getActionsBlockFromScriptByAction = (action: string): string => {
//   const directionMappings = vaScript[action];

//   return Object.keys(directionMappings)
//     .filter(key => directionMappings.hasOwnProperty(key))
//     .map(key => `${key},${directionMappings[key]}\n\n\n`)
//     .join('');
// };



export default CalcBase10;