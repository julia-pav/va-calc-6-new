//import './App.css';
import { useState } from 'react';

type Direction =
  | "Direction_one"
  | "Direction_two"
  | "Direction_three"
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
     "Direction_plus":"Action_init",
     "Direction_equal":"Action_init",
     "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_one":{
     "Direction_one":"Action_operand_1_attach_one",
     "Direction_two":"Action_operand_1_attach_two",
     "Direction_three":"Action_operand_1_attach_three",  
     "Direction_plus":"Action_waiting_for_operand_2_for_plus",
     "Direction_equal":"Action_warning_10__Second_operand_is_missing",
     "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_two":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_1_attach_three":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_warning_10__Second_operand_is_missing":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_waiting_for_operand_2_for_plus":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",  
    "Direction_plus":"Action_waiting_for_operand_2_for_plus",
    "Direction_equal":"Action_warning_10__Second_operand_is_missing",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_2_attach_one":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",  
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
  },
  "Action_operand_2_attach_two":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",  
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
   },
  "Action_operand_2_attach_three":{
    "Direction_one":"Action_operand_2_attach_one",
    "Direction_two":"Action_operand_2_attach_two",
    "Direction_three":"Action_operand_2_attach_three",  
    "Direction_plus":"Action_show_result",
    "Direction_equal":"Action_show_result",
    "Direction_clear":"Action_clear"
   },
   "Action_clear":{
    "Direction_one":"Action_operand_1_attach_one",
    "Direction_two":"Action_operand_1_attach_two",
    "Direction_three":"Action_operand_1_attach_three",  
    "Direction_plus":"Action_init",
    "Direction_equal":"Action_init",
    "Direction_clear":"Action_clear"
   },
   "Action_show_result":{
    "Direction_one":"Action_clear",
    "Direction_two":"Action_clear",
    "Direction_three":"Action_clear",  
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
          <DigitOne onClick={() => getAction('Direction_one')}/>&nbsp;|
          <DigitTwo onClick={() => getAction('Direction_two')}/>&nbsp;|
          <DigitThree onClick={() => getAction('Direction_three')}/>&nbsp;|
          <ActionPlus onClick={() => getAction('Direction_plus')}/>&nbsp;|
          <ActionEqual onClick={() => getAction('Direction_equal')}/>&nbsp;|
          <ActionClear onClick={() => getAction('Direction_clear')}/>&nbsp;|
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

function DigitOne({ onClick }: ButtonProps) {
    return <button onClick={onClick}>[ 1 ]</button>;
}
  
function DigitTwo({ onClick }: ButtonProps) {
    return <button onClick={onClick}>[ 2 ]</button>;
}
  
function DigitThree({ onClick }: ButtonProps) {
    return <button onClick={onClick}>[ 3 ]</button>;
}
  
function ActionPlus({ onClick }: ButtonProps) {
    return <button onClick={onClick}>[ + ]</button>;
}
  
function ActionEqual({ onClick }: ButtonProps) {
    return <button onClick={onClick}>[ = ]</button>;
}
  
function ActionClear({ onClick }: ButtonProps) {
    return <button onClick={onClick}>[ CA ]</button>;
}

export default CalcBase10;