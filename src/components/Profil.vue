<template>
<div>
    <p>toto</p>
    <button v-on:click="test()">toitotototo</button>
</div>
</template>

<script>

export default {
  mounted () {
    console.log(this.playerProfil)
  },
  props: ['playerProfil'],
  methods: {
    test () {
      console.log(this.playerProfil)
    }
  }
  /* props: {
  // type, required and default are optional, you can reduce it to 'options: Object'
    playerProfil: {
      type: Object,
      required: false,
      default () {
        return {
          test: 'wow'
        }
      }
    }
  } */
}
</script>

<style>
</style>
