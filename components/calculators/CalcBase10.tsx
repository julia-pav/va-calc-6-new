//import './App.css';
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
    <div className="App">
      <header className="App-header">
        <h2>Mini Calculator</h2>
        <p>
          [{operandOne}] + [{operandTwo}] = [{result}] 
        </p>
        <p>
        <small>{warningMsg}</small>
        </p>
        <p>
           | 
            <ActionButton label="[ 1 ]" action="Direction_one" onClick={getAction} />&nbsp;|
            <ActionButton label="[ 2 ]" action="Direction_two" onClick={getAction} />&nbsp;|
            <ActionButton label="[ 3 ]" action="Direction_three" onClick={getAction} />&nbsp;|
            <ActionButton label="[ 4 ]" action="Direction_four" onClick={getAction} />&nbsp;|
            <ActionButton label="[ 5 ]" action="Direction_five" onClick={getAction} />&nbsp;|
            <ActionButton label="[ 6 ]" action="Direction_six" onClick={getAction} />&nbsp;|
            <ActionButton label="[ 7 ]" action="Direction_seven" onClick={getAction} />&nbsp;|
            <ActionButton label="[ 8 ]" action="Direction_eight" onClick={getAction} />&nbsp;|
            <ActionButton label="[ 9 ]" action="Direction_nine" onClick={getAction} />&nbsp;|
            <ActionButton label="[ + ]" action="Direction_plus" onClick={getAction} />&nbsp;|
            <ActionButton label="[ = ]" action="Direction_equal" onClick={getAction} />&nbsp;|
            <ActionButton label="[ CA ]" action="Direction_clear" onClick={getAction} />&nbsp;|
        </p>
        <p>
        <img src="v-agent_32x32.png" alt="v-agent" width="32" height="32" /> &nbsp;  Powered by VAOP  
        </p>
        <p>
         <small>previousAction:</small>[{previousAction}] ==&gt; <small>directionAction:</small>[{directionAction}] ==&gt; <small>currentAction:</small>[{currentAction}]
        </p>
      </header>
    </div>
  );
}

function ActionButton({ label, action, onClick }: { label: string, action: string, onClick: (action: string) => void }) {
  return <button onClick={() => onClick(action)}>{label}</button>;
}



export default CalcBase10;