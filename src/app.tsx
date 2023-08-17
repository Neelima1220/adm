import React, { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import PageNotFound from "./pages/pageNotFound"
import { SpinnerIcon } from "./assets/icons"

const Home = lazy(() => import('./pages/home'))

const App = () => {
    return (
        <div>          
            <Suspense fallback={<div style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily:'Roboto' }}><SpinnerIcon /></div>}>
                <BrowserRouter>
                    <Routes>
                        <Route path='*' element={<PageNotFound />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    )
}

export default App
