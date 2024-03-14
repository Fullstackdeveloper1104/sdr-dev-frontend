import React from 'react'

const Reaches = ({reaches}) => {
  return (
    <div class="rounded-xl bg-secondary/10 p-5">
    <div class="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
      <div class="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
        <span class="rounded-lg bg-accent-1 p-1 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            class="h-5 w-5"
          >
            <path d="M15.133 10.689 11.387 9.01l-.01-.005a1.272 1.272 0 0 0-1.265.156l-1.935 1.65C6.952 10.215 5.686 8.96 5.09 7.75l1.652-1.965a1.272 1.272 0 0 0 .15-1.258v-.01L5.21.768a1.272 1.272 0 0 0-1.32-.76A4.472 4.472 0 0 0 0 4.452c0 6.311 5.135 11.447 11.447 11.447a4.473 4.473 0 0 0 4.442-3.89 1.272 1.272 0 0 0-.756-1.32Zm-3.686 3.938A10.187 10.187 0 0 1 1.272 4.452a3.196 3.196 0 0 1 2.772-3.18v.01l1.67 3.736L4.07 6.984a1.272 1.272 0 0 0-.125 1.31c.72 1.473 2.205 2.945 3.694 3.665a1.274 1.274 0 0 0 1.252-.09.544.544 0 0 0 .058-.046l1.933-1.648 3.736 1.674h.009a3.196 3.196 0 0 1-3.18 2.778ZM8.903 3.816a.636.636 0 0 1 .636-.636h1.908V1.272a.636.636 0 0 1 1.272 0V3.18h1.908a.636.636 0 1 1 0 1.272h-1.908v1.907a.636.636 0 1 1-1.272 0V4.452H9.54a.636.636 0 0 1-.636-.636Z" />
          </svg>
        </span>
        <h6 class="text-base font-medium">Reaches</h6>
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
        <span class=""> +3% </span>
      </div> */}
    </div>

    <div class="px-4 pt-3 lg:px-8">
      <h2 class="text-5xl font-medium">{reaches}</h2>
    </div>
  </div>
  )
}

export default Reaches