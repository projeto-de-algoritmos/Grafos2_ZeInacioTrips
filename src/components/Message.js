import React, { useState, useEffect } from 'react';

const TypingText = ({ message, shouldDelete }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const writeText = () => {
      setText((prevText) => prevText + message[index]);
      setIndex((prevIndex) => prevIndex + 1);
    };

    const deleteText = () => {
      setText((prevText) => prevText.slice(0, -1));
      setIndex((prevIndex) => prevIndex - 1);
    };

    const timeoutId = setTimeout(() => {
      if (!isDeleting && index < message.length) {
        writeText();
      } else if (!isDeleting && index === message.length && shouldDelete) {
        setIsDeleting(true);
      } else if (isDeleting && index > 0 && shouldDelete) {
        deleteText();
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? 80 : 80); // Você pode ajustar a velocidade de apagamento aqui

    return () => clearTimeout(timeoutId);
  }, [text, message, index, isDeleting, shouldDelete]);

  return (
    <h1 style={{ color: 'white', fontFamily: 'Courier New, monospace', fontSize: '15px' }}>
      {text}
    </h1>
  );
};

export default TypingText;
