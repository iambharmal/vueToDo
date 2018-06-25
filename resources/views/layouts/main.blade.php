<html>
<head>
    <meta charset="utf-8">
    <title>To Do List</title>
    <link rel="stylesheet" type="text/css" href="css/app.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- <link rel="stylesheet" type="text/css" href="{{ asset('css/semantic.min.css') }}"> -->

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script>
        window.Laravel = { csrfToken: '{{ csrf_token() }}' }
    </script>
</head>
<body>

    <div id='app'>
    <navbar-component></navbar-component>
        @yield('content')
    </div>

    <script src=" {{ asset('js/app.js') }}"></script>
    <!-- <script src="{{ asset('js/semantic.min.js') }}"></script> -->
</body>
</html>