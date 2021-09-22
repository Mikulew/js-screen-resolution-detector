const screenResolutionDetector = (function() {
  const resolution = document.querySelector("#resolution");
  
  const reportWindowSize = () => {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    resolution.textContent = `${currentWidth} x ${currentHeight}`;
  }
  
  window.onresize = reportWindowSize;

  const init = () => {
    reportWindowSize();
  }

  return {
    init,
  }
})();

screenResolutionDetector.init();