import { Link } from "react-router-dom"
import styled from 'styled-components'

import image from './arow.png'

export default function Line(props) {
    
    let randNum = parseInt((Math.random() * 10) % 5) + 1
    // setCount(randNum)
    // console.log(randNum)

    return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <Weekday>{props.week}</Weekday>
            <WeekCircle check={randNum > 0}/>
            <WeekCircle check={randNum > 1}/>
            <WeekCircle check={randNum > 2}/>
            <WeekCircle check={randNum > 3}/>
            <WeekCircle check={randNum > 4}/>
            <Link to={`/score/${props.week}`}><JumpWeek src={image}></JumpWeek></Link>
        </div>
    )
}


const WeekCircle = styled.div`
    background-color: #bbb;
    height: 40px;
    width: 40px;
    margin: 5px;
    border-radius: 20px;
    background-color: ${(prop) => (prop.check ? 'rebeccapurple' : {} )};
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