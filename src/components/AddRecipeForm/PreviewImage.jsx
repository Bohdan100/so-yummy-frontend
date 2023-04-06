import { useState } from 'react';

export const PreviewImage = ({ file }) => {
  const [prew, setPrew] = useState(null);
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = () => {
    setPrew(reader.result);
  };

  return (
    <div>
      <img src={prew} alt="prew" width="100%" height="100%" />
    </div>
  );
};
