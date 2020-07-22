import { shallowMount } from '@vue/test-utils'
import Homepage from '@/components/Homepage.vue'

describe('Homepage.vue', () => {
  it('renders Store locator heading', () => {
    const wrapper = shallowMount(Homepage)
    expect(wrapper.text()).toEqual("Tails Store Locator")
  })
})
