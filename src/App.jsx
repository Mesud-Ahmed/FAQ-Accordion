import Accordion from "./Accordion";

function App() {
  return (
    <div className="relative h-screen flex flex-col">

      <div className="h-[40vh] bg-contain bg-center bg-image"></div>
      <div className="flex-1 bg-pink-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Accordion />
      </div>
      
    </div>
  );
}

export default App;
