<template>
  <div>
    <Header></Header>
    <Router-view></Router-view>
    <Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>
