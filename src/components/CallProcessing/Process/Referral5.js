import React from 'react'

export const Referral5 = ({setIndex, formObj , setFormObj}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormObj({...formObj , [name]: value });
      };
      const handleSubmit = () => {
        setIndex(14);
      };
  return (
  <>	<div
  class="h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2">
  <div class="space-y-4">
      <p class="text-base font-medium lg:text-lg xl:text-xl">
          Does the information below look correct?
      </p>

      <form
          id="add-referral-form"
          class=""
          onSubmit={handleSubmit}>
          <div class="space-y-4">
              <div class="relative">
                  <input
                     type="text"
                     id="contact-name-2"
                     class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                     placeholder="Contact Name"
                     onChange={handleChange}
                     value={formObj.name}
                     onKeyDown={(e)=>(e.key === 'Enter')&&handleSubmit(e)} />
                  <label
                      for="contact-name-2"
                      class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500">
                      Contact Name
                  </label>
              </div>

              <div class="relative">
                  <input
                   type="text"
                   id="title2"
                   name="title"
                   onChange={handleChange}
                   class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                   placeholder="Title"
                   value={formObj.title}
                   onKeyDown={(e)=>(e.key === 'Enter')&&handleSubmit(e)} />
                  <label
                      for="title2"
                      class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500">
                      Title
                  </label>
              </div>

              <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
                  <div class="relative">
                      <input
                          type="tel"
                          id="phone2"
                          name="phone"
                          onChange={handleChange}
                          class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                          placeholder="Best Phone Number"
                          value={formObj.phone}
                          onKeyDown={(e)=>(e.key === 'Enter')&&handleSubmit(e)} />
                      <label
                          for="phone2"
                          class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500">
                          Best Phone Number
                      </label>
                  </div>

                  <div class="relative">
                      <input
                          type="text"
                          id="timezone2"
                          class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                          placeholder="Time Zone"
                          onChange={handleChange}
                          name="time"
                          value={formObj.time} 
                          onKeyDown={(e)=>(e.key === 'Enter')&&handleSubmit(e)}/>
                      <label
                          for="timezone2"
                          class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500">
                          Time Zone
                      </label>
                  </div>
              </div>

              <div class="relative">
                  <input
                      type="email"
                      id="email-2"
                      name="email"
                      class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                      placeholder="Email"
                      onChange={handleChange}
                      value={formObj.email}
                      onKeyDown={(e)=>(e.key === 'Enter')&&handleSubmit(e)}/>
                  <label
                      for="email-2"
                      class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500">
                      Email
                  </label>
              </div>
          </div>
      </form>
  </div>
</div>

<div class="flex flex-wrap items-center justify-between gap-2 cursor-pointer">
  <a
      onClick={()=>setIndex(12)}
      class="inline-flex items-center gap-x-2 text-gray-800 transition hover:text-secondary">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="h-4 w-4"
          viewBox="0 0 24 24">
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
      Go Back
  </a>
  <a
      onClick={()=>setIndex(14)}
      class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-6 py-2 text-center font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-10 md:text-lg">
      Yes, add the new contact.

      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          class="h-4 w-4"
          viewBox="0 0 24 24">
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
  </a>
</div></>
  )
}
