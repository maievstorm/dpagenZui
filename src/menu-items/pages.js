// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Dịch Vụ',
    caption: '',
    type: 'group',
    children: [
        {
            id: 'dataplatform',
            title: 'Nền tảng',
            type: 'collapse',
            icon: icons.Data,

            children: [
                {
                    id: 'objectstorage',
                    title: 'Lưu trữ đám mây',
                    type: 'item',
                   // url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'datawarehouse',
                    title: 'Kho dữ liệu',
                    type: 'item',
                  //  url: '/pages/register/register3',
                    target: true
                }
                ,
                {
                    id: 'bigdata',
                    title: 'Dữ liệu lớn',
                    type: 'item',
                   // url: '/pages/register/register3',
                    target: true
                }
            ]
        }, 
        {
            id: 'dataingest',
            title: 'Tích hợp',
            type: 'collapse',
            icon: icons.Data,

            children: [
                {
                    id: 'dataingest',
                    title: 'Lưu chuyển dữ liêu',
                    type: 'item',
                   // url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'datastreaming',
                    title: 'Truyền tải trực tiếp',
                    type: 'item',
                  //  url: '/pages/register/register3',
                    target: true
                }
                ,
                {
                    id: 'databackup',
                    title: 'Sao lưu',
                    type: 'item',
                   // url: '/pages/register/register3',
                    target: true
                }
            ]
        }, 
        {
            id: 'dataservice',
            title: 'Dịch vụ dữ liệu',
            type: 'collapse',
            icon: icons.Data,

            children: [
                {
                    id: 'dataai',
                    title: 'Trí tuệ nhân tạo',
                    type: 'item',
                   // url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'finnacereport',
                    title: 'Xây dựng BCTC',
                    type: 'item',
                  //  url: '/pages/register/register3',
                    target: true
                }
                ,
                {
                    id: 'datavisualize',
                    title: 'Trực quan dữ liệu',
                    type: 'item',
                   // url: '/pages/register/register3',
                    target: true
                }
            ]
        }
    ]
};

export default pages;
