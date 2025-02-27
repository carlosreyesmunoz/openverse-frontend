<template>
  <VItemGroup
    direction="vertical"
    :size="size"
    :bordered="bordered"
    type="radiogroup"
    class="z-10 md:w-[260px] max-w-full"
  >
    <div
      v-for="(category, index) in contentTypeGroups"
      :key="index"
      :class="{
        'mt-2': index > 0,
        'bg-dark-charcoal-06 border-t border-dark-charcoal-20':
          index > 0 && !bordered,
      }"
    >
      <h4
        :class="bordered ? 'ps-0' : 'ps-6'"
        class="text-sr pt-6 pe-6 pb-4 uppercase font-semibold"
      >
        {{ $t(`search-type.${category.heading}`) }}
      </h4>
      <VSearchTypeItem
        v-for="(item, idx) in category.items"
        :key="item"
        class="md:mb-1"
        :item="item"
        :item-id="idx"
        :icon="content.icons[item]"
        :use-links="useLinks"
        :selected="item === activeItem"
        @click="handleClick(item)"
      />
    </div>
  </VItemGroup>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'

import { isDev } from '~/utils/node-env'

import type { SearchType } from '~/constants/media'
import useSearchType from '~/composables/use-search-type'

import VItemGroup from '~/components/VItemGroup/VItemGroup.vue'
import VSearchTypeItem from '~/components/VContentSwitcher/VSearchTypeItem.vue'

export default defineComponent({
  name: 'VSearchTypes',
  components: { VItemGroup, VSearchTypeItem },
  props: {
    /**
     * 'Small' size for mobile screens,
     * 'medium' size for larger screens.
     */
    size: {
      type: String as PropType<'small' | 'medium'>,
      default: 'small',
    },
    activeItem: {
      type: String as PropType<SearchType>,
      required: true,
    },
    useLinks: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const content = useSearchType()

    const contentTypeGroups = [
      {
        heading: 'heading',
        items: content.types,
      },
    ]

    /**
     * @todo This is for testing purposes only! We may want a different abstraction here;
     * For example having all content types under `content.types` and making them filterable,
     * like `const additional = [...content.types.filter(i => i.status === ADDITIONAL)]`.
     */
    if (isDev) {
      content.additionalTypes = ['model_3d']
      contentTypeGroups.push({
        heading: 'additional',
        items: content.additionalTypes,
      })
    }

    const bordered = computed(() => props.size === 'small')
    const handleClick = (item) => {
      emit('select', item)
    }
    return {
      content,
      contentTypeGroups,
      bordered,
      handleClick,
    }
  },
})
</script>
