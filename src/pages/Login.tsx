import { useState } from 'react'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>Página de Login</h1> 
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default Login
