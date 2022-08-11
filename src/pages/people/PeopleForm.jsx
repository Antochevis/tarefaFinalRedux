import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FormComponent from '../../components/formPeople/FormComponent';
import { FormContainer } from "./People.Styled";
import * as PeopleAction from "../../store/actions/PeopleAction"
import { useDispatch } from "react-redux"


function PeopleForm() {

  const {id} = useParams();
  const pessoa = useSelector(state => state.PeopleReducer.pessoa)
  const isUpdate = useSelector(state => state.PeopleReducer.isUpdate)
  const loading = useSelector(state => state.PeopleReducer.loading)
  const dispatch = useDispatch()


  async function setup() {
    if (id) {
      //PeopleAction.setIsUpdate(true);
      PeopleAction.getPessoaById(id, dispatch)
    } else {
      dispatch({
        type: 'SET_NOT_IS_UPDATE'
      })
    }
  }

  useEffect(() => {
    setup();
  }, []); 

return (
    <FormContainer>
      <FormComponent isUpdate={isUpdate} people={pessoa} id={id} isLoading={loading}/>
    </FormContainer>
)
}

export default PeopleForm