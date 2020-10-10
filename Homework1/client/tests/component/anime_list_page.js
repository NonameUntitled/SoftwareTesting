import {shallowMount} from "@vue/test-utils";
import AnimeListPage from '@/views/AnimeListPage'


describe('AnimeListPage', () => {
    it('Тестирует добавление нового аниме', () => {
        const wrapper = shallowMount(AnimeListPage, {
            data() {
                return {
                    message: 'Привет, мир',
                    username: ''
                }
            }
        })

        // посмотреть, отобразилось ли сообщение
        expect(wrapper.find('.message').text()).toEqual('Привет, мир')

        // проверить, что ошибка отрисовалась
        expect(wrapper.find('.error').exists()).toBeTruthy()

        // обновить `username` и проверить, что ошибка больше не отрисовалась
        wrapper.setData({username: 'Александр'})
        expect(wrapper.find('.error').exists()).toBeFalsy()
    })
})