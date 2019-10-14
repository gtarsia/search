<template>
  <div>
    <div class="box" v-for="({ url, name, snippet, tracks }, id) in results" :key="id">
      <a :href="url" v-text="name"></a>
      <button class="button is-small margin-left-5px"
              @click="block(url)">Block</button>

      <span v-if="tracks" class="tag is-danger margin-left-5px">Tracks</span>
      <div class="is-size-6"
           style="color: #47a749"
           v-text="url"></div>
      <div v-text="snippet" class="is-size-7"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      results: 'filtered/displayed',
    }),
  },
  methods: {
    ...mapActions({
      block: 'blacklist/addUrl',
    }),
  },
}
</script>
