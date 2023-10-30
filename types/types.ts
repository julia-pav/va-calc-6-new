export type VaScriptAction =
  | "Action_init"
  | "Action_operand_1_attach_zero";

  export type Direction =
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

  export type ActionMapping = {
    [key in Direction]: VaScriptAction;
  };
  
  export type ActionMap = {
    [key in VaScriptAction]: ActionMapping;
  };
  