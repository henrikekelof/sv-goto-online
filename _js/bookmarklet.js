(function () {

    'use strict';

    function goto(url, devmode) {
        var parts = url && url.split('/');
        if (parts.length >= 5) {
            parts = parts.slice(0, 5);
            if (parts[ 3 ] === 'edit' && parts[ 4 ].charAt(1) === '.') {
                parts.splice(3, 1);
                window.location.href = parts.join('/') +
                                       '.html' +
                                       (devmode ? '?devmode=true' : '');
            }
        }
    }

    window.alertify.prompt('Goto online URL', 'Paste offline URL', '',
        function (e, url) {
            goto(url, false);
        },
        function () {
            goto(this.elements.body.querySelector('input').value, true);
        }).set({
        labels    : { ok: 'Goto', cancel: '&lt;devmode&gt;' },
        transition: 'zoom',
        message   : 'Paste offline URL'
    });

}());


