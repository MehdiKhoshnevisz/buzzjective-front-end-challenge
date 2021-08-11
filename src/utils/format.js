export function kebabCaseFormat(value) {
  let newFormat = value.replace(/\s+/g, "-").toLowerCase();
  return newFormat;
}

export function nonSpaceFormat(value) {
  let newFormat = value.replace(/\s+/g, "").toLowerCase();
  return newFormat;
}

export function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
