import React from 'react'

export const LoadingSpin = () => {
  return (
    <div>
     
<button className="btn btn-primary spin-button" type="button" disabled>
  <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
    </div>
  )
}
