/** 
  最外层的Form 对象
*/

// import { useState } from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";
import { IFormInstance } from "./interface";
interface IFormProps extends React.HTMLAttributes<HTMLDivElement> {
  initialValues: {
    [key: string]: any;
  };
  onFinish: any;
  form: IFormInstance;
}
const Form = (props: IFormProps) => {
  const { initialValues, onFinish, children, form } = props;
  let formInstance = form;
  if (!form) {
    let [newformInstance] = useForm() as [IFormInstance];

    formInstance = newformInstance;
  }

  formInstance.setCallbacks({
    onFinish,
  });
  formInstance.setInitialValues(initialValues);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
};
export default Form;
