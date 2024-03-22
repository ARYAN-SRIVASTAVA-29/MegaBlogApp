import './App.css'

function App() {
  //[process.env.REACT_APP_APPWRITE_URL] this will be used to access .enc when we are using create react app
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
     <h1>Blog app with appwrite</h1>
    </>
  )
}

export default App
