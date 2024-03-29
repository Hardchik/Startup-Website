import React from "react";

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    location: "Toronto, Canada",
  },
  // More people...
];

export default function Team() {
  return (

    <>

<div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">

          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Sponsers.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit occaecat labore proident cillum in nisi
              adipisicing officia excepteur tempor deserunt.
            </p>
            <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
            <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
              />
            </div>
          </div>
        </div>
    {/* ----------------------------- */}
    
    <div
      className="
    
      bg-gradient-to-b from-blue-900
      rounded-b-lg
      relative isolate overflow-hidden bg-gray-900 
    py-24 sm:py-32 my-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
                />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-300">{person.role}</p>
              <p className="text-sm leading-6 text-gray-500">
                {person.location}
              </p>
            </li>
          ))}

          {people.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
                />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-300">{person.role}</p>
              <p className="text-sm leading-6 text-gray-500">
                {person.location}
              </p>
            </li>
          ))}

          {people.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-300">{person.role}</p>
              <p className="text-sm leading-6 text-gray-500">
                {person.location}
              </p>
            </li>
          ))}

          {people.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
                />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-300">{person.role}</p>
              <p className="text-sm leading-6 text-gray-500">
                {person.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
          </>
  );
}
