function Action_init(
  operandOne: string, 
  operandTwo: string, 
  setOperandOne: React.Dispatch<React.SetStateAction<string>>,
  setOperandTwo: React.Dispatch<React.SetStateAction<string>>,
  setResult: React.Dispatch<React.SetStateAction<string>>
  ): void {
    setOperandOne("");
    setOperandTwo("");
    setResult("");
  }
  
  export default Action_init;