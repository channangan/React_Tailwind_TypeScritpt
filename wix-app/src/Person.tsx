export interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: Person) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Name: {props.age}</p>
      <p>Name: {props.isMarried ? "Is married" : "Is single"}</p>
    </div>
  );
};
