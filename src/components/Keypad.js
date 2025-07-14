import react from 'react';

export default function Keypad(){
     function handleChange(event) {
    console.log('Entering password...');
  }
    return (
     <input
      type="password"
      onChange={handleChange}
    />
  );
}   
    



