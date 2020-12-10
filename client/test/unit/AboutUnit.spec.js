import {mount} from "@vue/test-utils";
import About from "@/pages/About/About";

describe('About test', () => {
    test('About page test', () => {
        const wrapper = mount(About, {});

        expect(wrapper.find("#anime-list").exists()).toBeTruthy()
    })
})