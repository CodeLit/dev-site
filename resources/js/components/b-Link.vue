<template>
  <a class="text-center" :href="url" :target="blank ? `_blank` : ``"
    ><slot></slot
  ></a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '#',
    },
    blank: Boolean(false),
  },
}
</script>
