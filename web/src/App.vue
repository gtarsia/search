<template>
  <div id="app">
    <div class="columns page">
      <div class="column is-3 blocks-column" style="border-right: 1px #00000029 solid;">
        <Blocks />
      </div>
      <div class="column is-6 is-offset-3 search-column">
        <div style="border-bottom: 1px #00000029 solid;">
          <SearchBox style="margin-bottom:24px;" />
        </div>
        <Results style="margin-top:12px" />
      </div>
      <div class="column is-3 history-column" style="border-left: 1px #00000029 solid;">
        <History />
      </div>
    </div>
  </div>
</template>

<script>
import Blocks from './views/Blocks.vue'
import SearchBox from './views/SearchBox.vue'
import Results from './views/Results.vue'
import History from './views/History.vue'

export default {
  name: 'app',
  components: {
    Blocks,
    SearchBox,
    Results,
    History,
  },
}
</script>

<style lang="scss">
.box:not(:last-child) {

}

html, body, #app, .page {
  height: 100%;
}

.box {
  border-radius: 2px;
  padding: 0.7rem 0.6rem;
}

.box:not(:last-child) {
  margin-bottom: 16px;
}

.columns {
  margin-left: 0px;
}

.blocks-column {
  position: fixed;
  height: 100%;
}

.blocks-column, .search-column, .history-column {
  margin-top: 16px;
}

.margin-left-5px {
  margin-left: 5px;
}

</style>
