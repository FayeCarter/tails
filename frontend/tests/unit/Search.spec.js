import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search.vue'

describe('Search.vue', () => {
  it('renders with text input', () => {
    const wrapper = shallowMount(Search)
    expect(wrapper.find('input')).toBeTruthy()
  })
})
