import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormComponent from '../../components/formPeople/FormComponent';
import { FormContainer } from "./People.Styled";
import * as PeopleAction from "../../store/actions/PeopleAction"
import { useDispatch } from "react-redux"


function PeopleForm() {

  const {id} = useParams();
  const pessoa = useSelector(state => state.PeopleReducer.pessoa)
  const isUpdate = useSelector(state => state.PeopleReducer.isUpdate)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true);

  async function setup() {
    if (id) {
      await PeopleAction.getPessoaById(id, dispatch)
    } else {
      dispatch({
        type: 'SET_NOT_IS_UPDATE'
      })
    }
    setIsLoading(false)
  }

  useEffect(() => {
    setup();
  }, []);

  if(isLoading) {
    return (
      <h1>Loading</h1>
    )
  }

return (
    <FormContainer>
      <FormComponent isUpdate={isUpdate} user={pessoa} id={id} />
    </FormContainer>
)
}

export default PeopleForm