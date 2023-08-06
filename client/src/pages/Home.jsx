import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import {headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import state from '../store'
import { CustomButton } from '../components'


const Home = () => {
  
  const snap = useSnapshot(state); // one snapshot of the states and use it
  
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img 
              src='./threejs.png'
              alt='logo'
              className='w-8 h-8 object-contain'
            />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET's<br className='xl:block hidden'/> DO IT!
              </h1>
            </motion.div> 
            <motion.div className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600'>Create your customised shirt today using this 3D customisation tool. <strong>Unleash your designer.</strong></p>
            </motion.div>
          </motion.div>
          <CustomButton 
            type="filled"
            
          />
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home