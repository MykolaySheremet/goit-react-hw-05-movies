import { useState } from "react";
import Notiflix from 'notiflix';
import { Form,Input,Button } from './SerchBox.styled';


export default function SerchBox({ onChange, value }) {

    const [searchInputFilm, setSearchInputFilm] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.currentTarget.value);
        setSearchInputFilm(e.currentTarget.value.toLowerCase());
    }


    
    const handleNameChange = (e) => {
        e.preventDefault();

        if (searchInputFilm.trim() === '') {
            return Notiflix.Notify.failure('Please input some name of Film to find');
        }

        onChange(searchInputFilm);
        // console.log(e.currentTarget.elements.input.value);
    }
    
   
  return (
      <Form onSubmit={handleNameChange}>
          <Input
            autoComplete="off"
            autoFocus
            name='search'
            defaultValue={value}
            type="text" placeholder='input name of film to serch' onChange={handleInputChange}>
          </Input>
          <Button type="submit">Serch</Button>
      </Form>
  )
}
