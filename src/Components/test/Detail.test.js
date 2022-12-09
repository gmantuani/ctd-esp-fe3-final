import {render, screen} from '@testing-library/react'
import Detail from '../Routes/Detail'


describe('Detail components',()=> {

    test('en el Detail se encuentra en el documento', () =>{
        render(<Detail/>);
        const table = screen.getByRole('table',{name: 'odontologo.name'})
        expect(table).toBeInTheDocument();
    })

})