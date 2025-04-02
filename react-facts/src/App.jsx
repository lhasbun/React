import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const root = createRoot(document.getElementById('root'))
  
  const title = createElement('h1', { className: 'header' }, 'Fun facts about React')
  
  const logo = createElement('img', { src: reactLogo, alt: 'React Logo', width: '40px'})
  
  const items = ['Was first created in 2013', 
                'Was originally created by Jordan Walke', 
                'Has well over 100k stars on GitHub', 
                'Is maintained by Meta (formerly Facebook)', 
                'Powers thousands of enterprise apps, including mobile apps']

  const ul1 = createElement('ul', { className: 'list' }, items.map((item, index) => createElement('li', { key: index }, item)))

  const main = createElement('main', { className: 'main' }, logo, title, ul1)

    root.render(
      main
    )
}

export default App

