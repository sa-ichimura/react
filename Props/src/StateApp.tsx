import React,{ Component, ReactElement } from 'react';
import {Button, Card, Statistic} from 'semantic-ui-react'
import './App.css'

type State = {count: number}

/**
 * unknownはpropsの型
 * propsは必要ないのでunkownを渡す
 * 
 * Stateこれがstateの型
 */
class StateApp extends Component<unknown, State>
{
    constructor(props: unknown)
    {
        super([props]);

        // カウンター値を初期化
        // stateの値を直接書き換えるのはここだけ
        // それ以外はsetStateを使う
        this.state = {count:0}
    }

    reset(): void
    {
        // setStateとは
        // state内の変更したい要素名をキーに、値をその値にしたオブジェクト
        this.setState({count:0})
    }

    increment(): void
    {
        // 以前のstateを引数として受け取って新しいstateを返す
        // stateの値の更新はレンダリング最適化の最中に行われるため、前の状態に依存する処理は関数で設定をする
        this.setState((state)=>({count:state.count+1}))
    }

    render(): ReactElement
    {
      const { count } = this.state;

      /**
       * this.resetではなく無名関数 ()=>this.reset()を使う理由
       * thisは実行時のオブジェクトButtonコンポーネントになってしまう
       * ButtonクラスにはsetStateはないためエラーとなる
       */
      /**
       * StateAppがButtonに自身の状態を変化させる関数を渡す
       * これにより単一方向のデータフローを保つ
       */
      return (
        <>
          <div className="container">
            <header>
              <h1>カウンター</h1>
            </header>
            <Card>
              <Statistic className="number-board">
                <Statistic.Label>count</Statistic.Label>
                <Statistic.Value>{count}</Statistic.Value>
              </Statistic>
              <Card.Content>
                <div className="ui two buttons">
                  <Button color="red" onClick={() => this.reset()}>
                    Reset
                  </Button>
                  <Button color="green" onClick={() => this.increment()}>
                    +1
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </div>
        </>
      );
    }
}

export default StateApp;
