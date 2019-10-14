<template>
  <div class="history">
    <div class="is-size-6" style="margin-bottom: 6px">
      History
    </div>
    <div v-for="({ q }, id) in sortedEntries" :key="id" class="box block">
      <div class="flex-parent has-child">

        <div class="query is-size-7 flex-child long-and-truncated-with-child-corrected"
             @click="query({ q })">
          {{ q }}
        </div>

        <div class="flex-child short-and-fixed">
          <button class="button is-small" @click="remove(q)">X</button>
        </div>
      </div>
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
      entries: 'history/entries',
    }),
    sortedEntries: ({ entries }) => entries.slice().sort((
      { lastAccess: lastAccess1 },
      { lastAccess: lastAccess2 },
    ) => {
      const date1 = new Date(lastAccess1)
      const date2 = new Date(lastAccess2)
      if (date1 > date2) return -1
      if (date1 < date2) return 1
      return 0
    }),
  },
  methods: {
    ...mapActions({
      remove: 'history/removeEntry',
      query: 'results/query',
    }),
  },
}
</script>
<style scoped>
.block.box {
  padding: 0rem 0.5rem;
  margin-bottom: 6px;
}
.flex-parent {
  display: flex;
  align-items: center;
}

.short-and-fixed {
  white-space: nowrap;
}

.long-and-truncated-with-child-corrected {
  flex: 1;
  min-width: 0; /* or some value */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.query {
  cursor: pointer;
}
</style>
