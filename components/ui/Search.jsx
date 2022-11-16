import Image from 'next/image';
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";
import { TfiClose } from "react-icons/tfi";

const Search = ({ setisSearchModal }) => {
  return (
    <div className="absolute w-screen h-screen z-50 top-0 left-0 after:content-[''] after:w-screen after:h-screen after:bg-primary after:absolute
     after:top-0 after:left-0 opacity-90 after:opacity-60 grid place-content-center">
        <OutsideClickHandler onOutsideClick={() => setisSearchModal(false)}>
            <div className='w-full h-full grid place-content-center'>
                <div className="relative z-50 w-[370px] md:w-[37.5rem] h-[37.5rem] bg-white rounded-3xl p-10">
                    <Title addClass="text-[2.5rem] text-center">
                      SUCHE
                    </Title>
                    <input type="text" placeholder='Miso-Nudelsuppe' className='my-8 border rounded-md  w-full' />
                    <div>
                        <ul>
                            <li className='flex items-center justify-between hover:bg-third transition-all'>
                                <div className='relative flex'>
                                   <Image src="/images/ramen.png" alt="Ramen" width={150} height={150} />
                                </div>
                                <span className='font-boldfont font-bold'>Tokyo Ramen</span>
                                <span className='font-boldfont font-bold'>12$</span>
                            </li>
                            <li className='flex items-center justify-between hover:bg-third transition-all'>
                                <div className='relative flex'>
                                   <Image src="/images/ramen.png" alt="Ramen" width={150} height={150} />
                                </div>
                                <span className='font-boldfont font-bold'>Tokyo Ramen</span>
                                <span className='font-boldfont font-bold'>12$</span>
                            </li>
                            <li className='flex items-center justify-between hover:bg-third transition-all'>
                                <div className='relative flex'>
                                   <Image src="/images/ramen.png" alt="Ramen" width={150} height={150} />
                                </div>
                                <span className='font-boldfont font-bold'>Tokyo Ramen</span>
                                <span className='font-boldfont font-bold'>12$</span>
                            </li>
                            <li className='flex items-center justify-between hover:bg-third transition-all'>
                                <div className='relative flex'>
                                   <Image src="/images/ramen.png" alt="Ramen" width={150} height={150} />
                                </div>
                                <span className='font-boldfont font-bold'>Tokyo Ramen</span>
                                <span className='font-boldfont font-bold'>12$</span>
                            </li>
                        </ul>
                        <button onClick={() => setisSearchModal(false)} className='absolute top-2 right-2'>
                            <TfiClose size={30} className='hover:text-third transition-all' />
                        </button>
                    </div>
                </div>
            </div>
        </OutsideClickHandler>
    </div>
  )
}

export default Search