import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className={styles.outerContainer} onClick={onClose}>
      <div className={styles.innerContainer} onClick={e => e.stopPropagation()}>
        <h1>Hello</h1>
      </div>
    </div>,
    // @ts-ignore
    document.getElementById('modal'),
  )
}

export default Modal;