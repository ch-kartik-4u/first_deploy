import { useState } from 'react'
import Book from './components/Book'
import Modal from './components/Modal'


export default function App(){
const pages = [
'Page 1: Once upon a time...\n\nClick to continue reading.',
'Page 2: The story goes on...\n\nClick to continue reading.',
'Page 3: Climax of the tale...\n\nClick to continue reading.',
'Page 4: The end.\n\nYou reached the last page.'
]


const [currentPage, setCurrentPage] = useState(null) // null = closed, 0..n-1 = open
const [erased, setErased] = useState(false)
const [showModal, setShowModal] = useState(false)
const [congrats, setCongrats] = useState(false)


function openBook(){
setCurrentPage(0)
setErased(false)
setCongrats(false)
}


function clickPage(){
if(currentPage === null) return
if(currentPage < pages.length - 1){
setCurrentPage(cp => cp + 1)
}
}


function handleIHaveRead(){
// only works when on last page
if(currentPage === pages.length - 1){
// erase everything
setErased(true)
setShowModal(true)
}
}


function handleAnswer(ans){
setShowModal(false)
if(ans === 'yes'){
setCongrats(true)
// optionally reset other states
setCurrentPage(null)
} else {
// per requirement: alert on 'no'
alert('choose a valid option')
}
}


return (
<div className="app-root">
  <div className="frame">
	{!erased && !congrats && (
	  <>
		<Book
		  sketchUrl={'/mnt/data/a1278d63-4a00-45f4-af18-45df81b4b47d.png'}
		  curPage={currentPage}
		  onOpen={openBook}
		  onPageClick={clickPage}
		  pageText={currentPage !== null ? pages[currentPage] : ''}
		/>

		<div className="controls">
		  <button
			className={`i-read ${currentPage === pages.length - 1 ? 'active' : ''}`}
			onClick={handleIHaveRead}
			disabled={currentPage !== pages.length - 1}
		  >
			I have read
		  </button>
		</div>
	  </>
	)}

	{erased && !congrats && (
	  <div className="erased-placeholder">Everything erased...</div>
	)}

	{congrats && (
	  <div className="congrats">
		<h1>🎉 Congrats! 🎉</h1>
		<p>You chose yes — nice!</p>
	  </div>
	)}

	<footer className="bottom-bar">Made by</footer>
  </div>

  {showModal && (
	<Modal onAnswer={handleAnswer} />
  )}
</div>
)
}