import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './components/Card'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card 
    color = "firstColor"
    title = "Bussiness Card"
    name = "Jafar Mohamed"
    position = "Software Developer"
    company = "Werabe IOT"
    email = "Jaf@gmail.com"
    />

    

  </StrictMode>,
)
