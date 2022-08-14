import React, { useContext, useEffect, useState } from "react";
import FieldContext from "./FieldContext";
import { IFormInstance } from "./interface";
const FormItem = (props: any) => {
  const { children, name } = props;
  const formContext = useContext(FieldContext);
  const { getFiledValue, setFiledValue, registerFiled } =
    formContext as IFormInstance;
  const [, forceUpdate] = useState<any[]>([]);

  const onStoreChange = () => {
    forceUpdate([]);
  };
  const fieldInstance = { onStoreChange, name };
  useEffect(() => {
    registerFiled(fieldInstance);
  }, []);

  const gerControlled = () => {
    return {
      value: getFiledValue(name),
      onChange: (e: HTMLFormControlsCollection) => {
        setFiledValue(name, e?.target?.value);
      },
    };
  };

  return <>{React.cloneElement(children, gerControlled())}</>;
};

export default FormItem;
