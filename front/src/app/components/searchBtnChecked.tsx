import React, {useState} from 'react';

const searchBtnChecked = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}><span>+</span>タグを追加</button>
      {isVisible && }

    </div>
  );
}