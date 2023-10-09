import { Flex, Text, IconButton, Button, VStack, HStack } from '@chakra-ui/react'
import { useState } from 'react';

type Direction =
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

  type VaScriptAction = {
    [direction in Direction]: string;
  };

  const vaScript: Record<keyof typeof vaScript, VaScriptAction> = {
  "Action_init":{
     "Direction_one":"Action_operand_1_attach_one",
     "Direction_two":"Action_operand_1_attach_two",     
     "Direction_three":"Action_operand_1_attach_three",
     "Direction_four":"Action_operand_1_attach_four",     
    "Direction_five":"Action_operand_1_attach_five",     
    "Direction_six":"Action_operand_1_attach_six",     
    "Direction_seven":"Action_operand_1_attach_seven",     
    "Direction_eight":"Action_operand_1_attach_eight",     
    "Direction_nine":"Action_operand_1_attach_nine",     
     "Direction_plus":"Action_init",
     "Direction_equal":"Action_init",
     "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_one":{
     "Direction_one":"Action_operand_1_attach_one",
     "Direction_two":"Action_operand_1_attach_two",
     "Direction_three":"Action_operand_1_attach_three", 
     "Direction_four":"Action_operand_1_attach_four",     
    "Direction_five":"Action_operand_1_attach_five",     
    "Direction_six":"Action_operand_1_attach_six",     
    "Direction_seven":"Action_operand_1_attach_seven",     
    "Direction_eight":"Action_operand_1_attach_eight",     
    "Direction_nine":"Action_operand_1_attach_nine", 
     "Direction_plus":"Action_waiting_for_operand_2_for_plus",
     "Direction_equal":"Action_warning_10__Second_operand_is_missing",
     "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_two":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three", 
    "Direction_four":"Action_operand_1_attach_four",     
    "Direction_five":"Action_operand_1_attach_five",     
    "Direction_six":"Action_operand_1_attach_six",     
    "Direction_seven":"Action_operand_1_attach_seven",     
    "Direction_eight":"Action_operand_1_attach_eight",     
    "Direction_nine":"Action_operand_1_attach_nine", 
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_three":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",
    "Direction_four":"Action_operand_1_attach_four",     
    "Direction_five":"Action_operand_1_attach_five",     
    "Direction_six":"Action_operand_1_attach_six",     
    "Direction_seven":"Action_operand_1_attach_seven",     
    "Direction_eight":"Action_operand_1_attach_eight",     
    "Direction_nine":"Action_operand_1_attach_nine",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_four":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",
    "Direction_four":"Action_operand_1_attach_four",     
    "Direction_five":"Action_operand_1_attach_five",     
    "Direction_six":"Action_operand_1_attach_six",     
    "Direction_seven":"Action_operand_1_attach_seven",     
    "Direction_eight":"Action_operand_1_attach_eight",     
    "Direction_nine":"Action_operand_1_attach_nine",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_five":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",
    "Direction_four":"Action_operand_1_attach_four",     
    "Direction_five":"Action_operand_1_attach_five",     
    "Direction_six":"Action_operand_1_attach_six",     
    "Direction_seven":"Action_operand_1_attach_seven",     
    "Direction_eight":"Action_operand_1_attach_eight",     
    "Direction_nine":"Action_operand_1_attach_nine",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_six":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",
    "Direction_four":"Action_operand_1_attach_four",     
    "Direction_five":"Action_operand_1_attach_five",     
    "Direction_six":"Action_operand_1_attach_six",     
    "Direction_seven":"Action_operand_1_attach_seven",     
    "Direction_eight":"Action_operand_1_attach_eight",     
    "Direction_nine":"Action_operand_1_attach_nine",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_seven":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",
    "Direction_four":"Action_operand_1_attach_four",     
    "Direction_five":"Action_operand_1_attach_five",     
    "Direction_six":"Action_operand_1_attach_six",     
    "Direction_seven":"Action_operand_1_attach_seven",     
    "Direction_eight":"Action_operand_1_attach_eight",     
    "Direction_nine":"Action_operand_1_attach_nine",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_eight":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",
    "Direction_four":"Action_operand_1_attach_four",     
    "Direction_five":"Action_operand_1_attach_five",     
    "Direction_six":"Action_operand_1_attach_six",     
    "Direction_seven":"Action_operand_1_attach_seven",     
    "Direction_eight":"Action_operand_1_attach_eight",     
    "Direction_nine":"Action_operand_1_attach_nine",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_nine":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",
    "Direction_four":"Action_operand_1_attach_four",     
    "Direction_five":"Action_operand_1_attach_five",     
    "Direction_six":"Action_operand_1_attach_six",     
    "Direction_seven":"Action_operand_1_attach_seven",     
    "Direction_eight":"Action_operand_1_attach_eight",     
    "Direction_nine":"Action_operand_1_attach_nine",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_warning_10__Second_operand_is_missing":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three", 
    "Direction_four":"Action_operand_1_attach_four",     
    "Direction_five":"Action_operand_1_attach_five",     
    "Direction_six":"Action_operand_1_attach_six",     
    "Direction_seven":"Action_operand_1_attach_seven",     
    "Direction_eight":"Action_operand_1_attach_eight",     
    "Direction_nine":"Action_operand_1_attach_nine",   
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_waiting_for_operand_2_for_plus":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",
    "Direction_four":"Action_operand_2_attach_four",     
    "Direction_five":"Action_operand_2_attach_five",     
    "Direction_six":"Action_operand_2_attach_six",     
    "Direction_seven":"Action_operand_2_attach_seven",     
    "Direction_eight":"Action_operand_2_attach_eight",     
    "Direction_nine":"Action_operand_2_attach_nine",   
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_2_attach_one":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",
    "Direction_four":"Action_operand_2_attach_four",     
    "Direction_five":"Action_operand_2_attach_five",     
    "Direction_six":"Action_operand_2_attach_six",     
    "Direction_seven":"Action_operand_2_attach_seven",     
    "Direction_eight":"Action_operand_2_attach_eight",     
    "Direction_nine":"Action_operand_2_attach_nine",
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_2_attach_two":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",
    "Direction_four":"Action_operand_2_attach_four",     
    "Direction_five":"Action_operand_2_attach_five",     
    "Direction_six":"Action_operand_2_attach_six",     
    "Direction_seven":"Action_operand_2_attach_seven",     
    "Direction_eight":"Action_operand_2_attach_eight",     
    "Direction_nine":"Action_operand_2_attach_nine",  
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
   },
  "Action_operand_2_attach_three":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",
    "Direction_four":"Action_operand_2_attach_four",     
    "Direction_five":"Action_operand_2_attach_five",     
    "Direction_six":"Action_operand_2_attach_six",     
    "Direction_seven":"Action_operand_2_attach_seven",     
    "Direction_eight":"Action_operand_2_attach_eight",     
    "Direction_nine":"Action_operand_2_attach_nine",  
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
   },
  "Action_operand_2_attach_four":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",
    "Direction_four":"Action_operand_2_attach_four",     
    "Direction_five":"Action_operand_2_attach_five",     
    "Direction_six":"Action_operand_2_attach_six",     
    "Direction_seven":"Action_operand_2_attach_seven",     
    "Direction_eight":"Action_operand_2_attach_eight",     
    "Direction_nine":"Action_operand_2_attach_nine",  
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_2_attach_five":{
  "Direction_one":"Action_operand_2_attach_one",
  "Direction_two":"Action_operand_2_attach_two",
  "Direction_three":"Action_operand_2_attach_three",
  "Direction_four":"Action_operand_2_attach_four",     
  "Direction_five":"Action_operand_2_attach_five",     
  "Direction_six":"Action_operand_2_attach_six",     
  "Direction_seven":"Action_operand_2_attach_seven",     
  "Direction_eight":"Action_operand_2_attach_eight",     
  "Direction_nine":"Action_operand_2_attach_nine",  
  "Direction_plus":"Action_show_result",
  "Direction_equal":"Action_show_result",
  "Direction_clear":"Action_clear"
  },
  "Action_operand_2_attach_six":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",
    "Direction_four":"Action_operand_2_attach_four",     
    "Direction_five":"Action_operand_2_attach_five",     
    "Direction_six":"Action_operand_2_attach_six",     
    "Direction_seven":"Action_operand_2_attach_seven",     
    "Direction_eight":"Action_operand_2_attach_eight",     
    "Direction_nine":"Action_operand_2_attach_nine",  
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_2_attach_seven":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",
    "Direction_four":"Action_operand_2_attach_four",     
    "Direction_five":"Action_operand_2_attach_five",     
    "Direction_six":"Action_operand_2_attach_six",     
    "Direction_seven":"Action_operand_2_attach_seven",     
    "Direction_eight":"Action_operand_2_attach_eight",     
    "Direction_nine":"Action_operand_2_attach_nine",  
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_2_attach_eight":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",
    "Direction_four":"Action_operand_2_attach_four",     
    "Direction_five":"Action_operand_2_attach_five",     
    "Direction_six":"Action_operand_2_attach_six",     
    "Direction_seven":"Action_operand_2_attach_seven",     
    "Direction_eight":"Action_operand_2_attach_eight",     
    "Direction_nine":"Action_operand_2_attach_nine",  
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_2_attach_nine":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",
    "Direction_four":"Action_operand_2_attach_four",     
    "Direction_five":"Action_operand_2_attach_five",     
    "Direction_six":"Action_operand_2_attach_six",     
    "Direction_seven":"Action_operand_2_attach_seven",     
    "Direction_eight":"Action_operand_2_attach_eight",     
    "Direction_nine":"Action_operand_2_attach_nine",  
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
    },
   "Action_clear":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",  
    "Direction_four":"Action_operand_1_attach_four",  
    "Direction_five":"Action_operand_1_attach_five",  
    "Direction_six":"Action_operand_1_attach_six",  
    "Direction_seven":"Action_operand_1_attach_seven",  
    "Direction_eight":"Action_operand_1_attach_eight",  
    "Direction_nine":"Action_operand_1_attach_nine",  
    "Direction_plus":"Action_init",
    "Direction_equal":"Action_init",
    "Direction_clear":"Action_clear"
   },
   "Action_show_result":{
    "Direction_one":"Action_clear",
    "Direction_two":"Action_clear",
    "Direction_three":"Action_clear",  
    "Direction_four":"Action_clear",  
    "Direction_five":"Action_clear",  
    "Direction_six":"Action_clear",  
    "Direction_seven":"Action_clear",  
    "Direction_eight":"Action_clear",  
    "Direction_nine":"Action_clear",  
    "Direction_plus":"Action_clear",
    "Direction_equal":"Action_clear",
    "Direction_clear":"Action_clear"
   }
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
    const [warningMsg, setWarningMsg] = useState<string>('');


    function getAction(direction: Direction) {
    console.log('Click!!!'); 
    console.log(direction); 

    setWarningMsg('');

    const nextAction = vaScript[currentAction][direction];
  
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
          setWarningMsg('Second operand is missing')
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
        <Text fontSize='25px' color='red'>
          {warningMsg} 
        </Text>
        <Text fontSize='25px' color='red'>
          &nbsp; 
        </Text>      
          <VStack spacing={3} align="start">
            <HStack spacing={4}>
              <ActionButton colorB='blue' label="[ 1 ]" action="Direction_one" onClick={getAction} />
              <ActionButton colorB='blue' label="[ 2 ]" action="Direction_two" onClick={getAction} />
              <ActionButton colorB='blue' label="[ 3 ]" action="Direction_three" onClick={getAction} />
            </HStack>

            <HStack spacing={4}>
              <ActionButton colorB='blue' label="[ 4 ]" action="Direction_four" onClick={getAction} />
              <ActionButton colorB='blue' label="[ 5 ]" action="Direction_five" onClick={getAction} />
              <ActionButton colorB='blue' label="[ 6 ]" action="Direction_six" onClick={getAction} />
            </HStack>

            <HStack spacing={4}>
              <ActionButton colorB='blue' label="[ 7 ]" action="Direction_seven" onClick={getAction} />
              <ActionButton colorB='blue' label="[ 8 ]" action="Direction_eight" onClick={getAction} />
              <ActionButton colorB='blue' label="[ 9 ]" action="Direction_nine" onClick={getAction} />
            </HStack>

            <HStack spacing={4}>
              <ActionButton colorB='gray' label="[ + ]" action="Direction_plus" onClick={getAction} />
              <ActionButton colorB='gray' label="[ = ]" action="Direction_equal" onClick={getAction} />
              <ActionButton colorB='gray' label="[ CA ]" action="Direction_clear" onClick={getAction} />
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

function ActionButton({ colorB, label, action, onClick }: { colorB: string; label: string; action: string; onClick: (action: string) => void }) {
  return (
    <Button colorScheme={colorB} onClick={() => onClick(action)}>
      {label}
    </Button>
  );
}




export default CalcBase10;