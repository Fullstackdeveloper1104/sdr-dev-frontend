import React from 'react'

export const Dials = ({dials}) => {
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
            <path d="M9.725 6.173a.636.636 0 0 1 0-.9l2.731-2.73h-1.645a.636.636 0 0 1 0-1.271h3.18a.636.636 0 0 1 .636.636v3.18a.636.636 0 0 1-1.272 0V3.443l-2.73 2.73a.636.636 0 0 1-.9 0Zm6.164 5.837a4.472 4.472 0 0 1-4.442 3.889C5.135 15.899 0 10.763 0 4.452A4.472 4.472 0 0 1 3.889.009 1.272 1.272 0 0 1 5.21.765l1.679 3.75v.009a1.272 1.272 0 0 1-.146 1.26L5.088 7.748c.595 1.21 1.86 2.464 3.086 3.06l1.935-1.645a1.267 1.267 0 0 1 1.266-.156l.01.005 3.745 1.678a1.272 1.272 0 0 1 .76 1.32Zm-1.262-.16h-.009l-3.736-1.673-1.936 1.647a1.272 1.272 0 0 1-1.31.135c-1.49-.72-2.974-2.192-3.694-3.665a1.272 1.272 0 0 1 .125-1.31L5.724 5.02l-1.67-3.736v-.01a3.196 3.196 0 0 0-2.782 3.178 10.186 10.186 0 0 0 10.175 10.175 3.196 3.196 0 0 0 3.18-2.777Z" />
          </svg>
        </span>
        <h6 class="text-base font-medium">Dials</h6>
      </div>
{/* 
      <div class="flex items-center gap-px text-sm font-medium text-primary">
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
        <span class=""> +7% </span>
      </div> */}
    </div>

    <div class="px-4 pt-3 lg:px-8">
      <h2 class="text-5xl font-medium">{dials}</h2>
    </div>
  </div>
  )
}
