<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-container>
        <b-row align-h="center">
          <b-form-radio-group id="pcOrConsole" v-on:change="test()" v-model="pcOrConsole" :options="options" name="radioPcOrConsole"></b-form-radio-group>
        </b-row>
        <b-row align-h="center">
          <b-form-group id="pseudoTooltip" label="Pseudonyme" label-for="pseudoTooltip" description="Votre pseudo battle.net">
            <b-form-input id="pseudo" type="text" v-model="form.pseudo" placeholder="Pseudo" required></b-form-input>
          </b-form-group>
        <b-form-group id="battleTagTooltip" label="BattleTag" label-for="battleTagTooltip" description="Votre tag battle.net">
          <b-form-input id="battleTag" type="text" v-model="form.battleTag" placeholder="BattleTag" required></b-form-input>
        </b-form-group>
        </b-row>
        <b-row align-h="center">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-row>
      </b-container>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        pcOrConsole: 'PC',
        email: '',
        name: '',
        checked: []
      },
      options: ['PC', 'PS4'],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    test () {
      this.form.pcOrConsole = options;
    }
  }
}
</script>

<style>
</style>
