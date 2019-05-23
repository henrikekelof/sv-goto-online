/* global swal */

(function () {

    'use strict';

    var gotoOnline = function () {

            // Pasted URL
            // https://somedomain.se/edit/4.123456789012345678901234
            // Goto:
            // https://somedomain.se/4.123456789012345678901234.html

            var input = document.createElement('input');

            function gotoOnline(mode) {
                var confirm = swal.getState().actions.confirm,
                    url     = confirm ? confirm.value : false,
                    parts   = url && url.split('/');
                if (parts.length >= 5) {
                    parts = parts.slice(0, 5);
                    if (parts[ 3 ] === 'edit' && parts[ 4 ].charAt(1) === '.') {
                        parts.splice(3, 1);
                        window.location.href = parts.join('/') +
                                               '.html' +
                                               (mode === 'devmode' ? '?devmode=true' : '');
                    }
                } else {
                    swal.close();
                }
            }

            function handleKeyup(e) {
                if (e.keyCode === 13) {
                    gotoOnline();
                } else {
                    swal.setActionValue(this.value);
                }
            }

            input.setAttribute('placeholder', 'Paste offline URL');
            input.setAttribute('class', 'swal-content__input');
            input.setAttribute('type', 'url');

            swal({
                title  : 'Goto online URL',
                content: input,
                buttons: {
                    devmode: {
                        text : '<devmode>',
                        value: 'devmode'
                    },
                    goto   : {
                        text : 'Goto',
                        value: 'plain'
                    }
                }
            }).then(gotoOnline);

            input.addEventListener('keyup', handleKeyup);
            input.focus();

            document
                .querySelector('.swal-button--devmode')
                .setAttribute('style', 'background:#efefef;color:#555');

        },

        queue      = function (n) {
            if (swal) {
                gotoOnline();
            } else if (n < 300) {
                setTimeout(function () {
                    queue(n + 1);
                }, 10);
            }
        };

    queue(0);

}());


