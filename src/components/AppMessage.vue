<template>
  <div>
    <div v-if="message" :class="['alert', message.type]">
      <p class="alert-title" v-if="title">{{title}}</p>
      <p>{{ message }}</p>
      <span class="alert-close">&times;</span>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup() {
    const store = useStore()
    const TITLE_MAP = {
      primary: 'Успешно!',
      danger: 'Ошибка',
      warning: 'Внимание'
    }

    const message = computed(() => store.state.message)
    const title = computed(() => store.value ? TITLE_MAP[message.value.type] : null)

    return {
      message, title,
      close: () => store.commit('clearMessage')
    }
  }
}
</script>

<style scoped>

</style>