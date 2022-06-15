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
                    url: '/ojectstorage',
                    breadcrumbs: false
                },
                {
                    id: 'datawarehouse',
                    title: 'Kho dữ liệu',
                    type: 'item',
                    url: '/datawh',
                    breadcrumbs: false
                }
                ,
                {
                    id: 'bigdata',
                    title: 'Dữ liệu lớn',
                    type: 'item',
                    url: '/bigdata',
                    breadcrumbs: false
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
                    url: '/dataingest',
                    breadcrumbs: false
                },
                {
                    id: 'datastreaming',
                    title: 'Truyền tải trực tiếp',
                    type: 'item',
                    url: '/datastream',
                    breadcrumbs: false
                }
                ,
                {
                    id: 'databackup',
                    title: 'Sao lưu',
                    type: 'item',
                    url: '/databackup',
                    breadcrumbs: false
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
                    url: '/dataai',
                    breadcrumbs: false
                },
                {
                    id: 'finnacereport',
                    title: 'Xây dựng BCTC',
                    type: 'item',
                    url: '/financereport',
                    breadcrumbs: false
                }
                ,
                {
                    id: 'datavisualize',
                    title: 'Trực quan dữ liệu',
                    type: 'item',
                    url: '/datavisual',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default pages;
