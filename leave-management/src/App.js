import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
// import { useLocation } from "react-router-dom";
import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'
import Users from "./pages/top/Users";
import Index from "./pages/Index";
import Detail from "./pages/Detail";
const queryClient = new QueryClient()


const App = () => {
  return (
    <div style={styles().bodyContainer} className="App">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route exact path='/register' element={
              <Register />
            } />
            <Route exact path='/login' element={
              <Login />
            } />
            <Route exact path='/' element={
              <Index />
            } />
            {['/', '/users', '/applications'].map(path => 
              <Route key={path} path={path} element={<Index />} />
            )}
            {[ '/user/:id', '/applications/:id'].map(path => 
              <Route key={path} path={path} element={<Detail />} />
            )}
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
