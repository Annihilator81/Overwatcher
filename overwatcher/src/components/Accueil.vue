<template>
  <div>
  </div>
</template>

<script>
export default {

}
</script>
<style>

</style>

<script>

import axios from 'axios'

export default {
  name: 'Accueil',
  data () {
    return {
      posts: [],
      errors: []
    }
  },
  created () {
    axios.get(this.$serverAddress + '/player?test=abcdef')
      .then(response => {
        this.posts = response.data
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
        this.errors.push(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
