import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'
import { VICTORY_MESSAGE, DEFEAT_MESSAGE } from '@/settings'

describe('WordleBoard', () => {
  let wordOfTheDay = 'Tests'
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    wrapper = mount(WordleBoard, { props: { wordOfTheDay } })
  })

  test('a success message appears when user guess the word of the day', async () => {
    const guessInput = wrapper.find('input[type=text]')
    await guessInput.setValue('Tests')
    await guessInput.trigger('keydown.enter')

    expect(wrapper.text()).toContain(VICTORY_MESSAGE)
  })
  test('a failed message appears when user guess the word of the day incorrectly', async () => {
    const guessInput = wrapper.find('input[type=text]')
    await guessInput.setValue('Wrong')
    await guessInput.trigger('keydown.enter')

    expect(wrapper.text()).toContain(DEFEAT_MESSAGE)
  })
  test('no end-message appears when user has not made a guess', async () => {
    expect(wrapper.text()).not.toContain(VICTORY_MESSAGE)
    expect(wrapper.text()).not.toContain(DEFEAT_MESSAGE)
  })
})
