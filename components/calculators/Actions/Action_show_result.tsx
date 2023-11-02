function Action_show_result(
  operandOne: string, 
  operandTwo: string, 
  setResult: React.Dispatch<React.SetStateAction<string>>
  ): void {
    const tempNumber: number = +operandOne + +operandTwo;
    const tempString: string = tempNumber.toString();
    setResult(tempString)
  }
  
  export default Action_show_result;