import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";
import { CustomButton } from "../components";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const snap = useSnapshot(state); // one snapshot of the states and use it

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img // logo img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h2 className="head-text">
                <TypeAnimation
                  sequence={[
                    "Welcome", // Types 'One'
                    500, // Waits 1s
                    "Unleash your designer", // Deletes 'One' and types 'Two'
                    500, // Waits 2s
                    "Create your own design",
                    500, // Types 'Three' without deleting 'Two'
                    "Start right away",
                    500,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </h2>
              {/* <h1 className="head-text">
                Unleash
                <br className="xl:block hidden" />
              </h1> */}
            </motion.div>
            <motion.div className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-600">
                Create your customised shirt today using this 3D customisation
                tool. <strong>Unleash your designer.</strong>
              </p>
            </motion.div>
          </motion.div>
          <CustomButton
            type="filled"
            title="Begin"
            handleClick={() => (state.intro = false)}
            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
          />
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
