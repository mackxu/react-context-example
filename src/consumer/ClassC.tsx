/**
 * 挂载在 class 上的 contextType 属性会被重赋值为Context 对象。
 * 这能让你使用 this.context 来消费最近 Context 上的那个值。
 * 你可以在任何生命周期中访问到它，包括 render 函数中。
 * 
 * 使用static关键字添加静态属性，和直接在class添加属性效果一致,
 * 最终都会添加到类上，而不是类的实例上
 */

import { Component } from "react";
import LocalContext from '../context';

export default class ClassC extends Component {
  static contextType = LocalContext;
  render() {
    const state: any = this.context;
    return (
      <div>
        contextType -{'>'} this.context: {state.title}
        <button onClick={() => state.setCount((v: number) => v + 1)}>Click</button>
        { state.count }
      </div>
    );
  }
}