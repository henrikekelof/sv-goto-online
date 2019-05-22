(function (win) {
    // win, doc, undefined
    'use strict';

    var result = window.prompt('Paste offline URL'),
        parts;

    // Pasted URL
    // https://somedomain.se/edit/4.123456789012345678901234
    // Go to:
    // https://somedomain.se/4.123456789012345678901234.html

    if (result) {
        parts = result.split('/');
        if (parts.length >= 5) {
            parts = parts.slice(0, 5);
            if (parts[ 3 ] === 'edit' && parts[ 4 ].charAt(1) === '.') {
                parts.splice(3, 1);
                win.location.href = parts.join('/') + '.html';
            }
        }
    }

}(window));
