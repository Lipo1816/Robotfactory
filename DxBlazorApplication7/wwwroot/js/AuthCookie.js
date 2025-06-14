﻿window.CookieWriter = {
    Write: function (cookie_name, cookie_value, date_time_str) {
        var expires = "";

        // set expiry if date is set
        if (date_time_str) {
            var date = new Date(date_time_str);
            expires = "; expires=" + date.toGMTString();
        }

        //set value
        document.cookie = cookie_name + "=" + cookie_value + expires + "; path=/";
    }
}
window.CookieReader = {
    Read: function (cookie_name) {
        var name = cookie_name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}
window.CookieRemover = {
    Delete: function (cookie_name) {
        document.cookie = cookie_name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
}