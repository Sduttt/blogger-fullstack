
function App() {

  return (
    <>
      <h1 className="text-red-500">
        {import.meta.env.VITE_APPWRITE_URL}
      </h1>
    </>
  )
}

export default App
