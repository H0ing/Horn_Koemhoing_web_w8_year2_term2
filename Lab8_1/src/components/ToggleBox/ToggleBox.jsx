// src/components/ToggleBox/ToggleBox.jsx
import { useState } from 'react';



// Inline styles replace the external CSS file for portability
const styles = {
  active: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '8px',
    borderRadius: '4px',
    marginBottom: '8px',
  },
  inactive: {
    backgroundColor: 'transparent',
    color: 'inherit',
    padding: '8px',
    borderRadius: '4px',
    marginBottom: '8px',
  },
};

export default function ToggleBox() {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div style={{ padding: '16px' }}>
      <p style={isSelected ? styles.active : styles.inactive}>
        Style me!
      </p>
      <button
        onClick={handleToggle}
        style={{ border: '1px solid #ccc', padding: '4px 12px', cursor: 'pointer' }}
      >
        {isSelected ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
}