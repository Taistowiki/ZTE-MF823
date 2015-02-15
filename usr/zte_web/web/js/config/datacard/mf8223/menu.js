define(function() {
    var needLogin = true;
    var menu = [
        // level 1 menu
        {
            hash:'#login',
            path:'login',
            level:'1',
            requireLogin:false,
            checkSIMStatus:false
        },
        {
            hash:'#home',
            path:'home',
            level:'1',
            requireLogin:needLogin,
            checkSIMStatus:true
        },
                {
            hash:'#connection',
            path:'network/dial_setting',
            level:'1',
            requireLogin:needLogin,
            checkSIMStatus:true
        },
        {
            hash:'#sms',
            path:'sms/smslist',
            level:'1',
            requireLogin:needLogin,
            checkSIMStatus:false
        },
        {
            hash:'#setting',
            path:'adm/pin',
            level:'1',
            requireLogin:needLogin,
            checkSIMStatus:true
        },
                {
            hash:'#statistics',
            path:'status/traffic_statistics',
            level:'1',
            requireLogin:needLogin,
            checkSIMStatus:false
        },
        {
            hash:'#status',
            path:'status/device_info',
            level:'1',
            requireLogin:needLogin,
            checkSIMStatus:true
        },
                // level 2 menu
                {
            hash:'#dial_setting',
            path:'network/dial_setting',
            level:'2',
            parent:'#connection',
            requireLogin:needLogin,
            checkSIMStatus:true
        },
                {
            hash:'#apn_setting',
            path:'network/apn_setting',
            level:'2',
            parent:'#connection',
            requireLogin:needLogin,
            checkSIMStatus:true
        },
        {
            hash:'#net_select',
            path:'network/net_select',
            level:'2',
            parent:'#connection',
            requireLogin:needLogin,
            checkSIMStatus:true
        },
                {
            hash:'#lock_band',
            path:'network/lock_band',
            level:'2',
            parent:'#connection',
            requireLogin:needLogin,
            checkSIMStatus:false
        },
        {
            hash:'#smslist',
            path:'sms/smslist',
            level:'2',
            parent:'#sms',
            requireLogin:needLogin,
            checkSIMStatus:false
        },
        {
            hash:'#sms_setting',
            path:'sms/sms_setting',
            level:'2',
            parent:'#sms',
            requireLogin:needLogin,
            checkSIMStatus:true
        },
                {
            hash:'#pin_management',
            path:'adm/pin',
            level:'2',
            parent:'#setting',
            requireLogin:needLogin,
            checkSIMStatus:true
        },

        {
         hash:'#router_setting',
         path:'adm/lan',
         level:'3',
         parent:'#setting',
         requireLogin:false,
        checkSIMStatus:false
        },

       {
       hash:'#port_forward',
        path:'firewall/port_forward',
         level:'3',
          parent:'#setting',
           requireLogin:false,
            checkSIMStatus:false
             },

             {
             hash:'#dmz_setting',
              path:'firewall/dmz_setting',
               level:'3',
                parent:'#setting',
                 requireLogin:false,
                  checkSIMStatus:false
                   },


                  {
                  hash:'#port_filter',
                   path:'firewall/port_filter',
                    level:'3',
                     parent:'#setting',
                      requireLogin:false,
                       checkSIMStatus:false
                        },

         {
                  hash:'#port_map',
                   path:'firewall/port_map',
                    level:'3',
                     parent:'#setting',
                      requireLogin:false,
                       checkSIMStatus:false
                        },


         {
                  hash:'#system_security',
                   path:'firewall/system_security',
                    level:'3',
                     parent:'#setting',
                      requireLogin:false,
                       checkSIMStatus:false
                        },

          {
         hash:'#upnp_settings',
          path:'firewall/upnp_setting',
           level:'3',
            parent:'#setting',
             requireLogin:false,
              checkSIMStatus:false
               },
           {
         hash:'#password',
            path:'adm/password',
               level:'1',
                  requireLogin:needLogin,
                     checkSIMStatus:true
                     },
                     {
             hash:'#fastboot',
                 path:'adm/fastboot',
                    level:'1',
                        requireLogin:needLogin,
                           checkSIMStatus:true
                             },

         {
        hash:'#dlna',
           path:'adm/dlna',
              level:'1',
                 requireLogin:needLogin,
                    checkSIMStatus:true
                    },

         {
                  hash:'#restore',
                     path:'adm/restore',
                        level:'1',
                           requireLogin:needLogin,
                              checkSIMStatus:true
                                },

        {
                    hash:'#phonebook',
                path:'phonebook/phonebook',
                 level:'1',
               requireLogin:false,
             checkSIMStatus:false
              },






        {
            hash:'#update_management',
            path:'update/update_info',
            level:'2',
            parent:'#setting',
            requireLogin:needLogin
        },
                {
                        hash:'#traffic_statistics',
                        path:'status/traffic_statistics',
                        level:'2',
                        parent:'#statistics',
                        requireLogin:needLogin,
            checkSIMStatus:false
                },
        {
            hash:'#device_info',
            path:'status/device_info',
            level:'2',
            parent:'#status',
            requireLogin:needLogin,
            checkSIMStatus:true
        },
        {
            hash:'#network_info',
            path:'status/network_status',
            level:'2',
            parent:'#status',
            requireLogin:needLogin,
            checkSIMStatus:false
        }
    ];

    return menu;
});
