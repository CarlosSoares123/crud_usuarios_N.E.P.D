import axios from "axios"
import styled from "styled-components"
import { useEffect, useRef } from 'react'
import {toast} from "react-toastify"

import PropTypes from 'prop-types';


const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`
const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  width: 120px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
`
const Label = styled.label`
`
const Button = styled.button`
  height: 42px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: #fff;
`
export const Form = ({ onEdit, setOnEdit, getUsers }) => {
  const nomeRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const dataNascimentoRef = useRef();

  useEffect(() => {
    if (onEdit) {
      nomeRef.current.value = onEdit.nome;
      emailRef.current.value = onEdit.email;
      phoneRef.current.value = onEdit.phone;
      dataNascimentoRef.current.value = onEdit.data_nascimento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nome = nomeRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const dataNascimento = dataNascimentoRef.current.value;

    if (!nome || !email || !phone || !dataNascimento) {
      return toast.warn("Preencha todos os campos");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8000/" + onEdit.id, {
          nome,
          email,
          phone,
          data_nascimento: dataNascimento,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8000", {
          nome,
          email,
          phone,
          data_nascimento: dataNascimento,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    // Limpe os campos após o envio
    nomeRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    dataNascimentoRef.current.value = "";

    setOnEdit(null);
    getUsers();
  };
  
    return (
      <FormContainer  onSubmit={handleSubmit}>
        <InputArea>
          <Label>Nome</Label>
          <Input name="name" ref={nomeRef}/>
        </InputArea>

        <InputArea>
          <Label>Email</Label>
          <Input name="email" ref={emailRef}/>
        </InputArea>

        <InputArea>
          <Label>Telefone</Label>
          <Input name="phone" ref={phoneRef}/>
        </InputArea>

        <InputArea>
          <Label>Data de Nascimento</Label>
          <Input name="data_nascimento" type="date"  ref={dataNascimentoRef}/>
        </InputArea>

        <Button type="submit">Salvar</Button>
      </FormContainer>
    )
}


Form.propTypes = {
  onEdit: PropTypes.object, // Espera um objeto ou null
  setOnEdit: PropTypes.func.isRequired, // Espera uma função obrigatória
  getUsers: PropTypes.func.isRequired, // Espera uma função obrigatória
};