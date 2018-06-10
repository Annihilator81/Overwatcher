<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-container class="temporaryShit">
        <b-row align-h="center">
          <b-form-radio-group buttons button-variant="outline-primary" id="pcOrConsole" v-model="form.pcOrConsole" :options="platformOptions" name="radioPcOrConsole"></b-form-radio-group>
        </b-row>
        <b-row align-h="center">
          <b-form-group id="pseudoTooltip" label="Pseudonyme" label-for="pseudoTooltip" description="Votre pseudo battle.net">
            <b-form-input id="pseudo" type="text" v-model="form.pseudo" placeholder="Pseudo" required></b-form-input>
          </b-form-group>
        <b-form-group v-if="form.pcOrConsole !== 'PS4'" id="battleTagTooltip" label="BattleTag" label-for="battleTagTooltip" description="Votre tag battle.net">
          <b-form-input id="battleTag" type="text" v-model="form.battleTag" placeholder="BattleTag" required></b-form-input>
        </b-form-group>
        </b-row>
        <b-row align-h="center">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-row>
      </b-container>
    </b-form>
    <b-container class="temporaryBullShit">
        <b-row align-h="center">
          <b-form-radio-group buttons button-variant="outline-primary" id="pcOrConsole" v-model="statsFilter" :options="statsOptions" name="radioStatsFilter"></b-form-radio-group>
        </b-row>
    </b-container>
    <ProfilComponent v-bind:playerProfil="posts.profile"></ProfilComponent>
  </div>
</template>

<script>
import axios from 'axios'
import ProfilComponent from './Profil'

export default {
  components: {
    ProfilComponent
  },
  data () {
    return {
      form: {
        pcOrConsole: 'PC',
        pseudo: '',
        battleTag: ''
      },
      platformOptions: ['PC', 'PS4'],
      statsOptions: ['Quickplay', 'Ranked', 'Both'],
      statsFilter: 'Ranked',
      show: true,
      posts: [],
      errors: []
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      var route = '/player?name=' + this.form.pseudo + '&battleTag=' + this.form.battleTag + '&platform=' + this.form.pcOrConsole
      axios.get(this.$serverAddress + route)
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.pcOrConsole = 'PC'
      this.form.pseudo = ''
      this.form.battleTag = ''
      this.statsFilter = 'Ranked'
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style>
.temporaryShit {
    margin-top: 10%;
}
.temporaryBullShit {
    margin-top: 10%;
}
</style>
