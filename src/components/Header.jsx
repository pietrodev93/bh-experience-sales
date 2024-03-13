import {motion } from 'framer-motion'
import Image from 'next/image'
const svgVariants = {
    hidden: {   rotate: -180, opacity: 0 },
    visible: {
        rotate: 0,
        opacity: 1,
        transition: { duration: 1 }
    }
}

function openWhatsapp() {
    window.open('https://wa.me/393665036732?text=Ciao%20ti%20contatto%20per%20la%20BodyHack%20Experience', '_target')
}

function Header() {
  return (
    <div className="flex items-center justify-between w-full bg-gray-500/30 px-3 xl:px-10 py-4 rounded-full z-80">
        <div>
            {/* <motion.svg variants={svgVariants} initial="hidden" animate="visible"  width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.75H9V6H6V10.9351L3.51965 11.4312L5.28832 16.7372L6.71134 16.2628L5.48 12.5688L11.25 11.4148V15H12.75V11.4149L18.5197 12.5688L17.2883 16.2628L18.7113 16.7372L20.48 11.4312L18 10.9352V6H15V3.75ZM13.5 6V5.25H10.5V6H13.5ZM16.5 7.5V10.6352L11.9998 9.73515L7.5 10.6351V7.5H16.5ZM3.00011 18.75C3.19958 19.473 3.19953 19.473 3.19949 19.473L3.20059 19.4727L3.20549 19.4714L3.22657 19.4656C3.24553 19.4605 3.27415 19.4529 3.31153 19.443C3.38632 19.4233 3.49608 19.3949 3.63372 19.3606C3.90931 19.2921 4.29506 19.2006 4.7346 19.1093C5.62806 18.9236 6.69028 18.75 7.5001 18.75C8.27924 18.75 8.87154 18.9106 9.55063 19.098L9.57079 19.1035C10.2459 19.2898 11.0075 19.5 12.0001 19.5C12.9927 19.5 13.7543 19.2898 14.4294 19.1035L14.4496 19.098C15.1287 18.9106 15.721 18.75 16.5001 18.75C17.3099 18.75 18.3722 18.9236 19.2656 19.1093C19.7052 19.2006 20.0909 19.2921 20.3665 19.3606C20.5041 19.3949 20.6139 19.4233 20.6887 19.443C20.7261 19.4529 20.7547 19.4605 20.7736 19.4656L20.7947 19.4714L20.7996 19.4727L20.8007 19.473L21.0001 18.75C21.1996 18.027 21.1995 18.027 21.1994 18.027L21.1898 18.0243L21.1646 18.0175C21.1429 18.0116 21.1114 18.0032 21.071 17.9925C20.9901 17.9712 20.8736 17.9411 20.7285 17.905C20.4388 17.8329 20.0336 17.7369 19.5708 17.6407C18.6597 17.4514 17.4719 17.25 16.5001 17.25C15.5075 17.25 14.7459 17.4602 14.0708 17.6465L14.0506 17.652C13.3715 17.8394 12.7792 18 12.0001 18C11.221 18 10.6287 17.8394 9.94958 17.652L9.92942 17.6465C9.25432 17.4602 8.49268 17.25 7.5001 17.25C6.52833 17.25 5.34055 17.4514 4.42941 17.6407C3.96665 17.7369 3.56145 17.8329 3.27166 17.905C3.12661 17.9411 3.01008 17.9712 2.92925 17.9925C2.88882 18.0032 2.8573 18.0116 2.83557 18.0175L2.81043 18.0243L2.80357 18.0262L2.80078 18.027C2.8007 18.027 2.80063 18.027 3.00011 18.75Z" fill="#080341"/>
            </motion.svg> */}
            <Image src="https://bodyhack.live/wp-content/uploads/2024/03/Logo-Experience-White.png" width={180} height={80} alt="Bodyhack Experience" className='flex xl:hidden' />

            <Image src="https://bodyhack.live/wp-content/uploads/2024/03/Logo-Experience-White.png" width={220} height={80} alt="Bodyhack Experience" className='hidden xl:flex' />
        </div>
        {/* <div className="flex-1 hidden xl:flex items-center justify-center">
            <ul className="flex items-center justify-center gap-4">
                <li className="cursor-pointer">
                    <p>About</p>
                </li>
                <li className="cursor-pointer">
                    <p>Mission</p>
                </li>
                <li className="cursor-pointer">
                    <p>Vision</p>
                </li>
                <li className="cursor-pointer">
                    <p>Contact</p>
                </li>
            </ul>
        </div> */}
        <div>
            <button onClick={() => openWhatsapp()} className="rounded-full bg-[#ef5d28] px-2 py-2 xl:px-5 xl:py-4 text-sm text-white">CONTATTACI ORA</button>
        </div>
    </div>
  )
}

export default Header