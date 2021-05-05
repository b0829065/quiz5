const styleArgument = { fontSize: '100px', color:'blue'};

// NOTT ReactDOM.render(    <h1 style = { styleArgument } > Hello CGU! </h1>   document.getElementById('root'));
const cgu=()=>{
    return <h1 style={styleArgument}>Hello CGU</h1>;
}
export default cgu;
// const x={fontSize:'100px',color:'red'};
// const v=()=>{
//     return <h1 style={x}>Hello CGu</h1>;
// }
// export default v;