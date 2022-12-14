import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
                title='Model S'
                backgroundImg='model-s.jpg'
            />
            <Section
                title='Model Y'
                backgroundImg='model-y.jpg'
            />
            <Section
                title='Model 3'
                backgroundImg='model-3.jpg'
            />
            <Section
                title='Model X'
                backgroundImg='model-x.jpg'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                backgroundImg='solar-panel.jpg'
            />
            <Section
                title='Solar for New Roofs'
                backgroundImg='solar-roof.jpg'
            />
            <Section
                title='Acessories'
                backgroundImg='accessories.jpg'
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
    height:100vh;
`