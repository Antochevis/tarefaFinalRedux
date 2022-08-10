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

  const dispatch = useDispatch()


  async function setup() {
    if (id) {
      //PeopleAction.setIsUpdate(true);
      PeopleAction.getPessoaById(id, dispatch)
    }
  }

  useEffect(() => {
    setup();
  }, []);

return (
    <FormContainer>
      <FormComponent  people={pessoa} id={id} />
    </FormContainer>
)
}

export default PeopleForm