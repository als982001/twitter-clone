import styles from "./LeftSidebar.module.css";
import {
  AiOutlineTwitter,
  AiTwotoneHome,
  AiOutlineMail,
  AiOutlineCheckCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiViewList, CiCircleMore } from "react-icons/ci";
import { BsBell, BsBookmark, BsThreeDots } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import Menu from "./Sidebar/Menu";
import Link from "next/link";

export default function LeftSidebar() {
  return (
    <nav id={styles.sidebar}>
      <ul className={styles.sidebar__menus}>
        <li className={styles.sidebar__menu}>
          <section className={styles.sidebar__twitter__logo__wrapper}>
            <Link href="/">
              <AiOutlineTwitter className={styles.sidebar__twitter__logo} />
            </Link>
          </section>
        </li>
        <Menu path="/">
          <AiTwotoneHome className={styles.sidebar__menu__logo} path="/" />
          <h5>홈</h5>
        </Menu>
        <Menu path="/explore">
          <FaMagnifyingGlass className={styles.sidebar__menu__logo} />
          <h5>탐색하기</h5>
        </Menu>
        <Menu path="/notifications">
          <BsBell className={styles.sidebar__menu__logo} />
          <h5>알림</h5>
        </Menu>
        <Menu path="/messages">
          <AiOutlineMail className={styles.sidebar__menu__logo} />
          <h5>쪽지</h5>
        </Menu>
        <Menu path="/lists">
          <CiViewList className={styles.sidebar__menu__logo} />
          <h5>리스트</h5>
        </Menu>
        <Menu path="/bookmarks">
          <BsBookmark className={styles.sidebar__menu__logo} />
          <h5>북마크</h5>
        </Menu>
        <Menu path="/verified-choose">
          <AiOutlineCheckCircle className={styles.sidebar__menu__logo} />
          <h5>인증됨</h5>
        </Menu>
        <Menu path="/username">
          <AiOutlineUser className={styles.sidebar__menu__logo} />
          <h5>프로필</h5>
        </Menu>
        <Menu path="/more">
          <CiCircleMore className={styles.sidebar__menu__logo} />
          <h5>더 보기</h5>
        </Menu>
        <button className={styles.sidebar__twit__button}>트윗하기</button>
      </ul>
      <section className={styles.sidebar__user}>
        <BiSolidUserCircle className={styles.sidebar__user__icon} />
        <section className={styles.sidebar__user__texts}>
          <h6
            className={styles.sidebar__user__text}
            id={styles.sidebar__user__nickname}
          >
            유저닉네임
          </h6>
          <h6
            className={styles.sidebar__user__text}
            id={styles.sidebar__user__id}
          >
            유저아이디
          </h6>
        </section>
        <BsThreeDots className={styles.sidebar__user__etc} />
      </section>
    </nav>
  );
}