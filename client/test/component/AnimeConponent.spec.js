import { render, fireEvent } from '@testing-library/vue';
import Anime from "@/pages/Anime/Anime";

test('Incorrect answer processing', async () => {
    const { getByPlaceholderText, getByText } = render(Anime, {
        propsData: {
            item: {name: "Gura", imageUrl: "none"}
        }
    });

    const inputForm = getByPlaceholderText("Enter the name");
    await fireEvent.update(inputForm, "Gawr");

    getByText("No, you're wrong.")
})

test('Right answer processing', async () => {
    const { getByPlaceholderText, getByText } = render(Anime, {
        propsData: {
            item: {name: "Gura", imageUrl: "none"}
        }
    });

    const inputForm = getByPlaceholderText("Enter the name");
    await fireEvent.update(inputForm, "Gura");

    getByText("You are right! Gura is here!")
})
