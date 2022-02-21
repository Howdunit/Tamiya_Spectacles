// Custom Utility scripts.



global.Clamp = function (num, min, max) {
    return Math.min(Math.max(num, min), max);
}


global.Map = function (current, in_min, in_max, out_min, out_max) {
  const mapped = ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  return global.Clamp(mapped, out_min, out_max);
}