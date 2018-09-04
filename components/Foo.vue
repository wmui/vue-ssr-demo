<template>
  <div class='foo'>
    <p>{{article.title}}</p>
  </div>
</template>
<style>
.foo {
  background: yellow;
}
</style>
<script>
export default {
  asyncData: function({store}) {
    return store.dispatch('GET_ARTICLE') // 返回promise
  },
  created() {
    console.log('foo created');
  },
  computed: {
    article() {
      return this.$store.state.article
    }
  }
}
</script>