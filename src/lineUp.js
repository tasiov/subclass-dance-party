var lineUp = function () {
  var lineUp = {
  position: fixed,
  top: 50%,
  left: 50%
  transform: translate(-50%, -50%);
};
  window.dancers.forEach(function (node) {
    node.css(lineUp); 
  });
};