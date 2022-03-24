import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components'
import { db } from "./firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect } from "react";

export default function Score(props) {
    let thisDay = useParams();
    const [num, setNum] = useState();

    function numChange(p) {
        setNum(p)
    }

    //추가 - 키보드 입력
    onkeydown = (e) => (e.key >= 0 && e.key < 8 ? numChange(parseInt(e.key)) : null)




    return (
        <MainWrap>
            <Title><WeekStyle>{thisDay.weekDay}요일</WeekStyle> 평점 남기기</Title>
            <WeekBox>
                <CircleBox>
                    {Array(5).fill(0).map((v, i) => (
                        <WeekCircle key={i} mynum={i + 1} cnum={num} onClick={() =>
                            numChange(i + 1)} />
                    ))}
                    {/* 추가 - 6점, 7점 */}
                    {num > 5 ? Array(num - 5).fill(0).map((v, i) => (
                        <WeekCircle key={num + i} mynum={i + 1} cnum={num} onClick={() =>
                            numChange(i + 1)} />
                    )) : null}
                </CircleBox>

                <div style={{ fontSize: '18px', marginTop: '20px' }}>제 점수는 요</div>

                <div style={{ fontSize: '24px', margin: '10px' }}>{num}점 입니다.{num > 5 && ' 그만 !'}</div>

                <Link to='/'><BackButton>확인</BackButton></Link>
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

const WeekStyle = styled.span`
    background-color: burlywood;
    color: #5555ff;
    font-weight: 600;
    border-radius: 10px;
`

const WeekBox = styled.div`
    background-color: thistle;
    height: 500px;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    border-radius: 20px;
`

const CircleBox = styled.div`
    display: flex;
    flex-direction: row;
`

const WeekCircle = styled.div`
    background-color: #bbb;
    height: 40px;
    width: 40px;
    margin: 5px;
    border-radius: 20px;
    float: left;
    background-color: ${(prop) => (prop.mynum <= prop.cnum ? 'rebeccapurple' : '#bbb')};
`

const BackButton = styled.button`
    font-size: 24px;
    width: 160px;
    height: 42px;
    background-color: #5555ff;
    border: 1px solid #5555ff;
    color: aliceblue;
    border-radius: 20px;
    :hover {
        background-color: #8888ff;
        border: #8888ff;
    }
`
