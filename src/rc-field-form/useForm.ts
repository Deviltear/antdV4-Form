import { useRef, useState } from "react";
import { IFormInstance } from "./interface";

interface Istore {
  [key: string]: any;
}
interface ICallBacks {
  onFinish?: Function;
  [key: string]: any;
}

class FormStore {
  store: Istore;
  callbacks: ICallBacks;
  forceRootRender: Function;
  constructor(forceRootRender: Function,initialValues:any) {
    if (typeof initialValues ==="object") {
      this.store = {...initialValues}
    }else{
      this.store = {}
    }
    this.forceRootRender = forceRootRender;
    
    this.callbacks = {};
  }
  setFiledValue=<T>(name: string, value: T) =>{
    this.store[name] = value as T;
  }
  setFiledsValue=(newStore: Istore) =>{
    this.store = { ...this.store, ...newStore };
  }
  getFiledValue=(name: string)=> {
    return this.store[name];
  }
  getFiledsValue=()=> {
    return this.store;
  }
  setCallbacks=(callbacks: Function)=> {
    this.callbacks = callbacks;
  }
  submit=()=> {
    let { onFinish } = this.callbacks;
    if (onFinish) {
      onFinish(this.store);
    }
  }
  getForm() {
    //将一些需要暴露的方法属性等暴露出去,而非直接暴力的返回this
    return {
      getFiledValue: this.getFiledValue,
      getFiledsValue: this.getFiledsValue,
      setFiledValue: this.setFiledValue,
      setFiledsValue: this.setFiledsValue,
      setCallbacks: this.setCallbacks,
      forceUpdate:this.forceRootRender,
      submit: this.submit,
    };
  }
}

const useForm = ({initialValues}) => {
  let formRef= useRef<IFormInstance|null>();
  const [, forceUpdate] = useState<any[]>([]);
  //单例模式
  if (!formRef.current) {
    //组件强刷
    const forceReRender = () => {
      forceUpdate([]);
    };
    let formStore = new FormStore(forceReRender,initialValues);
    let formInstance: IFormInstance = formStore.getForm();
    formRef.current = formInstance;
  }
  return [formRef.current];
};

export default useForm;
