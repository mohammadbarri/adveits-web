import React from 'react'

export default function Content({ children }) {
  return (
    <section id="content" className="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 row ms-2">
      <div className="text-end py-2">

        <span className="ms-2">Showing 4 results</span>
      </div>
      {children}
    </section>
  )
}
