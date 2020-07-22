import { shallowMount } from '@vue/test-utils'
import Store from '@/components/Store.vue'

describe('Store.vue', () => {
  it('renders Store locator heading', () => {
    const wrapper = shallowMount(Store, {
      propsData: {
        name: 'Newhaven'
      }
    })

    expect(wrapper.text()).toEqual("Newhaven")
  })
})
