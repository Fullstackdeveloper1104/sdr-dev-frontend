import React from 'react'

const ConnectionRate = ({connectionrate}) => {
  return (
    <div class="rounded-xl bg-secondary/10 p-5">
    <div class="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
      <div class="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
        <span class="rounded-lg bg-accent-1 p-1 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
            class="h-5 w-5"
          >
            <path d="M12.461 6.23v4.155a.692.692 0 1 1-1.384 0V7.902L6.72 12.259a.691.691 0 0 1-1.183-.49.693.693 0 0 1 .203-.49l4.357-4.356H7.615a.692.692 0 1 1 0-1.385h4.154a.693.693 0 0 1 .692.693ZM18 9a9 9 0 1 1-9-9 9.01 9.01 0 0 1 9 9Zm-1.385 0A7.615 7.615 0 1 0 9 16.615 7.625 7.625 0 0 0 16.615 9Z" />
          </svg>
        </span>
        <h6 class="text-base font-medium">Connection Rate</h6>
      </div>

      {/* <div class="flex items-center gap-px text-sm font-medium text-primary">
        <span class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 21 21"
            class="h-4 w-4"
          >
            <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
          </svg>
        </span>
        <span class=""> +12% </span>
      </div> */}
    </div>

    <div class="px-4 pt-4 lg:px-8">
      <h2 class="text-5xl font-medium">{connectionrate}%</h2>
    </div>
  </div>
  )
}

export default ConnectionRate