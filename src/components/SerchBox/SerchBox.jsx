import { useState } from "react";
import Notiflix from 'notiflix'


export default function SerchBox({ onChange }) {

    const [searchInputFilm, setSearchInputFilm] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.currentTarget.value);
        setSearchInputFilm(e.currentTarget.value.toLowerCase());
    }


    
    const handleNameChange = (e) => {
        e.preventDefault();

        if (searchInputFilm.trim() === '') {
            return Notiflix.Notify.failure('Please input some name pictures to find');
        }

        onChange(searchInputFilm);
        // console.log(e.currentTarget.elements.input.value);
  }


  return (
      <form onSubmit={handleNameChange}>
          <input type="text" placeholder='input name of film to serch' onChange={handleInputChange}>
          </input>
          <button type="submit">Serch</button>
      </form>
  )
}
