const getRandomPosition = (min, max) => {
  const random = Math.random() * (max - min) + min;
  return Math.floor(random);
};

export { getRandomPosition };
