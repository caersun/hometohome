const Col = (props) => {
    const size = "col " + props.size;
    return <div className={size}>{props.children}</div>
};

export default Col;