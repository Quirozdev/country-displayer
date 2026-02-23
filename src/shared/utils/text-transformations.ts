export function toTitleCase(text: string) {
  return text
    .toLowerCase()
    .split(" ")
    .map((t) => {
      return t[0].toUpperCase() + t.slice(1);
    })
    .join(" ");
}
