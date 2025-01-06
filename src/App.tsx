import '@/App.css'
import { Button } from '@/components/ui/button'

function App() {
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
      <div className='disp-area h-[70%] flex items-center'>
        <Button>カードを引く</Button>
      </div>
      <div className='control-area h-[30%] flex items-center'>
        <Button className=''>カードを引く</Button>
      </div>
    </div>
  )
}

export default App
