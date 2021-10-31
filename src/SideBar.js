import { FaAlignJustify } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
function sideBar() {

    return (
        <div>
            <div className="btn"> <FaAlignJustify className="iconDesign"></FaAlignJustify> </div>
            <nav className="sidebar">
                <div className="text"> Me Anoto! </div>
                <center>
                    <ul className="main_side">
                        <li className="active"><a href="#">Dashboard</a></li>
                        <li> <a href="#" id="1">Pages <FaCaretDown></FaCaretDown> </a>
                            <ul className="item-show-1">
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Our Team</a></li>
                            </ul>
                        </li>
                        <li> <a href="#" id="2">Services <FaCaretDown ></FaCaretDown> </a>
                            <ul className="item-show-2">
                                <li><a href="#">App Design</a></li>
                                <li><a href="#">Web Design</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Users</a></li>
                        <li><a href="#">Message</a></li>
                        <li><a href="#">Bookmark</a></li>
                        <li><a href="#">Files</a></li>
                    </ul>
                </center>
            </nav>
            <div className="content">
                <div className="header"> Main content goes here </div>
            </div>
        </div>
    )
}
export default sideBar;