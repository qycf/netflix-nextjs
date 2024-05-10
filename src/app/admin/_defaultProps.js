

import {
    ChromeFilled,
    DatabaseOutlined,
    UserOutlined,
    FundViewOutlined,
    VideoCameraAddOutlined,
    UsergroupAddOutlined,
    ProductOutlined,
    ShoppingCartOutlined,
    DollarOutlined

} from '@ant-design/icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    route: {
        path: '/',
        routes: [
            // {
            //     path: '/welcome',
            //     name: '欢迎',
            //     icon: <SmileFilled />,
            //     component: './Welcome',
            // },
            {
                path: '/admin/vod',
                name: '视频',
                icon: "https://img.icons8.com/dusk/64/video.png"
                ,
                access: 'canAdmin',
                component: './Admin',
                routes: [
                    {
                        path: '/admin/vod/manage',
                        name: '视频数据',
                        icon: <FundViewOutlined />,
                        component: './vod/page.js',
                    },
                    {
                        path: '/admin/vod/edit',
                        name: '视频编辑',
                        icon: <VideoCameraAddOutlined />,
                    },
                    {
                        path: '/admin/vod/type',
                        name: '视频分类',
                        icon: <ProductOutlined />,
                    },
                    {
                        path: '/admin/vod/collection',
                        name: '采集列表',
                        icon: <DatabaseOutlined />,
                    },
                ],
            },
            {
                path: '/admin/user',
                name: '用户',
                icon: 'https://img.icons8.com/color/48/user.png',
                access: 'canAdmin',
                routes: [
                    {
                        path: '/admin/user/manage',
                        name: '用户列表',
                        icon: <UserOutlined />,
                        component: './vod/page.js',
                    },
                    {
                        path: '/admin/user/group',
                        name: '用户组',
                        icon: <UsergroupAddOutlined />,
                        component: './Welcome',
                    },
                ],
            },

            {
                path: '/admin/plans',
                name: '订阅计划',
                icon: <ShoppingCartOutlined />,
            },
            {
                path: '/admin/trade',
                name: '订单列表',
                icon: <DollarOutlined />,
            },
            {
                path: '/admin/settings',
                name: '设置',
                icon: 'https://img.icons8.com/ios-filled/50/000000/settings.png',
                access: 'canAdmin',
                component: './Welcome',
            },
            // {
            //     path: '/',
            //     name: '回到首页',
            //     icon: <ChromeFilled />,
            // },
        ],
    },
    location: {
        pathname: '/',
    },
    appList: [
        {
            icon: 'https://www.netflix.com/favicon.ico',
            title: 'Netflix',
            desc: '无限量的电影、电视节目，以及更多精彩内容',
            url: 'https://www.netflix.com/',
            target: '_blank',
        },
        {
            icon: 'https://www.douban.com/favicon.ico',
            title: '豆瓣电影',
            desc: '提供权威电影评分，忠实影迷的电影评论',
            url: 'https://movie.douban.com/',
            target: '_blank',
        },
        {
            icon: 'https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/favicon_desktop_32x32._CB1582158068_.png',
            title: 'IMDB',
            desc: '全世界最知名的电影评分网站之一',
            url: 'https://www.imdb.com/',
            target: '_blank',
        },
        {
            icon: 'https://pic.ziyuan.wang/user/guest/2024/03/favicon_9be62e555ae2e.png',
            title: 'show your face',
            desc: '站长的主页',
            url: 'https://qu2u.com/',
            target: '_blank',
        },
    ],
};
