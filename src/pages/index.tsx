import { FormItem, Form } from "../rc-field-form";

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>

      <Form
        initialValues={{ userName: "zhangsan",age:18 }}
        onFinish={(values) => {
          console.log("成功", values);
        }}
      >
        <FormItem name="userName">
          <input placeholder="用户名" type="text"/>
        </FormItem>
        <FormItem name="age">
          <input placeholder="年龄"/>
        </FormItem>
       
        <FormItem name="passWord">
          <input placeholder="密码" type="password"/>
        </FormItem>
        <button>提交</button>
      </Form>
    </div>
  );
}
