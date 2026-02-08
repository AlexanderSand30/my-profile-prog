import { Route, Routes } from "react-router-dom"
import Profile from "./view/Profile"
import LayoutApp from "./Layouts/LayoutApp"
import About from "./view/About"
import Resume from "./view/Resume"
import Works from "./view/Works"
import Contact from "./view/Contact"

function App() {

  return (
    <Routes>
      <Route element={<LayoutApp />}>
        <Route path="*" element={<Profile />} />
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
