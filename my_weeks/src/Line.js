import { Link } from "react-router-dom"
import styled from 'styled-components'

import image from './arow.png'

export default function Line(props) {

    let randNum = parseInt((Math.random() * 10) % 5) + 1

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Weekday>{props.week}</Weekday>

            {Array(5).fill(0).map((v, i) => <WeekCircle key={i} check={randNum > i} /> )}
            
            <Link to={`/score/${props.week}`}><JumpWeek src={image}></JumpWeek></Link>
        </div>
    )
}



//스타일
const WeekCircle = styled.div`
    background-color: #bbb;
    height: 40px;
    width: 40px;
    margin: 5px;
    border-radius: 20px;
    background-color: ${(prop) => (prop.check ? 'rebeccapurple' : {})};
`

const Weekday = styled.div`
    background-color: #333;
    color: #bbb;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 5px;
`

const JumpWeek = styled.img`
    height: 40px;
    width: 40px;
    margin: 5px;
`