import { useEffect } from 'react'
import Current from './components/Current/Current'
import Navbar from './components/Navbar/Navbar'
import { getLatLon } from './redux/weather/weatherSlice'
import { useDispatch, useSelector } from 'react-redux'
import Week from './components/Week/Week'
import Loader from './components/loader/Loader'
import { initTheme } from './redux/theme/themeSlice'

function App() {
  
  const dispatch = useDispatch()
  const weather = useSelector(state => state.weather.weather)
  const theme =  useSelector(state => state.theme.theme)
  
   const wrapperClass = `wrapper ${theme}`
  
  useEffect(() => {
    dispatch(initTheme())
    setTimeout(() => dispatch(getLatLon('Tashkent')), 1000)
  }, [])
  
  return (
    <>
     <div className={wrapperClass}>
        <div className="container">
           {weather ? (
            <>
              <Navbar/>
              <main className="main">
                <Current/>
                <Week/>
              </main>
            </>
           ) : <Loader/> }
            
        </div>
     </div>
    </>
  )
}

export default App
