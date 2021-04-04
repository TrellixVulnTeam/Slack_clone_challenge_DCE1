import React from 'react'
import styled from 'styled-components'
import {auth, provider} from '../firebase'

function login(props) {
    const signIn =() =>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            const newUSer ={
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            props.setUser(newUSer);
            localStorage.setItem('user', JSON.stringify(newUSer))
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    return (
        <Container>
            <Content>
                <SlackImg src="data:image/png;base64,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">

                </SlackImg>
                <h1>Sign in Slack</h1>
                <SignInBottun onClick= {()=> signIn( )}>
                    Sign with Google
                </SignInBottun>
            </Content>
        </Container>
    )
}

export default login
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    background-color:white;
    padding: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%); 
`
const SlackImg = styled.img`
    height: 100px;
`
const SignInBottun = styled.button`
    margin-top: 50px;
    background: #0a8d48;
    color: white;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
`