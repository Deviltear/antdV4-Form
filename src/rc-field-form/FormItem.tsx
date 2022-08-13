import React, { useContext } from "react";
import FieldContext from "./FieldContext";
import { IFormInstance } from "./interface";

const FormItem = (props: any) => {
  const { children, name } = props;
  const formContext = useContext(FieldContext);
  const { getFiledValue, setFiledValue,forceUpdate } = formContext as IFormInstance;
  const gerControlled = () => {
    return {
      value: getFiledValue(name),
      onChange: (e: HTMLFormControlsCollection) => {
        setFiledValue(name, e?.target?.value);
        forceUpdate()
      },
    };
  };

  return <>{React.cloneElement(children, gerControlled())}</>;
};

export default FormItem;
