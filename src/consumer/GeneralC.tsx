import StateContext from '../context'

export default function GeneralC() {
  return (
    <StateContext.Consumer>
      {
        // 函数作为子元素,第一个形参是Provider组件提供的value值
        (state: any) => {
          return <>
            Consumer: {state.title}
            <button onClick={() => state.setCount((v: number) => v + 1)}>Click</button>
            { state.count }
          </>;
        }
      }
    </StateContext.Consumer>
  );
}