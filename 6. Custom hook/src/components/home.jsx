import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';

export default function Home() {
  const { data, isLoading, error } = useFetch('https://sonplaceholder.typicode.com/todos')
  const loadingMessage = <p>Todo is loading...</p>
  const errorMessage = <p>{error}</p>
 
  const todosElement = data && data.map((x)=> <p key= {x.id}>{x.title}.</p>);

  return (
    <div>
      <h1 className="text-capitalize text-center p-3 text-primary">
        Fetch Data! (Custom Hook)
      </h1>
      <span className='text-danger'>{error && errorMessage}</span>
      <span className='text-primary'>{isLoading && loadingMessage}</span>
        <div className='border border-warning p-2 text-center'>{todosElement}</div>
    </div>
  );
}
