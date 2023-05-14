import React, { FC } from 'react';

// CharacterListで定義された型
import CharacterList, { Character } from './CharacterList';

import './App.css';

const App: FC = () => {
  // CharacterListで定義された型
  const characters: Character[] = [
    {
      id: 1,
      name: '羽咲 綾乃',
      age: 16,
      height: 151,
    },
    {
      id: 2,
      name: '荒垣 なぎさ',
      age: 18,
      height: 174,
    },
    {
      id: 3,
      name: '泉 理子',
      age: 18,
    },
  ];

  /**
     CharacterList
     属性値schoolが設定されている
     CharacterList側でpropsの型を指定しているので渡せる属性や属性に渡す型の縛りができている
     */
  return (
    <div className="container">
      <header>
        <h1>はねバド！ キャラクター一覧</h1>
      </header>
      <CharacterList school="北小町高校" characters={characters} />
    </div>
  );
};

export default App;
