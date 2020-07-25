import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
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

  it('renders Stores', () => {
    const wrapper = shallowMount(Homepage, {
      data() {
        return {
          stores: ['Newhaven']
        }
      },
    })

    expect(wrapper.html()).toContain("Newhaven")
  })
})
