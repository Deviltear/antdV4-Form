import { FormItem, Form } from "@/Components/rc-field-form";
import useForm from "@/Components/rc-field-form/useForm";
import { IFormInstance } from "@/Components/rc-field-form/interface";
import { useDynamicList } from "@/Components/rc-field-form/hooks/useDynamicList";

export default function HomePage() {
  let [formInstance] = useForm() as [IFormInstance];
  const { list, push, resetList, remove } = useDynamicList([{ name: "David" }]);

  console.log(list, "33");
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

      <button onClick={() => resetList([])}>重置</button>

      <button onClick={() => push({ age: 22, name: "lisi" })}>新增</button>
      <button onClick={() => remove(list[0].uuId)}>删除</button>
      {list.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
}
