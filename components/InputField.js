import React from 'react';
import styled from 'styled-components/native';

export const AreaView = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 80%;
    background-color: #D9D9D9;
    opacity: 0.5;
    border-radius: 20px;
    padding: 2rem 1.2rem 1.2rem 1rem;
`

export const InputArea = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    height:  47px;
    border-radius: 10px;
    background-color: #ffffff;
    opacity: 0.9;
    
    margin-bottom: 0.9rem;

`
export const LabelInput = styled.Text`
    height: 47px;
    font-size: 32px;
    color: #000;
    font-family: 'Electrolize';

`