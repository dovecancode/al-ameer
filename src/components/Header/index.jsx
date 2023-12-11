import { topMost } from '../../Data';
import '../Header/style.css';

function Header() {
  return (
    <>
      <section className="topMostContainer">
        <h1 className="topMostLogo">
          Al-<span className="secondWord">Ameer</span>
        </h1>
        <div className="topMostRightContainer">
          {topMost.map((props) => {
            const { id, icon, text, info } = props;
            return (
              <div key={id} className="topMostRightContents">
                <p className="topMostIcon">{icon}</p>
                <div className="topMostRightContent">
                  <p className="topMostText">{text}</p>
                  <p className="topMostInfo">{info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default Header;
