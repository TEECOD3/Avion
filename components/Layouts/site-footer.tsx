import React from "react"

type Props = {}

export const Footer = (props: Props) => {
  return (
    <footer className="mt-auto bg-dark-primary py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 container text-white">
        <div className="flex justify-between flex-col lg:flex-row ">
          <div className="flex flex-col gap-y-2">
            <h4 className="font-clash-display text-header-2">Avion</h4>
            <p>21 New York Street</p>
            <p>New York City</p>
            <p>United States of America</p>
            <p>432 34</p>
          </div>

          <div className=""></div>
        </div>
        <div className=""></div>
      </div>
    </footer>
  )
}
