<!DOCTYPE html>
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ pageData.metaTitlePrepared|default('') }}</title>
    <meta name="description" content="{{ pageData.metaDescriptionPrepared|default('') }}">
    <meta name="keywords" content="{{ pageData.metaKeywords|default('') }}">
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico') }}"/>
    <link rel="stylesheet" href="{{ asset('css/main.css'|asset_version) }}"/>
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-123736444-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-123736444-1');
    </script>
    <script type="text/javascript">
        (function (d, w, c){
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter37274410 = new Ya.Metrika({
                        id:37274410,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true,
                        trackHash:true
                    });
                } catch(e) { }
            });
            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";
            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }})(document, window, "yandex_metrika_callbacks");
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/37274410" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <script>
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1652839765033836');
        fbq('track', "PageView");</script>
    <noscript><img height="1" width="1" style="display:none"
                   src="https://www.facebook.com/tr?id=1652839765033836&ev=PageView&noscript=1"
        /></noscript>
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function(){setTimeout(function(){(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=o6BxOlimQrMI/zujFXHCaDxLQYwVVBmxa2eKaFXuQ5u/*aOAMjv38JA9yBKZDnFR59B89oYwjjnl*cPypSoXSJ/qzuaqkTDCbH1wTTSBjqwUtpFePDITHVqWCijge2A6CLvkeQu936yurxJTrc2rwId5Q0fNUcxkHMBWfzQJnG0-';
        },1e4)});
    </script>
</head>
{% set body_id = 'body-' %}
{% if pageData.slug is defined %}
{% set body_id = body_id ~ pageData.slug %}
{% endif %}
<body id="{{ body_id }}">
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
    your browser</a> to improve your experience.</p>
<![endif]-->
{# HEADER #}
{% block header %}
{% include 'components/header.html.twig' %}
{% endblock %}
{% block content %}
{% if pageData.text is defined and pageData.text is not empty %}
<div class="gray-block main-text">
    <div class="page-text container">
        {{ pageData.text|default('')|raw }}
    </div>
</div>
<div class="white-block"></div>
{% include 'components/wait_for_you_block.html.twig' %}
{% endif %}
{% endblock %}
{% block footer %}
{% include 'components/footer.html.twig' %}
{% endblock %}
{% include 'components/city_change_block.html.twig' %}
{% include 'components/order_form.html.twig' %}
<script>
    document.addEventListener('DOMContentLoaded', function(){
        setTimeout(function(){
            $("head").append("<link href='https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic,300,300italic,900&subset=latin,cyrillic-ext,cyrillic' rel='stylesheet' type='text/css'>");
            $("head").append("<link href='https://fonts.googleapis.com/css?family=Kurale' rel='stylesheet' type='text/css'>");
        }, 0);
    });
</script>
{% block scripts %}
<script src="{{ asset('js/vendor.js') }}"></script>
{% if app.request.locale != 'en' %}
<script src="{{ asset('js/translations/messages_'~app.request.locale~'.js') }}"></script>
{% endif %}
<script src="{{ asset('js/main.js') }}"></script>
{% endblock %}
</body>
</html>