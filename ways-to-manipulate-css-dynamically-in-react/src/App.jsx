//* In React.js, we can dynamically manipulate CSS in multiple ways. Below are all the possible approaches with proper examples:

import Using_Inline_Style from "./components/Using_Inline_Style"
import Using_CSS_Classes from "./components/Using_CSS_Classes"
import Using_CSS_Module from "./components/Using_CSS_Module"
import Using_Styled_Components from "./components/Using_Styled_Components"
import Using_Emotion from "./components/Using_Emotion"

function App() {


  return (
    <>
      <div>
        <Using_Inline_Style></Using_Inline_Style>
        <hr />
        <Using_CSS_Classes></Using_CSS_Classes>
        <hr />
        <Using_CSS_Module></Using_CSS_Module>
        <hr />
        <Using_Styled_Components></Using_Styled_Components>
        <hr />
        <Using_Emotion></Using_Emotion>
      </div>

    </>
  )
}

export default App
