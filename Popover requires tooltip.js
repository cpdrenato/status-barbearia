
<html lang="en">
    
Renato
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
<head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <title>ERRO</title>
        <!-- Bootstrap Stylesheet -->
        <link rel="stylesheet" href="Resources/bootstrap/css/bootstrap.min.css" media="screen">

        <!-- Main Layout Stylesheet -->
        <link rel="stylesheet" href="Resources/css/error.css" media="screen">
    </head>

    <body>

        <div id="error-wrap">

            <div id="error-digits">
                <span class="animated">0</span>
                <span class="animated delay300">0</span>
                <span class="animated delay600">7</span>
            </div>

            <h1>Página não encontrada</h1>
            <a href="index.html">Voltar a página principal</a>

        </div>

        <!-- Core Scripts -->
        <script src="Resources/js/libs/jquery-1.8.2.min.js"></script>
        <script src="Resources/js/libs/jquery.placeholder.min.js"></script>

        <script>
            function support() {
                var vendorPrefixes = "O Ms Webkit Moz".split(' '),
                        i = vendorPrefixes.length, support = true,
                        divStyle = document.createElement('div').style;

                while (i--) {
                    for (var a = 0, support = true; a < arguments.length; a++) {
                        support = (vendorPrefixes[ i ] + arguments[ a ] in divStyle);
                    }

                    if (support)
                        return true;
                }

                return false;
            }

            $(document).ready(function() {
                support('Animation') && $('#error-digits > span').each(function(i, span) {
                    $(span).addClass('bounceInDown');
                });
            });

        </script>

    </body>


Renato
</html>
