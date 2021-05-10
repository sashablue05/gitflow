<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>


<style lang="scss" src="./assets/App.scss"></style>