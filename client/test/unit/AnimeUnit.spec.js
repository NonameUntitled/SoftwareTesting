import {mount} from '@vue/test-utils'
import Anime from "@/pages/Anime/Anime";
import About from "@/pages/About/About"

describe('Anime test', () => {
    test('Before answer condition test', () => {
        const wrapper = mount(Anime, {
            propsData: {
                item: {name: "Kiara", imageUrl: "https://i.redd.it/3ta84174s7o51.png"}
            }
        });

        expect(wrapper.find("#anime_image").exists()).toBeTruthy()
        expect(wrapper.find("#correct_answer").exists()).toBeFalsy()
        expect(wrapper.find("#incorrect_answer").exists()).toBeFalsy()
    })
})



