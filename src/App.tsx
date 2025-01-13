import { useState } from 'react';
import Draggable from 'react-draggable';

import '@/App.css';
import { Button } from '@/components/ui/button';
import tarots from "@/consts/tarots";
import tarotType2FileName from '@/utils/tarotType2FileName';
import { MajorArcanaTitle, MinorArcanaSuit, MinorArcanaValue } from '@/types/tarots';

function App() {

  const [imageFile, setImageFile] = useState("");
  const [isDrew, setIsDrew] = useState(false);
  const [description, setDescription] = useState("");
  const [rotation, setRotation] = useState(0);

  const drawTarot = () => {
    setIsDrew(true);
    const selectedTarot = Math.round(Math.random());
    if (selectedTarot === 1) {
      const tarotTitle = Object.keys(tarots["majorArcana"])[Math.floor(Math.random() * 20)] as MajorArcanaTitle;
      const selectedTarotFileName = tarotType2FileName("major", tarotTitle)
      setImageFile(selectedTarotFileName);
      setDescription(tarots["majorArcana"][tarotTitle]);
    } else {
      const tarotSuit = Object.keys(tarots["minorArcana"]["suit"])[Math.floor(Math.random() * 3)] as MinorArcanaSuit;
      const tarotValue = Object.keys(tarots["minorArcana"]["value"])[Math.floor(Math.random() * 13)] as MinorArcanaValue;
      const selectedTarotFileName = tarotType2FileName("minor", undefined, tarotSuit, tarotValue);
      setImageFile(selectedTarotFileName);
      setDescription(tarotSuit + ": " + tarots["minorArcana"]["suit"][tarotSuit] + "\n" + tarotValue + ": " + tarots["minorArcana"]["value"][tarotValue]);
    }
    setRotation(Math.round(Math.random()));
  };

  const resetTarot = () => {
    setImageFile("");
    setDescription("");
    setRotation(0);
    setIsDrew(false);
  };

  return (
    <div className='
      app-content 
      h-[100vh]
      w-[100vw]
      my-auto
      flex
      flex-col
      items-center'
    >
      <div className='disp-area w-full h-[70%] flex flex-col justify-center items-center gap-10'>
        <Draggable
          disabled={isDrew}
          bounds={"parent"}
        >
          <div className='w-60 h-[410px]'>
            {!isDrew
              ? <div className='w-full h-full bg-slate-500 rounded-md' />
              : <img className={"pointer-events-none" + rotation ? " rotate-180" : ""} src={"/images/ws-tarots/" + imageFile} alt="" />}
          </div>
        </Draggable>
        <p className='text-center whitespace-pre-wrap'>{description}</p>
      </div>
      <div className='control-area h-[30%] flex items-center'>
        {!isDrew
          ? <Button onClick={drawTarot}>カードを引く</Button>
          : <Button onClick={resetTarot}>リセット</Button>}
      </div>
    </div>
  )
}

export default App
