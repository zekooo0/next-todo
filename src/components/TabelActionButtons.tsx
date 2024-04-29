'use client';

import { Pen, Trash } from 'lucide-react';
import React, { useState } from 'react';

import { Button } from './ui/button';
import Spinner from './Spinner';
import { deleteTodoAction } from '../../actions/todo.actions';

const TabelActionButtons = ({ id }: { id: string }) => {
  const [isPending, setIsPending] = useState(false);

  const deleteTodo = async (id: string) => {
    try {
      setIsPending(true);
      await deleteTodoAction(id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };
  return (
    <>
      <Button size={'icon'}>
        <Pen />
      </Button>
      <Button
        variant={'destructive'}
        size={'icon'}
        onClick={() => deleteTodo(id)}
      >
        {isPending ? <Spinner /> : <Trash />}
      </Button>
    </>
  );
};

export default TabelActionButtons;
