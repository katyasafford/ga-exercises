var a = 1;
b();
console.log(a);

function b() {
  console.log(a);
  a = 10;
  return;
  function a() {}
}
