/**
 * generateFantasticImage
 *
 * utility function to return a image URL.
 *
 * input arg does nothing, but pretend
 * it's being used to auto-suggest an image.
 *
 * NOTE: This function synchronously spin-locks the main thread for Xms
 * in order to simulate CPU bound work.
 */

const spinLockDuration = 100;

const urlsToReturn = [
  "https://images.unsplash.com/photo-1626947245642-3e6dafa921fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1626931395241-73002757f7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3290&q=80",
  "https://images.unsplash.com/photo-1626684496084-11e724d092f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
  "https://images.unsplash.com/photo-1626646481106-3209e7718072?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1626769539543-a3fa16ca70fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",
  "https://images.unsplash.com/photo-1626554617207-85c7996dec74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
  "https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3159&q=80",
  "https://images.unsplash.com/photo-1505502768156-98c787d2190e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3171&q=80",
  "https://images.unsplash.com/photo-1594281992407-57ee674d8d50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1626947245642-3e6dafa921fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
];

const generateFantasticImage = (input) => {
  const spinLockUntill = performance.now() + spinLockDuration;

  while (performance.now() < spinLockUntill) {}

  const urlIndexToReturn = Math.floor(Math.random() * urlsToReturn.length);
  return urlsToReturn[urlIndexToReturn];
};

export default generateFantasticImage;
