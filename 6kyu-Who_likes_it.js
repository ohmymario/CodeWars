function likes(names) {
  let likesCount = names.length;

  if (likesCount === 0) return `no one likes this`;
  if (likesCount === 1) return `${names[0]} likes this`;
  if (likesCount === 2) return `${names[0]} and ${names[1]} like this`;
  if (likesCount === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (likesCount > 3)
    return `${names[0]}, ${names[1]} and ${likesCount - 2} others like this`;
}
