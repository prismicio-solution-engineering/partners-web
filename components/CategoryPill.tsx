export const categoryPillColor = (category: string) => {
  if (category === "Use case") {
    return "bg-quaternary-purple text-primary-purple";
  } else if (category === "Best practice") {
    return "bg-quaternary-green text-primary-green";
  } else if (category === "Tutorial") {
    return "bg-quaternary-orange text-primary-orange";
  } else if (category === "Websites") {
    return "bg-quaternary-blue text-primary-blue";
  } else if (category === "Tools") {
    return "bg-quaternary-pink text-primary-pink";
  }
};

export const categoryColor = (category: string) => {
  if (category === "Use case") {
    return "purple";
  } else if (category === "Best practice") {
    return "green";
  } else if (category === "Tutorial") {
    return "orange";
  } else if (category === "Websites") {
    return "blue";
  } else if (category === "Tools") {
    return "pink";
  }
};
