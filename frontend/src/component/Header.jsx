const outerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // 세로 중앙 정렬
    flexDirection: "row", // 가로 방향으로 배치
    height: "60px", // 원하는 높이 설정
    backgroundColor: "#f8f8f8", // 배경색 (필요시)
    padding: "10px", // 여백 (필요시)
}


const Item = () => {
    return (
        <div>
            <img alt=""/>
            <span>메인 &nbsp;&nbsp;</span>
            <span>모임 &nbsp;&nbsp;</span>
            <span>커뮤니티 &nbsp;&nbsp; </span>
            <span>쇼핑 &nbsp;&nbsp;</span>
            <span>고객센터 &nbsp;&nbsp;</span>
            <img alt=""/>
            <img src="../assets/user.png"/>
        </div>
    )
}

const Header = () => {
    return (
        <div style={outerStyle}>
            <Item/>
        </div>
    );
};
export default Header;