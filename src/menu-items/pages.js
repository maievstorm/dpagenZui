// assets
import { IconKey,IconTypography,IconBrandCodepen,IconDatabaseImport,IconDeviceAnalytics,IconCloud } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconTypography,
    IconBrandCodepen,
    IconDatabaseImport,
    IconDeviceAnalytics,
    IconCloud
    
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
            icon: icons.IconCloud,

            children: [
                {
                    id: 'objectstorage',
                    title: 'Lưu trữ đám mây',
                    type: 'item',
                    url: '/ojectstorage',
                    breadcrumbs: true
                },
                {
                    id: 'datawarehouse',
                    title: 'Kho dữ liệu',
                    type: 'item',
                    url: '/datawh',
                    breadcrumbs: true
                }
                ,
                {
                    id: 'bigdata',
                    title: 'Dữ liệu lớn',
                    type: 'item',
                    url: '/bigdata',
                    breadcrumbs: true
                }
            ]
        }, 
        {
            id: 'dataingest',
            title: 'Tích hợp',
            type: 'collapse',
            icon: icons.IconDatabaseImport,

            children: [
                {
                    id: 'dataingest',
                    title: 'Lưu chuyển dữ liệu',
                    type: 'item',
                    url: '/dataingest',
                    breadcrumbs: true
                },
                {
                    id: 'datastreaming',
                    title: 'Truyền tải trực tiếp',
                    type: 'item',
                    url: '/datastream',
                    breadcrumbs: true
                }
                ,
                {
                    id: 'databackup',
                    title: 'Sao lưu',
                    type: 'item',
                    url: '/databackup',
                    breadcrumbs: true
                }
            ]
        }, 
        {
            id: 'dataservice',
            title: 'Dịch vụ dữ liệu',
            type: 'collapse',
            icon: icons.IconDeviceAnalytics,

            children: [
                {
                    id: 'dataai',
                    title: 'Trí tuệ nhân tạo',
                    type: 'item',
                    url: '/dataai',
                    breadcrumbs: true
                },
                {
                    id: 'finnacereport',
                    title: 'Xây dựng BCTC',
                    type: 'item',
                    url: '/financereport',
                    breadcrumbs: true
                }
                ,
                {
                    id: 'datavisualize',
                    title: 'Trực quan dữ liệu',
                    type: 'item',
                    url: '/datavisual',
                    breadcrumbs: true
                }
            ]
        }
    ]
};

export default pages;
