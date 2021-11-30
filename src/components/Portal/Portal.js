import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Portal.css';

const Portal = ({ children, elem = 'div' }) => {
  const container = document.createElement(elem);
  useEffect(() => {
    document.body.appendChild(container);
    container.setAttribute('class', 'modal-wrapper');
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.removeChild(container);
      document.body.style.overflow = 'auto';
    };
  }, [container]);

  return createPortal(children, container);
};

export default Portal;
