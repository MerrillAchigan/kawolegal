import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-red-800">
        <div class="max-w-7xl w-full mx-auto px-6">
            <div class="border-t border-gray-700 my-8"></div>
    
            
            <div class="flex flex-col md:flex-row items-center justify-between">
               
                <div class="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" class="text-white hover:text-white transition"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="#" class="text-white hover:text-white transition"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href="#" class="text-white hover:text-white transition"><ion-icon name="logo-twitter"></ion-icon></a>
                </div>
    
                
                <p class="text-white text-sm">
                    <ion-icon name="home"></ion-icon>  © 2025 KawoLegal. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer