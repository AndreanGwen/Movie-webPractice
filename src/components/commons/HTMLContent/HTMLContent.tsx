import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

interface PropTypes {
  number: number;
  className?: string;
}

export default function HTMLContent(props: PropTypes) {
  const { number, className } = props;

  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 169, { duration: 5 });
    return () => controls.stop();
  }, []);

  return <motion.pre className={className}>{rounded}</motion.pre>;
}
