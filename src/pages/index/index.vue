<script setup lang="ts">
import navBar from '@/components/component/nav-bar.vue'
let shadow = false
/* #ifndef APP-NVUE */
shadow = true
/* #endif */
</script>

<template>
  <view class="content">
    <nav-bar
      :shadow="shadow"
      title="导航栏"
      left-icon="left"
      right-text="设置"
      fixed
      status-bar
      background-color="#007AFF"
      color="#ffffff"
    ></nav-bar>
    <uni-fav />
    <view style="height: 1500rpx"> </view>
  </view>
</template>

<style lang="scss" scoped></style>
