import Modal from 'react-modal'
import { useDispatch } from 'react-redux'


Modal.setAppElement('#root')

function ModalDelete({idDelete, isOpen, setIsOpen, deleteModal, idPessoa}) {
  
  const dispatch = useDispatch

  async function handleDeleteModal() {

    idPessoa ? await deleteModal(idDelete, idPessoa, dispatch) : await deleteModal(idDelete, dispatch)

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
