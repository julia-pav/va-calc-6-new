function Action_operand_2_attach_six(
    operandOne: string, 
    operandTwo: string, 
    setOperandOne: React.Dispatch<React.SetStateAction<string>>,
    setOperandTwo: React.Dispatch<React.SetStateAction<string>>,
    setResult: React.Dispatch<React.SetStateAction<string>>,
    setWarningMsg: React.Dispatch<React.SetStateAction<string>>
    ): void {
        setOperandTwo(operandTwo + "6");
    }
    
    export default Action_operand_2_attach_six;