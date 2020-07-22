import { shallowMount } from '@vue/test-utils'
import Homepage from '@/components/Homepage.vue'
import Search from '@/components/Search.vue'

describe('Homepage.vue', () => {
  it('renders Store locator heading', () => {
    const wrapper = shallowMount(Homepage)
    expect(wrapper.text()).toEqual("Tails Store Locator")
  })

  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Homepage)
    expect(wrapper.findComponent(Search).exists()).toBe(true)
  })
})
