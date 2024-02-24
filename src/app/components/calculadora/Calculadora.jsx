'use client'
import './Calculadora.scss'
import Display from '../display/Display';
import Boton from '../boton/Boton';
import Borrar from '../Borrar/Borrar';
import { useState } from 'react';
import {evaluate} from 'mathjs'

const Calculadora = () => {

  const [input, setInput] = useState('')

  const handleInput = (val) => {
    setInput(input + val)

  }
  
  const igualdad = () => {
    if(input) {
      setInput(evaluate(input))
    } else{
      alert('Porfavor escriba un numero')
    }
    
  }

  return (
    <main className="Calculadora">
        <Display numero={input}/>
        <section className='btn-section'>
          <Boton simbolo={'7'} manejaInput={()=> handleInput('7')}/>
          <Boton simbolo={'8'} manejaInput={()=> handleInput('8')}/>
          <Boton simbolo={'9'} manejaInput={()=> handleInput('9')}/>
          <Boton simbolo={'+'} manejaInput={()=> handleInput('+')}/>
          <Boton simbolo={'4'} manejaInput={()=> handleInput('4')}/>
          <Boton simbolo={'5'} manejaInput={()=> handleInput('5')}/>
          <Boton simbolo={'6'} manejaInput={()=> handleInput('6')}/>
          <Boton simbolo={'-'} manejaInput={()=> handleInput('-')}/>
          <Boton simbolo={'1'} manejaInput={()=> handleInput('1')}/>
          <Boton simbolo={'2'} manejaInput={()=> handleInput('2')}/>
          <Boton simbolo={'3'} manejaInput={()=> handleInput('3')}/>
          <Boton simbolo={'*'} manejaInput={()=> handleInput('*')}/>
          <Boton simbolo={'.'} manejaInput={()=> handleInput('.')}/>
          <Boton simbolo={'0'} manejaInput={()=> handleInput('0')}/>
          <Boton simbolo={'='} manejaInput={()=> igualdad()}/>
          <Boton simbolo={'/'} manejaInput={()=> handleInput('/')}/>
        </section>
        <Borrar simbolo={'Borrar'} borrarInput={()=> setInput('')}/>
    </main>
  );
}

export default Calculadora;