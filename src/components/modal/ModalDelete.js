import Modal from 'react-modal'


Modal.setAppElement('#root')

function ModalDelete({idDelete, isOpen, setIsOpen, deleteModal}) {

  async function handleDeleteModal() {
    console.log(idDelete)
    await deleteModal(idDelete)
    setIsOpen(false)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      >
        <h3>Tem certeza que deseja excluir? Essa decisão será irreversível.</h3>
        <button onClick={handleCloseModal}>Não</button>
        <button onClick={handleDeleteModal}>Sim</button>
    </Modal>
  )
}

export default ModalDelete
