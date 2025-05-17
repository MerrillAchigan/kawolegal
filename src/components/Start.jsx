import React from 'react'
import sleeek from '../assets/sleek.png'
import slate from '../assets/slate.jpeg'
import think from '../assets/think.jpeg'

const Start = () => {
  return (
    <>
    <section class="max-w-7xl w-full mx-auto px-6 py-12">
        <div class="grid grid-cols-1 gap-6">

            <div class="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <a href="#"><img src={think} alt="Think and Zoom" class="w-full h-56 object-contain"/></a>
                <div class="p-6 flex flex-col justify-center">
                    <h2 class="text-2xl font-semibold">Think and Zoom</h2>
                    <p class="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis reiciendis incidunt corrupti, aliquid ad assumenda ab similique unde perferendis.
                    </p>
                    <button class="mt-4 px-4 py-2 border-2 border-gray-400 text-gray-700 hover:bg-gray-200 transition">
                        See full details
                    </button>
                </div>
            </div>

            <div class="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <a href="#"><img src={slate} alt="Slate" class="w-full h-56 object-contain"/></a>
                <div class="p-6 flex flex-col justify-center">
                    <h2 class="text-2xl font-semibold">Slate</h2>
                    <p class="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis reiciendis incidunt corrupti, aliquid ad assumenda ab similique unde perferendis.
                    </p>
                    <button class="mt-4 px-4 py-2 border-2 border-gray-400 text-gray-700 hover:bg-gray-200 transition">
                        See full details
                    </button>
                </div>
            </div>

            <div class="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <a href="#"><img src={sleeek} alt="Sleek" class="w-56 h-56 object-contain" /></a>
                <div class="p-6 flex flex-col justify-center">
                    <h2 class="text-2xl font-semibold">Sleek</h2>
                    <p class="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis reiciendis incidunt corrupti, aliquid ad assumenda ab similique unde perferendis.
                    </p>
                    <button class="mt-4 px-4 py-2 border-2 border-gray-400 text-gray-700 hover:bg-gray-200 transition">
                        See full details
                    </button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Start