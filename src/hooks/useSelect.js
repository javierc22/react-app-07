import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {
  // state del custom hook
  const [state, actualizarState] = useState('');
  
  const SelectNoticias = () => (
    <select className="browser-default">
      <option value="">Seleccionar</option>
    </select>
  )
  return [state, SelectNoticias];
}
 
export default useSelect;