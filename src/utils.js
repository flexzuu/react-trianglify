function removeUndefined(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default removeUndefined;
