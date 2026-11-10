export const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
export const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};
