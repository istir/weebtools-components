import { fa0, faDownload } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import Button from "./components/Button/Button"
import Input from "./components/Input"
import Toggle from "./components/Toggle"

function App() {

  return (
    <div className="App" style={{ display: 'flex',flexDirection:'column', flexWrap: 'wrap' }}>
      <p>Buttons</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Button buttonType="plain" size="small">Plain button</Button>
      <Button buttonType="gray" size="large">Gray button</Button>
      <Button buttonType="tinted" badge={'1'}>Tinted button</Button>
      <Button buttonType="plain" size="small" label="Test123" icon={faDownload}></Button>
      </div>
      <p>Toggles</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Toggle />
        <Toggle defaultState={true} />
      </div>
      <p>Inputs</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Input />
      </div>
    </div>
  )
}

export default App
