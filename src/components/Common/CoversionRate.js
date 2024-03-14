import React from 'react'

const CoversionRate = ({conversionrate}) => {
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
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
          </svg>
        </span>
        <h6 class="text-base font-medium">Conversion Rate</h6>
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
      <h2 class="text-5xl font-medium">{conversionrate}%</h2>
    </div>
  </div>
  )
}

export default CoversionRate