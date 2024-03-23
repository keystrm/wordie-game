import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'
import { VICTORY_MESSAGE } from '@/settings'

describe('WordleBoard', () => {
  it('a success message appears when user guess the word of the day', async () => {
    const wrapper = mount(WordleBoard, { props: { wordOfTheDay: 'Tests' } })

    const guessInput = wrapper.find('input[type=text]')
    await guessInput.setValue('Tests')
    await guessInput.trigger('keydown.enter')

    expect(wrapper.text()).toContain(VICTORY_MESSAGE)
  })
})
