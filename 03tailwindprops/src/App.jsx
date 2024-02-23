import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 class='bg-green-400 text-black p-4 m-50 rounded-xl mb-4'>Tailwind test</h1>

      <Card username="Shailesh" update="Click me" />
      <Card username="Sunita" />
      
    </>
  )
}

export default App
