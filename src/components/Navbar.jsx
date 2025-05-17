import React from 'react'

const Navbar = () => {
  return (
    <nav class="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex justify-between items-center py-5">
    
                <a href="#home" class="text-4xl font-semibold text-red-500">Kawo Legal</a>

                <div class="flex space-x-6">
                    <a href="main.html" class="text-red-500  border-2 border-red-400 px-3 transition">Home</a>
                    <a href="start.html" class="text-red-500 transition">Startups</a>
                    <a href="register.html" class="text-red-500 transition">Register</a>
                    <a href="login.html" class="text-red-500 transition">Login</a>
                </div>
            </div>
        </nav>
  )
}

export default Navbar