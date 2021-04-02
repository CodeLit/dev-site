<template>
  <alert-box>
    <strong>Ошибка!</strong>

    <!-- позволяет пеердавать содержимое в компонент -->
    <slot></slot>
    Произошло что-то плохое.
  </alert-box>
</template>
