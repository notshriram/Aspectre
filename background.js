const changeAllAspectRatios = () => {
  const changeAspectRatio = (video) => {
    // get video container div
    var videoContainer = video.parentNode;

    // add style to div transform: scaleX(0.75); and scaleY(1);
    videoContainer.style.transform = "scaleX(0.75) scaleY(1)";
  };

  //get all video elements on the page and change their aspect ratio
  document.querySelectorAll("video").forEach(changeAspectRatio);
};

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      function: changeAllAspectRatios,
    });
  }
});
