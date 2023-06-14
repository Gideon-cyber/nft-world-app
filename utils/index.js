export const getRGBColor = (hex, opacity = 1) => {
  let color = hex.replace(/#/g, "");
  // if shorthand notation is passed in
  if (color.length !== 6) {
    color = `${color}${color}`;
  }
  // rgb values
  var r = parseInt(color.substr(0, 2), 16);
  var g = parseInt(color.substr(2, 2), 16);
  var b = parseInt(color.substr(4, 2), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
