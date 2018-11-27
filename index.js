var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  var boaz = Object.assign({}, object);
<<<<<<< HEAD
  delete boaz[key];
  return boaz;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
=======
  return boaz;
>>>>>>> aed63bf7bc674fbba7e928cf1dfeb9bbcc7e38a7
}