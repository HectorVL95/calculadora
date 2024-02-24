import './Borrar.scss'

const Borrar = ({simbolo, borrarInput}) => {
  return (
    <button className='Borrar' onClick={borrarInput}>{simbolo}</button>
  );
}

export default Borrar;