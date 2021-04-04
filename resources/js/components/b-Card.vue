<template>
    <div class="blurred-card">
        <slot></slot>
    </div>
</template>

<style lang="sass" scoped>
.blurred-card {
  color: white;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 1em;
//   border-image: linear-gradient(to right bottom, #ffffff, #ffffff00, #ffffff00);
}
</style>
