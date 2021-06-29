<template>
  <home-head/>
  <home-body/>
  <home-foot/>
</template>

<script>
import homeHead from './components/homeHead'
import homeBody from './components/homeBody'
import homeFoot from './components/homeFoot'

export default {
  components: {
    homeHead,
    homeBody,
    homeFoot
  },
  setup() {
    
  },
}
</script>

<style scoped>

</style>
