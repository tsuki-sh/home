<template>
  <div class="wrapper">
    <svg
      class="logo"
      width="48"
      height="48"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M467.276 284.309C465.223 282.252 462.65 280.793 459.831 280.088C457.012 279.383 454.054 279.46 451.276 280.309C420.767 289.532 388.328 290.305 357.414 282.546C326.501 274.787 298.272 258.787 275.735 236.25C253.198 213.712 237.197 185.483 229.438 154.57C221.679 123.656 222.453 91.2171 231.676 60.7085C232.532 57.9285 232.614 54.9678 231.913 52.1448C231.212 49.3217 229.755 46.7431 227.698 44.6863C225.641 42.6295 223.063 41.1723 220.239 40.4714C217.416 39.7705 214.456 39.8525 211.676 40.7085C169.496 53.6294 132.466 79.5244 105.856 114.708C82.584 145.606 68.3888 182.38 64.865 220.9C61.3412 259.42 68.6284 298.159 85.9079 332.766C103.187 367.373 129.775 396.476 162.682 416.805C195.59 437.135 233.515 447.885 272.196 447.849C317.323 447.988 361.249 433.317 397.236 406.089C432.42 379.478 458.315 342.448 471.236 300.269C472.082 297.499 472.16 294.552 471.463 291.741C470.766 288.93 469.318 286.361 467.276 284.309Z"
        fill="white"
      />
    </svg>
    <p class="text" color-white font-serif text-8>Tsuki</p>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  user-select: none;
}

.text {
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  position: absolute;
  left: 50%;
  top: 0;

  opacity: 0;
  transform: translateY(-6px) translateX(-50%);
}

.logo {
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.wrapper:hover > .text {
  opacity: 1;
  transform: translateY(0px) translateX(-50%);
}

.wrapper:hover > .logo {
  opacity: 0;
  transform: translateY(-6px);
  pointer-events: none;
}
</style>
