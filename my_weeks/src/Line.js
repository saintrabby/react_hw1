import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect } from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components'

import image from './arow.png'

export default function Line(props) {

    let randNum = parseInt((Math.random() * 10) % 5) + 1

    let db_data_list = []

    useEffect(async () => {
        let query = await getDocs(collection(db, 'mydicts'))
        
        // query.forEach((v) => {
        //     if(v.data().week === props.week) {
        //         let doc_id = v.id
        //         let week = v.data().week
        //         let score = v.data().score

        //         let put = { doc_id, week, score }
    
        //         db_data_list.unshift(put)
        //     }

        //     // console.log(db_data_list[0])
        // })

        // db_data_list.find((v)=>{ return v.week === props.week }).score
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Weekday day={props}>{props.week}</Weekday>

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
    background-color: ${(prop) => (prop.day.week == prop.day.today ? '#e66' : '#333')};
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