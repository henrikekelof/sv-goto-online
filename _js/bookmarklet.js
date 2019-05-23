/* global swal */

(function (win) {

    'use strict';

    // Pasted URL
    // https://somedomain.se/edit/4.123456789012345678901234
    // Goto:
    // https://somedomain.se/4.123456789012345678901234.html

    swal({
        title  : 'Goto online URL',
        text   : 'Paste offline URL:',
        content: 'input'
    }).then(function (result) {
        var parts = result && result.split('/');
        if (parts.length >= 5) {
            parts = parts.slice(0, 5);
            if (parts[ 3 ] === 'edit' && parts[ 4 ].charAt(1) === '.') {
                parts.splice(3, 1);
                win.location.href = parts.join('/') + '.html';
            }
        }
    });

}(window));
