import styled from 'styled-components'

import Line from './Line'

export default function Home(props) {
    let thisweek = ['월', '화', '수', '목', '금', '토', '일']

    return (
        <MainWrap>
            <Title>내 일주일은 ?</Title>
            <WeekBox>
                {thisweek.map((v, i) => <Line week={v} key={i}/> )}
            </WeekBox>
        </MainWrap>
    )
}



//스타일
const MainWrap = styled.div`
    background-color: #ddd;
    height: 640px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:auto;
    transform: translateY(5%);
    border-radius: 20px;
`

const Title = styled.div`
    font-size: 30px;
    color:darkcyan;
`

const WeekBox = styled.div`
    background-color: thistle;
    height: 500px;
    width: 350px;
    margin-top: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
`