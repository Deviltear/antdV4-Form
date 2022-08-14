import { FormItem, Form } from "@/Components/rc-field-form";
import useForm from "@/Components/rc-field-form/useForm";
import { IFormInstance } from "@/Components/rc-field-form/interface";
export default function HomePage() {
  let [formInstance] = useForm() as [IFormInstance];
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>

      <Form
        initialValues={{ userName: "zhangsan", age: 18 }}
        onFinish={(values: any) => {
          console.log("成功", values);
        }}
        form={formInstance}
      >
        <FormItem name="userName">
          <input placeholder="用户名" type="text" />
        </FormItem>
        <FormItem name="age">
          <input placeholder="年龄" />
        </FormItem>

        <FormItem name="passWord">
          <input placeholder="密码" />
        </FormItem>
        <button>提交</button>
      </Form>
      <button
        onClick={() => {
          formInstance.setFiledsValue({ age: 22, userName: "lisi" });
        }}
      >
        改变值
      </button>
    </div>
  );
}
