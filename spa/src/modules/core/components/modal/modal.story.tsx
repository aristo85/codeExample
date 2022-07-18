import { FC, useState } from 'react';
import Modal from './modal';

const ModalStory: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>show modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title='Modal title'
      >
        modal content
      </Modal>
    </div>
  );
};

export default ModalStory;
