import { shallowMount, mount } from '@vue/test-utils'
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

  describe('Store suggestions', () => {
    it('renders store suggestion when text is entered', async () => {
      const wrapper = shallowMount(Search)
  
      const response = singleStoreMock;
      axios.get.mockResolvedValue(response);
  
      const input = wrapper.find('input');
      input.element.value = 'newhaven';
      input.trigger('input');
  
      await flushPromises()
  
      expect(wrapper.find('.suggested-store').text()).toEqual("Newhaven")
    })
  
    it('suggested-stores render only once two characters have been entered', async () => {
      const wrapper = shallowMount(Search)
  
      const response = singleStoreMock;
      axios.get.mockResolvedValue(response);
  
      const input = wrapper.find('input');
      input.element.value = 'n';
      input.trigger('input');
  
      await flushPromises()
  
      expect(wrapper.find('.suggested-store').exists()).toBe(false)
  
      input.element.value = 'ne';
      input.trigger('input');
  
      await flushPromises()
  
      expect(wrapper.find('.suggested-store').exists()).toBe(true)
    })
  })

  describe('Store results', () => {
    it('on submit, stores are emited', async () => {
      const wrapper = mount(Search)
  
      const response = singleStoreMock;
      axios.get.mockResolvedValue(response);
  
      const input = wrapper.find('input');
      input.element.value = 'newhaven';
      input.trigger('keyup.enter');
  
      await flushPromises()

      expect(wrapper.emitted().storesFound).toBeTruthy()
    })
  })

})
