import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            // This is a list of pages
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    // {
                    //     label: 'Order Management',
                    //     icon: 'pi pi-dollar',
                    //     routerLink: ['/order'],
                    //     items: [
                    //         {
                    //             label: 'Orders',
                    //             icon: 'pi pi-check-circle',
                    //             routerLink: ['/configure'],
                    //         },
                    //         {
                    //             label: 'Tables',
                    //             icon: 'pi pi-table',
                    //             routerLink: ['/tables'],
                    //         }
                    //     ]
                    // },
                    // {
                    //     label: 'Menu Management',
                    //     icon: 'pi pi-list',
                    //     routerLink: ['/menu'],
                    //     items: [
                    //         {
                    //             label: 'Recipe',
                    //             icon: 'pi pi-cog',
                    //             routerLink: ['/configure'],
                    //         },
                    //         {
                    //             label: 'Modifiers',
                    //             icon: 'pi pi-pencil',
                    //             routerLink: ['/modify'],
                    //         }
                    //     ]
                    // },
                    // {
                    //     label: 'Inventory Management',
                    //     icon: 'pi pi-fw pi-globe',
                    //     routerLink: ['/'],
                    //     items: [
                    //         {
                    //             label: 'Stock Tracking',
                    //             icon: 'pi pi-cog',
                    //             routerLink: ['/configure'],
                    //         },
                    //         {
                    //             label: 'Ingredients',
                    //             icon: 'pi pi-cog',
                    //             routerLink: ['/configure'],
                    //         },
                    //     ]
                    // },
                    {
                        label: 'Catalog',
                        icon: 'pi pi-book',
                        items: [
                            {
                                label: 'Department',
                                icon: 'pi',
                            },
                            {
                                label: 'Category',
                                icon: 'pi',
                            },
                            {
                                label: 'Sub Category',
                                icon: 'pi',
                            },
                            {
                                label: 'Manufacturer',
                                icon: 'pi',
                            },
                        ]
                    },
                    {
                        label: 'Supplier',
                        icon: 'pi pi-truck',
                        routerLink: ['/pages/supplier']
                    },
                    {
                        label: 'Product',
                        icon: 'pi pi-qrcode',
                        routerLink: ['/pages/product']
                    },
                    {
                        label: 'Service',
                        icon: 'pi pi-shop',
                    },
                    {
                        label: 'Advance',
                        icon: 'pi pi-sitemap',
                        items: [
                            {
                                label: 'Alerts',
                                icon: ''
                            },
                            {
                                label: 'Hot Deals',
                                icon: ''
                            },
                            {
                                label: 'Toppings',
                                icon: ''
                            }
                        ]
                    },
                    {
                        label: 'Customers',
                        icon: 'pi pi-users',
                    },
                    {
                        label: 'Sales',
                        icon: 'pi pi-cart-minus',
                    },
                    {
                        label: 'Table Management',
                        icon: 'pi pi-desktop',
                        items: [
                            {
                                label: 'Floor',
                                icon: 'pi pi-spinner-dotted',
                            },
                            {
                                label: 'Table',
                                icon: 'pi pi-spinner-dotted',
                            },
                        ]
                    },
                    {
                        label: 'Payout',
                        icon: 'pi pi-credit-card'
                    },
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        items:[
                            {
                                label: 'General Settings',
                                icon: 'pi',
                            },
                            {
                                label: 'Store Settings',
                                icon: 'pi',
                            },
                            {
                                label: 'User',
                                icon: 'pi',
                            },
                            {
                                label: 'Employee',
                                icon: 'pi',
                            },
                        ]
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Reports',
                        icon: 'pi pi-fw pi-globe',
                    },
                  
                    
                    // {
                    //     label: 'Crud',
                    //     icon: 'pi pi-fw pi-pencil',
                    //     routerLink: ['/pages/crud']
                    // },
                    // {
                    //     label: 'Timeline',
                    //     icon: 'pi pi-fw pi-calendar',
                    //     routerLink: ['/pages/timeline']
                    // },
                    // {
                    //     label: 'Not Found',
                    //     icon: 'pi pi-fw pi-exclamation-circle',
                    //     routerLink: ['/notfound']
                    // },
                    // {
                    //     label: 'Empty',
                    //     icon: 'pi pi-fw pi-circle-off',
                    //     routerLink: ['/pages/empty']
                    // },
                ]
            },
            // {
            //     label: 'UI Components',
            //     items: [
            //         { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
            //         { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
            //         { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
            //         { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
            //         { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
            //         { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
            //         { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
            //         { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
            //         { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
            //         { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
            //         { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
            //         { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
            //         { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
            //         { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
            //         { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
            //         { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
            //     ]
            // },
            // {
            //     label: 'Prime Blocks',
            //     items: [
            //         { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
            //         { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
            //     ]
            // },
            // {
            //     label: 'Utilities',
            //     items: [
            //         { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
            //         { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
            //     ]
            // },
           
            // {
            //     label: 'Hierarchy',
            //     items: [
            //         {
            //             label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
            //                     ]
            //                 },
            //             ]
            //         },
            //         {
            //             label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
            //                     ]
            //                 },
            //             ]
            //         }
            //     ]
            // },
           
        ];
    }
}
