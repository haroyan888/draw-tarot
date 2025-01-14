import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import '@/App.css';
import tarots from "@/consts/tarots";
import Tarot from '@/components/Tarot/Tarot';
import { tarot } from './types/tarots';

function App() {
  const [tarotList, setTarotList] = useState<tarot[]>([]);
  const [isShow, setIsShow] = useState(false);
  const [numOfTarots, setNumOfTarots] = useState(1);

  const generateTarotList = (numOfTarots: number) => {
    const selectedTarotList = tarots.generateTarotList(numOfTarots);
    setTarotList(selectedTarotList);
  };

  const resetTarot = () => {
    generateTarotList(numOfTarots);
    setIsShow(false);
  };

  useEffect(() => {
    generateTarotList(numOfTarots);
  }, [numOfTarots]);

  return (
    <div className='
      app-content 
      h-[100vh]
      w-[100vw]
      my-auto
      bg-sky-950'
    >
      <div className='disp-area w-full h-full flex justify-center items-center flex-wrap gap-10'>
        {tarotList.map((tarot) =>
          <Tarot imageFile={tarot.imageFile} isReverse={tarot.isRevers} isShow={isShow} />
        )}
      </div>
      <div className='control-area fixed bottom-10 right-10 flex gap-10 items-end'>
        <div className='flex flex-col items-center gap-4'>
          <div className='bg-slate-50 w-10 p-1 border-2 rounded-sm text-center'>
            {numOfTarots}
          </div>
          <Slider
            className='w-40'
            value={[numOfTarots]}
            onValueChange={(value) => setNumOfTarots(value[0])}
            defaultValue={[numOfTarots]}
            max={6}
            min={1}
            step={1}
            disabled={isShow}
          />
        </div>
        {!isShow
          ? <Button className='w-[100px]' onClick={() => setIsShow(true)}>カードをめくる</Button>
          : <Button className='w-[100px]' onClick={resetTarot}>リセット</Button>}
      </div>
    </div>
  )
}

export default App
