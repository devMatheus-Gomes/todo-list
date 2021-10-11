import React, { useCallback } from "react";

// template
import PageHeader from "../../template/PageHeader";

// container
import Form from "./items/Form/form";
import List from "./items/List/list";

// styles
import { Container } from "./styles";

const Todo = () => {

  const handleClearTodoList = useCallback(() => {
    console.log("");
  }, []);

  return (
    <Container>
      <PageHeader name="Tarefas" small="Cadastro" />
      <Form handleClear={handleClearTodoList} />

      <List />
    </Container>
  );
};

export default Todo;
