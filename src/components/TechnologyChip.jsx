import { motion } from "motion/react";

function TechnologyChip({ technology }) {
  const Icon = technology.icon;

  return (
    <motion.span
      layout
      className="tech-chip"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Icon
        className="tech-icon"
        size={18}
        style={{ color: technology.color }}
      />
      {technology.name}
    </motion.span>
  );
}

export default TechnologyChip;
