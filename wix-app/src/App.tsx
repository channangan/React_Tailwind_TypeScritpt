import { User } from "./Person";

const App = () => {
  return (
    <div className="w-screen h-screen grid place-content-center bg-teal-600">
      <User name={"Channa"} age={18} isMarried={false} />
    </div>
  );
};

export default App;
