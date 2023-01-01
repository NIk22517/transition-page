import { motion as m } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.5, staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.5 } },
};
const contact = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className='text-grey-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16'
    >
      <main>
        <div className='my-20 overflow-hidden'>
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='text-6xl text-center lg:text-right lg: text-9xl'
          >
            Hello Contact!
          </m.h1>
        </div>

        <div className='flex justify-between'>
          <div className='lg:text-2xl text-base'>
            <h2>Lorem, ipsum dolor.</h2>
          </div>
          <div className='text-2xl lg:text-5xl underline'>
            <m.ul variants={container} initial='hidden' animate='show'>
              <div className='overflow-hidden'>
                <m.li variants={item} className='pb-2'>
                  Instagram
                </m.li>
              </div>
              <div className='overflow-hidden'>
                <m.li variants={item} className='pb-2'>
                  LinkedIn
                </m.li>
              </div>
              <div className='overflow-hidden'>
                <m.li variants={item} className='pb-2'>
                  Telgram
                </m.li>
              </div>
              <div className='overflow-hidden'>
                <m.li variants={item} className='pb-2'>
                  Twitter
                </m.li>
              </div>
              <div className='overflow-hidden'>
                <m.li variants={item} className='pb-2'>
                  GitHub
                </m.li>
              </div>
            </m.ul>
          </div>
        </div>
      </main>
    </m.div>
  );
};

export default contact;
