import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";
import roadmapSideBar2 from "./sidebars/roadmapSideBar2";
// @ts-ignore
export default {
    "/课程作业/": roadmapSideBar,
    "/资源下载/": roadmapSideBar2,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
