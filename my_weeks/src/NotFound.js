import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function NotFound() {
    return (
        <MainWrap>잘못된 페이지 입니다.</MainWrap>
        
    );
}

const MainWrap = styled.div`
    background-color: #edd;
    height: 640px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:auto;
    transform: translateY(5%);
    border-radius: 20px;
    font-size: 30px;
    color: #ee4444;
`