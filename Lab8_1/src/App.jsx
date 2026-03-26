// import React, {useState} from "react";
// import ToggleBox from "./components/ToggleBox/ToggleBox.jsx";
// import DeleteModal from "./components/Modal/DeleteModal.jsx";
// import AsyncCounter from "./components/AsyncCounter/AsyncCounter.jsx";
// import JokeItem from "./components/JokeList/JokeItem.jsx";

// const App = () => {
//   return (
//     <>
//       <ToggleBox />

//       <DeleteModal />
//       <AsyncCounter />

//     </>
//   );
// };



// ─── src/App.jsx (parent) ────────────────────────────────────────────────────

// const JOKES = [
//   { id: 1, text: "Joke A" },
//   { id: 2, text: "Joke B" },
// ];

// function App() {
//   const [selectedId, setSelectedId] = useState(null);

//   return (
//     <div>
//       {JOKES.map(j => (
//         <JokeItem
//           key={j.id}
//           joke={j}
//           isSelected={selectedId === j.id}
//           onSelect={setSelectedId}
//         />
//       ))}
//     </div>
//   );
// }


// export default App;


// STARTUP CODE
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ToggleBox from './components/ToggleBox/ToggleBox';
import AsyncCounter from './components/AsyncCounter/AsyncCounter';

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 flex gap-4 bg-gray-800 text-white">
        <Link to="/">Toggle</Link>
        <Link to="/counter">Counter</Link>
      </nav>

      <Routes>
        {/* GAP: Define the Route for the Home path "/" */}
        <Route path="/" element={<ToggleBox />} />

        {/* GAP: Define the Route for the "/counter" path */}
        <Route path="/counter" element={<AsyncCounter />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
