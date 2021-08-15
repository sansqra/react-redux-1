import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { setName } from '../store/FormSlice';


const CenterContainer = styled.div
`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    height: 100vh;
    overflow-y : hidden;
`

const FormContainer = styled.form
`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    height : 200px;
    width: 250px;
    gap : 15px;
    margin: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const InputContainer =  styled.input
`   
    width: 200px;
    height: 25px;
    text-align: center;
    ::placeholder {
        color : black;
        text-align: center;  
    }
`

const ButtonContainer = styled.button
`
    padding: 5px;
`

const Form : React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        inputRef.current!.focus();
    }, []);

    const { name } = useAppSelector(
        (state) => state.entities.formslice
      );

    return (
        <CenterContainer>
            <FormContainer onSubmit={() => alert('Styled Form')} style={ { background : '#f6f6f6' } }>
                <InputContainer 
                    type='text' 
                    placeholder='Enter some text' 
                    value={name} 
                    onChange={(e) => dispatch(setName(e.target.value))} 
                    ref={inputRef}
                    />
                <ButtonContainer disabled={name ? false : true}>Submit</ButtonContainer>
            </FormContainer>
        </CenterContainer>
    );
}

export default Form;