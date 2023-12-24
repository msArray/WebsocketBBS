import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Nav = React.lazy(() => import('./components/_Nav'));

const Portal = React.lazy(() => import('./pages/Portal'));
const Board = React.lazy(() => import('./pages/Board'));

function App() {
  return (
    <div className='h-full w-full bg-slate-700 grid grid-cols-[6rem_repeat(11,_1fr)]'>
      <Nav />
      <div className='col-span-11 min-h-100vh'>
        <React.Suspense fallback={<></>}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Portal />} />
              <Route path='/b'>
                <Route path=':bid' element={<Board />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
