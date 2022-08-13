/** 
  最外层的Form 对象
*/

import { FC } from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";
import { IFormInstance } from "./interface";
interface IFormProps extends React.HTMLAttributes<HTMLDivElement> {
  initialValues: {
    [key: string]: any;
  };
  onFinish: any;
}
const Form = (props: IFormProps) => {
  const { initialValues, onFinish, children } = props;

  let [formInstance] = useForm({ initialValues }) as [IFormInstance];
  formInstance.setCallbacks({
    onFinish,
  });
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
