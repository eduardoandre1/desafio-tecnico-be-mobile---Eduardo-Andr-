import Logo from '../../assets/LogoBe.svg';
import { HeadStyle } from './style.Header';
export default function Header() {
  return (
    <>
      <HeadStyle>
        <img src={Logo} alt="" />
      </HeadStyle>
    </>
  );
}
