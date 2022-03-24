import styled from 'styled-components';
import useInputs from '../hooks/useInput';
import { validateForm } from '../utils/validate';

const InputForm = ({ handleSubmit }) => {
  const [todo, handleInputChange, resetInput] = useInputs('');

  const saveBtnClick = (e) => {
    e.preventDefault();
    if (validateForm(todo)) {
      handleSubmit(todo);
    } else {
      window.alert('공백만 있는 경우 등록이 불가능합니다.');
    }
    resetInput();
  };

  return (
    <Container>
      <Form onSubmit={saveBtnClick}>
        <InputField
          maxLength={30}
          value={todo}
          onChange={handleInputChange}
          placeholder="할 일을 입력하세요"
        />
        <Button onClick={saveBtnClick}>확인</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-self: end;

  justify-content: center;
  align-items: center;

  background: #f4f6f5;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: 'row';
  border: 1px solid #dbdbdb;
  border-radius: 20px;
`;
const InputField = styled.input`
  height: 30px;
  width: 240px;
  background: none;
  text-align: center;

  border: none;
`;
const Button = styled.button`
  border: none;
  background: none;

  color: #0066cc;
  text-align: center;
  text-decoration: none;
  font-size: 14px;

  margin-right: 15px;
`;

export default InputForm;
