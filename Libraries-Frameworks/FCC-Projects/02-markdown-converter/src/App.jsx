import { useState } from 'react'
import { ExamplesModal } from './Components/ExamplesModal'
import { ButtonShowModal } from './Components/ButtonShowModal'
import {Editor} from './Components/Editor'
import {Preview} from './Components/Preview'
import { convertMarkdown } from './logic'
import './App.css'

export const App = () => {

  const [opacity, setOpacity] = useState(0)
  const [text, setText] = useState(`# Welcome to my React Markdown Previewer!\n### By: Diego17`)

  const handleClick = () => {
    setOpacity(1)
  }

  const handleClose = () => {
    setOpacity(0)
  }

  const handleChange = (e) => {
    const newText = (e.target.value)
    setText(newText)
  }

  return (
    <main className="app">
      <ButtonShowModal handleClick={handleClick}></ButtonShowModal>
      <ExamplesModal handleClose={handleClose} opacity={opacity}></ExamplesModal>
      <Editor handleConvert={handleChange} value={text}></Editor>
      <Preview markdown={convertMarkdown(text)}></Preview>
    </main>
  )
}

