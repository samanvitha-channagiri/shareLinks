import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className='h-screen bg-black overflow-hidden'>
      <div className='flex flex-col items-center max-w-md mx-auto py-[20px] h-full'>
        <Header/>
        <Card/>
      </div>
    </div>
  )
}

export default App