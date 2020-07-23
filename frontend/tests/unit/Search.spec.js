import { shallowMount, mount } from '@vue/test-utils'
import axios from "axios";
import flushPromises from 'flush-promises'
import Search from '@/components/Search.vue'
import { singleStoreMock, multipleStoresMock } from '../../fixtures/StoresMock';

jest.mock('axios');
jest.useFakeTimers();

describe('Search.vue', () => {
  it('renders with text input', () => {
    const wrapper = shallowMount(Search)
    expect(wrapper.find('input')).toBeTruthy()
  });

  describe('Store suggestions', () => {

    it('renders store suggestion when text is entered', async () => {
      const wrapper = shallowMount(Search)
  
      const response = singleStoreMock;
      axios.get.mockResolvedValue(response);
  
      const input = wrapper.find('input');
      input.element.value = 'newhaven';
      input.trigger('input');
  
      wrapper.setData({ open: 'true' })  

      jest.runAllTimers();
      await flushPromises()

      expect(wrapper.find('.focus').text()).toEqual("Newhaven")
    });

    it('removes suggested stores when search bar is empty ', async () => {
      const wrapper = shallowMount(Search)
  
      const response = singleStoreMock;
      axios.get.mockResolvedValue(response);
  
      const input = wrapper.find('input');
      input.element.value = 'newhaven';
      input.trigger('input');
  
      wrapper.setData({ open: 'true' })  

      jest.runAllTimers();
      await flushPromises()

      expect(wrapper.find('.focus').text()).toEqual("Newhaven")

      input.element.value = 'n';
      input.trigger('input');
      
      wrapper.setData({ open: 'true' })  

      jest.runAllTimers();
      await flushPromises()
  
      expect(wrapper.find('.focus').exists()).toBe(false)
    });
  
    it('focuss render only once two characters have been entered', async () => {
      const wrapper = shallowMount(Search)
  
      const response = singleStoreMock;
      axios.get.mockResolvedValue(response);
  
      const input = wrapper.find('input');
      input.element.value = 'n';
      input.trigger('input');
      
      wrapper.setData({ open: 'true' })  

      jest.runAllTimers();
      await flushPromises()
  
      expect(wrapper.find('.focus').exists()).toBe(false)
  
      input.element.value = 'ne';
      input.trigger('input');
  
      jest.runAllTimers();
      await flushPromises()
  
      expect(wrapper.find('.focus').exists()).toBe(true)
    });

    it('when rendered suggested store clicked, store added to search bar', async () => {
      const wrapper = shallowMount(Search)
  
      const response = singleStoreMock;
      axios.get.mockResolvedValue(response);
  
      const input = wrapper.find('input');
      input.element.value = 'new';
      input.trigger('input');

      wrapper.setData({ open: 'true' })  

      jest.runAllTimers();
      await flushPromises()

      const suggested = wrapper.find('.focus')

      suggested.trigger('click');

      await flushPromises()

      expect(input.element.value).toEqual("Newhaven")
    });
  });

  describe('Store results', () => {
    it('on submit, stores are emited', async () => {
      const wrapper = mount(Search)
  
      const response = singleStoreMock;
      axios.get.mockResolvedValue(response);
  
      const input = wrapper.find('input');
      input.element.value = 'newhaven';
      input.trigger('keyup.enter');
  
      jest.runAllTimers();
      await flushPromises()

      expect(wrapper.emitted().storesFound).toBeTruthy()
    });

    it('on submit, suggested stores are no longer visible', async () => {
      const wrapper = mount(Search)
  
      const response = singleStoreMock;
      axios.get.mockResolvedValue(response);
  
      const input = wrapper.find('input');
      input.element.value = 'newhaven';
      input.trigger('keyup.enter');
      
      wrapper.setData({ open: 'false' })  

      jest.runAllTimers();
      await flushPromises()

      expect(wrapper.find('.focus').exists()).toBe(false)
    });
  });

  describe('keyboard control', () => {
    xit('pressing the down arrow selects first focus', async () => {
      const wrapper = shallowMount(Search)
  
      const response = singleStoreMock;
      axios.get.mockResolvedValue(response);

      const input = wrapper.find('input');
      input.element.value = 'new';
      input.trigger('input');

      wrapper.setData({ open: 'true' })  
      jest.runAllTimers();
      await flushPromises()

      input.trigger('keydown.down')
      input.trigger('keyup.enter');

      await flushPromises()

      expect(input.element.value).toEqual("Newhaven")
    });

    xit('pressing the up arrow selects a focus', async () => {
      const wrapper = shallowMount(Search)
  
      const response = multipleStoresMock;
      axios.get.mockResolvedValue(response);

      const input = wrapper.find('input');
      input.element.value = 'br';
      input.trigger('input');

      wrapper.setData({ open: 'true' })  
      jest.runAllTimers();
      await flushPromises()

      wrapper.trigger('keydown', {
        key: 'down'
      })
      wrapper.trigger('keyup.down')
      wrapper.trigger('keyup.down')
      wrapper.trigger('keyup.up')
      input.trigger('keyup.enter');

      await flushPromises()

      expect(input.element.value).toEqual("Bracknell")
    });
  });

});
