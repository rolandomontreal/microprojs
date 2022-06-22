import { useState } from 'react';
import Modal from '../../../components/Modal/Modal';
import styles from '../../../styles/gallery/pages/ModalReader.module.scss';

// https://data.riksdagen.se/dokumentlista/?avd=dokument&doktyp=bet&beslutad=1&sort=beslutsdag&sortorder=desc&utformat=rss

const ModalReader = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <main>
      <button onClick={() => setShowModal(!showModal)}>Show reader</button>
      {showModal  && (
        <Modal onClose={() => setShowModal(false)}>

        </Modal>
      )}
    </main>
  );
}

export default ModalReader;