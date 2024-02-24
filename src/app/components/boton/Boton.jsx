import './Boton.scss'

const Boton = ({simbolo, manejaInput}) => {
  return (
    <button className='Boton' onClick={manejaInput}>{simbolo}</button>
  );
}

export default Boton;