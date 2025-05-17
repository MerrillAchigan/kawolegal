import React from 'react'

const Login = () => {
  return (
    <>
        <section class="max-w-7xl w-full mx-auto px-6 py-12">
        <h3 class="text-center">Already a member ? Log in</h3>
        <form action="" class="max-w-7xl p-6 space-y-4">
            <div class="flex flex-col">
                <label for="email" class="font-semibold text-gray-700">Your email <span class="text-red-500">*</span></label>
                <input type="email" name="email" id="email" placeholder="Your email"
                    class="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
            </div>
            <div class="flex flex-col">
                <label for="password" class="font-semibold text-gray-700">Enter password <span class="text-red-500">*</span></label>
                <input type="number" name="password" id="password" placeholder="Enter your password"
                    class="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
            </div>
            <div class="text-center">
                <button type="submit"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition">
                    Sign In
                </button>
            </div>
        </form>
        
    </section>
    </>
  )
}

export default Login