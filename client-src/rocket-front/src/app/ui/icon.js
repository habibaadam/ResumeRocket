import * as React from 'react';
import { motion } from 'framer-motion';

function Rocketship(props) {
    const svgVariants = {
        hidden: {
            y: '-100vh',
        },
        // visible: {
        //     y: '10vh',
        //     transition: {
        //         duration: 3,
        //     }
        // },
        visible: {
            y: ['20vh', '10vh'],
            transition: {
                duration: 3,
                y : {
                    yoyo: Infinity,
                    duration: 2,
                    ease: 'easeInOut'
                }
            }
        }
    }

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 3,
                ease: 'easeInOut'
            }
        }
    }

    const ellipseVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 6,
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.svg xmlns="http://www.w3.org/2000/svg" id="etF2UcGwd7K1" viewBox="0 0 300 300" {...props}
            variants={svgVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.g transform="translate(4.920857-19.558164)">
                <motion.ellipse rx="11.428214" ry="32.51566" transform="matrix(1.009171 0 0 1 137.359403 117.48434)" fill="#d2dbed"
                    variants={ellipseVariants}
                />
                <motion.path d="M150,26.643898q-27.519312,13.351454-34.57191,200.738861.287139,16.337797,7.052598,16.337797t27.204004,0" transform="matrix(1.009171 0 0 1.126503-13.557064-9.803415)" fill="none" stroke="#fff" stroke-width="1px"
                    variants={pathVariants}
                />
                <motion.path d="M150,26.643898q-27.519312,13.351454-34.57191,200.738861.287139,16.337797,7.052598,16.337797t27.83462,0" transform="matrix(-1.009171 0 0 1.126503 289.194236-9.803415)" fill="none" stroke="#fff" stroke-width="1px"
                    variants={pathVariants}
                />
                <motion.path d="M120.348665,265.127499c.604277-3.021387-3.997058,13.839804-1.468967,14.747546q0,0,18.938888,0" fill="none" stroke="#fff" stroke-width="1px"
                    variants={pathVariants}
                />
                <motion.path d="M120.348665,265.127499c.604277-3.021387-3.997058,13.839804-1.468967,14.747546q0,0,18.938888,0" transform="matrix(-1 0 0 1 275.637172 0)" fill="none" stroke="#fff" stroke-width="1px"
                    variants={pathVariants}
                />
                <motion.path d="M104.544454,204.264089c-6.135904,21.909034-18.715355,68.237193-12.985642,68.237182c11.404673.000001,27.320885,0,27.320885,0" transform="translate(.000002 0.000001)" fill="none" stroke="#fff" stroke-width="1px"
                    variants={pathVariants}
                />
                <motion.path d="M104.544454,204.264089c-6.135904,21.909034-18.715355,68.237193-12.985642,68.237182c11.404673.000001,27.320885,0,27.320885,0" transform="matrix(-1 0 0 1 275.810891 0.000001)" fill="none" stroke="#fff" stroke-width="1px"
                    variants={pathVariants}
                />
                <motion.g transform="matrix(1 0 0 1.283057-.68878-79.220573)">
                    <motion.g transform="translate(.318205 0.000014)">
                        <motion.path d="M125.826381,279.875045c-1.238406,13.529822,2.036179,14.57032,2.838376,16.014548.882832,1.589398,1.530626-5.217163,1.530626-5.217163" transform="matrix(1 0 0 1.028583 0-7.999668)" fill="none" stroke="#fff" stroke-width="1px"
                            variants={pathVariants}
                        />
                        <motion.path d="M130.195383,290.67243c2.755514,17.202947,6.199034,18.722147,7.305003,19.198017" fill="none" stroke="#fff" stroke-width="1px"
                            variants={pathVariants}
                        />
                    </motion.g>
                    <motion.g transform="matrix(-1.076847 0 0 1 285.426274 0.000028)">
                        <motion.path d="M125.826381,279.875045c-1.238406,13.529822,2.036179,14.57032,2.838376,16.014548.882832,1.589398,1.530626-5.217163,1.530626-5.217163" transform="matrix(1 0 0 1.028583 0-7.999668)" fill="none" stroke="#fff" stroke-width="1px"
                            variants={pathVariants}
                        />
                        <motion.path d="M130.195383,290.67243c2.755514,17.202947,6.199034,18.722147,7.305003,19.198017" fill="none" stroke="#fff" stroke-width="1px"
                            variants={pathVariants}
                        />
                    </motion.g>
                </motion.g>
            </motion.g>
        </motion.svg>
    )
}


export default Rocketship;
