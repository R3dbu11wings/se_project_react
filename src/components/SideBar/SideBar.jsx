import { useContext } from "react";
import "./SideBar.css";
import avatar from "../../assets/avatar.png";
import CurrentUserContext from "../../utils/contexts/currentUserContext";

export default function SideBar({ onLogout }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <p className="sidebar__user-name">{currentUser?.name}</p>
        <img
          src={currentUser?.avatar || avatar}
          alt="user avatar"
          className="sidebar__avatar"
        />
      </div>
      <button onClick={onLogout} className="sidebar__logout-btn">
        Log out
      </button>
    </aside>
  );
}
