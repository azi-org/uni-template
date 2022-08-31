<script lang="ts" setup></script>

<template>
  <view class="nav-bar-comp">
    <view class="status-bar"></view>
    <uni-nav-bar v-bind="$attrs" />
  </view>
</template>

<script lang="ts">
export default {
  name: 'NavBar',
}
</script>

<style lang="scss" scoped>
.status-bar {
  width: 100%;
  height: var(--status-bar-height);
}
</style>
