export function kebabCaseFormat(value) {
  let newFormat = value.replace(/\s+/g, "-").toLowerCase();
  return newFormat;
}
