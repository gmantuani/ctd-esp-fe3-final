import  '@testing-library/jest-dom'
import {render, screen , fireEvent} from '@testing-library/react'
import Form from '../Form';

beforeEach(() =>{
    render(<Form/>);
})


test('comprobar nombre y email', async () => {

    const inputName =  screen.getByRole("name");
    fireEvent.change(inputName, {target: {value: 'gian a'}})

    const inputEmail = screen.getByRole("email");
    fireEvent.change(inputEmail, {target: {value: 'asd@gmail.com'}})

    const btnSubmit= screen.getByRole("button"); 
    
    fireEvent.click(btnSubmit)

    const wordMeaning = await screen.findByText("Thanks gian a, check your email soon");

    expect(wordMeaning).toBeInTheDocument();
})