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



    let db_data_list = []

    useEffect(async () => {
        let query = await getDocs(collection(db, 'mydicts'))

        query.forEach((v) => {
            let doc_id = v.id
            let week = v.data().week
            let score = v.data().score

            let put = { doc_id, week, score }

            db_data_list.unshift(put)
        })

        // db_data_list.map((v)=>{
        //     console.log(v)
        // })


        //컬렉션 없으면 생성
        // let week_arr = ['일', '월', '화', '수', '목', '금', '토']
        // week_arr.map((v)=>{
        //     console.log(v)
        //     addDoc(collection(db, 'mydicts'), {week: v, score: 0})
        // })



        //삭제
        // if (query.docs[0] !== undefined) {
        //     const docRef = doc(db, 'mydicts', query.docs[0].id)
        //     console.log(query.docs[0].id)
        //     // deleteDoc(docRef)
        // }

        // query.docs.map((v)=>{
        //     const docRef = doc(db, 'mydicts', v.id)
        //     deleteDoc(docRef)
        // })



        // //수정
        // db_data_list.map((v, i) => {
        //     if (v.week === thisDay.weekDay) {
        //         const docRef = doc(db, 'mydicts', v.doc_id)
        //         if (num >= 0 && num < 8) {
        //             db_data_list[i].score = num
        //             updateDoc(docRef, { score: num })
        //             // console.log(db_data_list[i])
        //         }
        //     }
        // })
        // const docRef = doc(db, 'mydicts', 'KOwVsoTahKzqTfknoVFe')
        // updateDoc(docRef, {score: 1})



        //추가
        // addDoc(collection(db, 'mydicts'), {week: "목", score: 0})



        //가져오기
        // console.log(query.docs[0].id)
        // console.log(query.docs[0]._document.data.value.mapValue.fields.score)

        // query.forEach((doc) => {
        //     console.log(doc.id)
        // })




        // let f = db_data_list.find((v) => v.week === thisDay.weekDay)
        // console.log(f)
        // console.log(db_data_list[0])

    });

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
