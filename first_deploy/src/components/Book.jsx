import React from 'react'


export default function Book({ curPage, onOpen, onPageClick, pageText }){
return (
<div className="book-area">
<div className={`book ${curPage !== null ? 'open' : ''}`}>
{/* left cover */}
<div className="cover left">

</div>


{/* pages container */}
<div className="pages" onClick={onPageClick}>
{curPage === null ? (
<div className="front-placeholder">
<h2>OPEN ME</h2>
<button className="open-btn" onClick={onOpen}>Open me</button>
</div>
) : (
<div className="page-content">
{pageText.split('\n').map((line, i) => (
<p key={i}>{line}</p>
))}
</div>
)}
</div>


{/* right cover */}
<div className="cover right"/>


</div>
</div>
)
}