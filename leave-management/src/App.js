import React from "react";
import {QueryClient, QueryClientProvider} from 'react-query'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
// import { useLocation } from "react-router-dom";
import Index from './pages/Index'
const queryClient = new QueryClient()


const App = () => {

  // const location = useLocation().pathname

  return (
    <div style={styles().bodyContainer} className="App">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route exact path='/' element={
              <Index/>
            }/>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  )
  
}

const styles = () => ({
  bodyContainer: {
    padding: 0,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    minHeight: '100vh'
  }
})


export default App;
