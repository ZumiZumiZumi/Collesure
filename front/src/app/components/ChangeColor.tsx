"use client";
import { usePathname } from 'next/navigation';


  const checkcolor = () => {
    let nowborder = "";
    let nowtext = "";
    const pathname = usePathname();
    switch (pathname) {
      case "/top":
        nowborder = "borderorange";
        nowtext = "textorange";
        break;
      case "/search":
        nowborder = "borderblue";
        nowtext = "textblue";
        break;
      case "/post":
        nowborder = "bordergreen";
        nowtext = "textgreen";
        break;
      case "/mypage":
        nowborder = "borderpink";
        nowtext = "textpink";
        break;
      case "/tresure":
        nowborder = "borderyellow"
        nowtext = "textyellow"
    }

    return {nowborder,nowtext};
}
export default checkcolor;