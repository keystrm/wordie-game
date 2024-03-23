import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'

describe('WordleBoard', () => {
  it('a success message appears when user guess the word of the day', async () => {
    //Arrange
    const wrapper = mount(WordleBoard, { props: { wordOfTheDay: 'Tests' } })

    //Act
    const guessInput = wrapper.find('input[type=text]')
    await guessInput.setValue('Tests')
    await guessInput.trigger('keydown.enter')

    //Assert
    expect(wrapper.text()).toContain('You won!')
  })
})
