import style from './AppName.module.css';

function AppName() {
    return (
        <>
          <div className={`text-center container ${style['h1']}`}>
            <h1>ToDo React App</h1>
          </div>
        </>
    );
}
export default AppName;