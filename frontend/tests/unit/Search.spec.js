import { shallowMount } from '@vue/test-utils'
import axios from "axios";
import flushPromises from 'flush-promises'
import Search from '@/components/Search.vue'
import { singleStoreMock } from '../../fixtures/StoresMock';

jest.mock('axios');

describe('Search.vue', () => {
  it('renders with text input', () => {
    const wrapper = shallowMount(Search)
    expect(wrapper.find('input')).toBeTruthy()
  })

  it('renders store suggestion when text is entered', async () => {
    const wrapper = shallowMount(Search)

    const response = singleStoreMock;
    axios.get.mockResolvedValue(response);

    const input = wrapper.find('input');
    input.element.value = 'newhaven';
    input.trigger('input');

    await flushPromises()

    expect(wrapper.find('.suggested_store').text()).toEqual("Newhaven")
  })
})
