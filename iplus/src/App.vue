<template>
  <MenuBar/>
  <IndexMv/>
  <IndexWork/>
  <IndexProduct/>
  <IndexCompany/>
</template>

<script>
import MenuBar from './components/MenuBar.vue'
import IndexMv from './components/indexMv.vue'
import IndexWork from './components/indexWork.vue'
import IndexProduct from './components/indexProduct.vue'
import IndexCompany from './components/indexCompany.vue'

export default {
  name: 'App',
  components: {
    MenuBar,
    IndexMv,
    IndexWork,
    IndexProduct,
    IndexCompany
}
}
</script>

<style>

</style>
