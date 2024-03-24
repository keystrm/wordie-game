import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'
import { VICTORY_MESSAGE, DEFEAT_MESSAGE } from '@/settings'

describe('WordleBoard', () => {
  let wordOfTheDay = 'Tests'
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    wrapper = mount(WordleBoard, { props: { wordOfTheDay } })
  })

  const playerSubmitsGuess = async (guess: string) => {
    const guessInput = wrapper.find('input[type=text]')
    await guessInput.setValue(guess)
    await guessInput.trigger('keydown.enter')
  }

  test('a success message appears when user guess the word of the day', async () => {
    await playerSubmitsGuess('Tests')
    expect(wrapper.text()).toContain(VICTORY_MESSAGE)
  })
  test('a failed message appears when user guess the word of the day incorrectly', async () => {
    await playerSubmitsGuess('Wrong')
    expect(wrapper.text()).toContain(DEFEAT_MESSAGE)
  })
  test('no end-message appears when user has not made a guess', async () => {
    expect(wrapper.text()).not.toContain(VICTORY_MESSAGE)
    expect(wrapper.text()).not.toContain(DEFEAT_MESSAGE)
  })
  test('show a console warning if the word of the day is exactly than 5 letters', async () => {
    console.warn = vi.fn()
    mount(WordleBoard, { props: { wordOfTheDay: 'FLY' } })
    expect(console.warn).toHaveBeenCalled()
  })
})
