<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/reset.scss";
body {
  font-family: Source Sans Pro;
  background-color: #e5e5e5;
}
#app {
  margin: 32px 32px 0 32px;
  min-width: 396px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
