import style from "./Item.module.css"
let Item = ({foodItem}) => {
    // lets destructuring Props
    // let {foodItem} = props;
    console.log(style.kgItem)
    return(
        <>
        <li className={` ${style['kg-item']} list-group-item kg-item`}>{foodItem}</li>
        </>
    );
}     
export default Item;