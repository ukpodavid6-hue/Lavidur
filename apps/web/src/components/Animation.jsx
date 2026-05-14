import { motion } from "motion/react";

export const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  className = "",
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: directions[direction].y,
        x: directions[direction].x,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealText = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.05,
            ease: "easeOut",
          }}
          className="mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const AnimatedCard = ({
  children,
  className = "",
  hoverScale = 1.02,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: hoverScale,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SmoothSection = ({ children, className = "", id = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
      {children}
    </section>
  );
};

export const HoverArrowButton = ({
  children,
  primary = true,
  className = "",
  href,
  ...props
}) => {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      whileHover="hover"
      className={`group inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-[2px] text-sm font-semibold tracking-[0.08em] transition-all duration-300 ${
        primary
          ? "border-[#b4975a]/60 bg-[#022c22] text-white hover:border-[#b4975a] hover:bg-[#064e3b]"
          : "border-[#b4975a]/70 text-[#d0b36f] hover:bg-[#b4975a] hover:text-white"
      } ${className}`}
      {...props}
    >
      {children}
      <motion.span
        variants={{
          hover: { x: 5 },
        }}
        transition={{ duration: 0.3 }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </motion.span>
    </Component>
  );
};
