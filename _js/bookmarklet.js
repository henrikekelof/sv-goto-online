
(function () {

    'use strict';

    window.alertify.prompt('Prompt Title', 'Prompt Message', 'Prompt Value',
        function (evt, value) {
            window.alertify.success('You entered: ' + value);
        },
        function () {
            window.alertify.error('Cancel');
        });


    // var gotoOnline = function (swal) {
    //
    //         // Pasted URL
    //         // https://somedomain.se/edit/4.123456789012345678901234
    //         // Goto:
    //         // https://somedomain.se/4.123456789012345678901234.html
    //
    //         swal.fire({
    //             title            : 'Goto online URL',
    //             input            : 'text',
    //             inputPlaceholder : 'Paste offline URL',
    //             inputAttributes  : {
    //                 autocapitalize: 'off',
    //                 autocorrect   : 'off'
    //             },
    //             confirmButtonText: 'Goto',
    //             cancelButtonText : '&lt;devmode&gt;',
    //             showCancelButton : true,
    //             reverseButtons   : true
    //         }).then(function (res) {
    //
    //             var url   = swal.getInput().value,
    //                 parts = url && url.split('/'),
    //                 mode  = (res && res.dismiss === 'cancel') ? 'devmode' : '';
    //
    //             if (parts.length >= 5) {
    //                 parts = parts.slice(0, 5);
    //                 if (parts[ 3 ] === 'edit' && parts[ 4 ].charAt(1) === '.') {
    //                     parts.splice(3, 1);
    //                     window.location.href = parts.join('/') +
    //                                            '.html' +
    //                                            (mode === 'devmode' ? '?devmode=true' : '');
    //                 }
    //             } else {
    //                 swal.close();
    //             }
    //
    //         });
    //
    //     },
    //
    //     queue      = function (n) {
    //     console.log(window.Swal);
    //         if (window.Swal) {
    //             gotoOnline(window.Swal);
    //         } else if (n < 300) {
    //             setTimeout(function () {
    //                 queue(n + 1);
    //             }, 10);
    //         }
    //     };
    // console.log(window.Swal);
    // queue(0);

}());


