<template>
  <div class="blocks">
    <div class="is-size-6" style="margin-bottom: 6px">
      Blacklist
    </div>
    <div class="list"><div v-for="({ hostname, score }, id) in sortedBlocked" :key="id" class="box block">
      <div class="flex-parent has-child">

        <div class="is-size-7 flex-child long-and-truncated-with-child-corrected">
          {{ hostname }} ({{ score }})
        </div>

        <div class="flex-child short-and-fixed">
          <button class="button is-small" @click="remove(hostname)">X</button>
        </div>
      </div>
    </div></div>
  </div>
</template>
<script>
import { orderBy } from 'lodash'
import { mapGetters, mapActions } from 'vuex'
// import comp from './comp.vue'

export default {
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      blocked: 'filtered/blockedWithScore',
    }),
    sortedBlocked: ({ blocked }) => orderBy(blocked, 'score', 'desc')

  },
  methods: {
    ...mapActions({
      remove: 'blacklist/removeHostname',
    }),
  },
}
</script>
<style scoped lang="scss">
.list {
  overflow-y: scroll;
}
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

body {
  padding: 40px;
}
</style>
