import { useState } from "react";

function CardAmounts({ approved, onSubmitAmount }) {
    const [amount, setAmount] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmitAmount(amount);
      setAmount('');
    };
  
    return (
      <div>
        <h2>Montos asociados a tarjetas aprobadas</h2>
        <ul>
          {approved.map((request, index) => (
            <li key={index}>
              <div>{request.name}</div>
              <form onSubmit={handleSubmit}>
                <input 
                  type="number" 
                  placeholder="Monto" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)} 
                />
                <button type="submit">Guardar monto</button>
              </form>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default CardAmounts;