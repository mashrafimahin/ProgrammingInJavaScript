const LastWord = (s) => {
  const arr = s.split(" ");
  const filtered = arr.filter((a) => a);
  return filtered[filtered.length - 1].length;
};

LastWord(" Hello World ");
