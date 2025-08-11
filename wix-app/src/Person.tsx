import React, { useState } from "react";
interface Props {
  name: string;
  age: number;
  isMarried: boolean;
}

export const User = (props: Props) => {
  const [personBio, setPersonBio] = useState<string | null>(null);
  // Get input values
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(e.target.value);
  };

  // Summit
  // const handleSummit = (e: React.FocusEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setPersonBio(e.target.value);
  // };

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>isMarried: {props.isMarried ? "Is married" : "Is single"}</p>

      <p>
        {props.name} Bio: {!personBio ? "No bio available" : personBio}
      </p>
      <input type="text" onChange={handleChange} placeholder="Enter bio" />
    </div>
  );
};
