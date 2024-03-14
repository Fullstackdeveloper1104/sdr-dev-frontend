import React from "react";

const Email2 = ({ setIndex,formObjContact,emailType }) => {
  const handleSendEmail = () => {
    // Constructing the mailto link with the email address
    const emailAddress = formObjContact?.email

    const mailtoLink = `mailto:${emailAddress}`;

    // Opening the default email client
    window.location.href = mailtoLink;
  };
  return (
    <>
      <div class="h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2">
        <div class="space-y-4">
          <p class="text-base font-medium lg:text-lg xl:text-xl">
            Does the information below look correct?
          </p>

          <form action="" class="">
            <div class="space-y-4">
              <div class="relative">
                <input
                  type="text"
                  id="contact-name-2"
                  class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                  placeholder="Contact Name"
                  value={formObjContact?.contact}
                />
                <label
                  for="contact-name-2"
                  class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                >
                  Contact Name
                </label>
              </div>

              <div class="relative">
                <input
                  type="email"
                  id="email"
                  class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                  placeholder="Email"
                  value={formObjContact?.email}
                />
                <label
                  for="email"
                  class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                >
                  Email
                </label>
              </div>

              {/* <div class="relative">
                <input
                  type="text"
                  id="emailType"
                  class="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                  placeholder="Email Type"
                  value={emailType}
                />
                <label
                  for="emailType"
                  class="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                >
                  Email Type
                </label>
              </div> */}
            </div>
          </form>
        </div>
      </div>

      <div class="cursor-pointer flex flex-wrap items-center justify-between gap-2">
        <a
          onClick={() => setIndex(1)}
          class="inline-flex items-center gap-x-2 text-gray-800 transition hover:text-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Go Back
        </a>
        <a
          onClick={() => {handleSendEmail();setIndex(8)}}
          class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-6 py-2 text-center font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-10 md:text-lg"
        >
          Finish
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            class="h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Email2;
