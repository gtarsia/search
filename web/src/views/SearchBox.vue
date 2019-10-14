<template>
  <form @submit.prevent="query({ q: innerQuery })">
    <div class="field has-addons">
      <div class="control" style="width: 100%">
        <input class="input"
               type="text"
               placeholder="Search anything..."
               autofocus
               :value="input"
               @input="innerQuery = $event.target.value">
      </div>
      <div class="control">
        <a class="button is-info">
          Search
        </a>
      </div>
    </div>
  </form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      innerQuery: '',
    }
  },
  methods: {
    ...mapActions({
      query: 'results/query',
    }),
  },
  computed: {
    ...mapGetters({
      input: 'results/input',
    }),
  },
}
</script>
