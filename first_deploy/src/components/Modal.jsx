import React from 'react'


export default function Modal({ onAnswer }){
return (
<div className="modal-overlay">
<div className="modal">
<h3>Do you love me?</h3>
<div className="modal-actions">
<button onClick={() => onAnswer('yes')}>Yes</button>
<button onClick={() => onAnswer('no')}>No</button>
</div>
</div>
</div>
)
}