<template>
  <VContentPage>
    <h1 id="feedback">
      {{ $t('feedback.title') }}
    </h1>
    <i18n path="feedback.intro" tag="p">
      <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
      <template #openverse>Openverse</template>
      <template #slack>
        <VLink href="https://wordpress.slack.com/messages/openverse/"
          >#openverse</VLink
        >
      </template>
      <template #making-wordpress>
        <VLink href="https://make.wordpress.org/chat/">Making WordPress</VLink>
      </template>
      <!-- eslint-enable @intlify/vue-i18n/no-raw-text -->
    </i18n>
    <section>
      <VTabs label="#feedback" variant="plain" :selected-id="tabs[0]" manual>
        <template #tabs>
          <VTab v-for="tab in tabs" :id="tab" :key="tab">
            {{ $t(`feedback.${tab}`) }}
          </VTab>
        </template>
        <VTabPanel v-for="tab in tabs" :id="tab" :key="tab">
          <iframe
            class="w-full h-[1200px] border-0"
            :src="forms[tab]"
            :aria-label="$t(`feedback.aria.${tab}`).toString()"
            :title="$t(`feedback.aria.${tab}`).toString()"
          >
            {{ $t('feedback.loading') }}
          </iframe>
        </VTabPanel>
      </VTabs>
    </section>
  </VContentPage>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import VLink from '~/components/VLink.vue'
import VContentPage from '~/components/VContentPage.vue'
import VTabs from '~/components/VTabs/VTabs.vue'
import VTab from '~/components/VTabs/VTab.vue'
import VTabPanel from '~/components/VTabs/VTabPanel.vue'

const bugForm =
  'https://docs.google.com/forms/d/e/1FAIpQLSenCn-3HoZlCz4vlL2621wjezfu1sPZDaWGe_FtQ1R5-5qR4Q/viewform'
const suggestionForm =
  'https://docs.google.com/forms/d/e/1FAIpQLSfGC7JWbNjGs-_pUNe3B2nzBW-YrIrmRd92t-7u0y7s8jMjzQ/viewform'

const forms = {
  report: `${bugForm}?embedded=true`,
  improve: `${suggestionForm}?embedded=true`,
} as const
const tabs = Object.keys(forms) as (keyof typeof forms)[]

export default defineComponent({
  name: 'FeedbackPage',
  components: { VLink, VContentPage, VTabs, VTab, VTabPanel },
  setup() {
    return {
      forms,
      tabs,
    }
  },
  head() {
    return {
      title: `${this.$t('feedback.title')} | Openverse`,
    }
  },
})
</script>
