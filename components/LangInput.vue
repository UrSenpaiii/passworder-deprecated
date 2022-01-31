<template>
  <div class="lang-dropdown">
    <nuxt-link v-for="local in $i18n.locales" :to="switchLocalePath(local.code)"
               :src="require(`assets/${local.code}.svg`)" class="m-1" width="40px" tag="img" :title="local.name"/>
  </div>
</template>

<style scoped lang="scss">
img {
  cursor: pointer;
}
</style>
