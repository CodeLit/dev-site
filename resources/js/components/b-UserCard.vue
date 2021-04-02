<template>
  <div
    class="avatar inline-flex items-center"
    :class="[col ? 'flex-col' : 'flex-row']"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'NickName',
      job: 'JobTitle',
    }
  },
  props: {
    col: Boolean(false),
    imgPath: String,
  },
}
</script>
