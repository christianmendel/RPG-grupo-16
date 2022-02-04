import './style.css';
import { useState } from 'react';

export function CharacterCreation({ db }) {
  return (
    <form method="POST" action="">
      <h1>Create your character</h1>

      <label htmlFor="name">
        Character Name:
        <input name="name" id="name" type="text" placeholder={'Example: Me'} />
      </label>

      <h2>Select your breed: </h2>
      <div>
        {db.kind.map((item) => {
          return (
            <label key={item.id} htmlFor="">
              <input id={item.id} name="breed" type="radio" />
              {item.breed}
            </label>
          );
        })}
      </div>
      <h2>Select your kind: </h2>
      <div>
        {db.races.map((item) => {
          return (
            <label key={item.id} htmlFor={item.id}>
              {item.kind}
              <input name="races" id={item.id} type="radio"></input>
            </label>
          );
        })}
      </div>

      <button>Confirm</button>
    </form>
  );
}
