import React, { FC } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

export interface Character {
  id: number;
  name: string;
  age: number;
  height?: number;
}

// propsの型を指定
// この型があることでJSXでマウントするときに必要な属性値とその型に縛りができる
interface CharacterListProps {
  school: string;
  characters: Character[];
}

const CharacterList: FC<CharacterListProps> = props => {
  // propsの型を指定しているのでconstの型が型推論により定義されている

  const { school, characters } = props;

  /**
   * <></>について
   * React.Fragmentのシンタックスシュガー
   * JSXでは最上位の階層が必ず一つではないといけない
   * <div></div>としても良いがそうするとdivの階層ができてしまう
   * 上記を避けるためのもの
   * */

  /**
   *  {c.height ? c.height : '???'}
   * c.heightが設定されていない場合undefind
   * 設定されていない場合???が返される三項演算子
   *
   * {c.height ?? '???'}
   * nulish coalescing[ヌリッシュ・コアレッシング]
   */
  return (
    <>
      <Header as="h2">{school}</Header>
      <Item.Group>
        {characters.map(c => (
          /* eslint-disable react/jsx-key */
          <Item>
            <Icon name="user circle" size="huge" />
            <Item.Content>
              <Item.Header>{c.name}</Item.Header>
              <Item.Meta>{c.age}歳</Item.Meta>
              <Item.Meta>
                {c.height ?? '???'}
                cm
              </Item.Meta>
            </Item.Content>
          </Item>
          /* eslint-enable */
        ))}
      </Item.Group>
    </>
  );
};



export default CharacterList;
