# jquery.madlib

A simple, lightweight jQuery plugin for embedding a mad lib on a webpage.


## HTML

Simply write a mad lib using a simple markup language. See the example below.

This gets parsed and converted to a form with all the necessary words.

You can use html and css to style the final presentation of the output.

```
<div class="madlib">
This is {{adjective}}.<br>
<br>
I want a <i>{{noun}}</i> for christmas. Programming is {{adjective}}.
<br>
I got so <b>{{adjective}}</b>, I started to {{verb}}.
</div>
```



## Javascript

Initialize the mad lib via the selector. In this case, I am using a `.madlib` class.

```
$(document).ready(function() {
  $('.madlib').madlib();
});
```


## CSS

Below is some example css to style the form. There's a lot of flexibility here.

```
.madlib-form > div {
   display:flex;
   justify-content:flex-start;;
}
.madlib-form label, input {
   width: 120px;
}
.madlib-form label {
   text-transform: capitalize;
}
.madlib-startover {
   display:block;
   margin-top:20px;
}
```


## Full Example


```
<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-1.8.3.js"></script>
  <script src="jquery-madlib/jquery.madlib.js"></script>
  <script>
  $(document).ready(function() {
    $('.madlib').madlib();
  });
  </script>
  <style>
  .madlib-form > div {
     display:flex;
     justify-content:flex-start;;
  }
  .madlib-form label, input {
     width: 120px;
  }
  .madlib-form label {
     text-transform: capitalize;
  }
  .madlib-startover {
     display:block;
     margin-top:20px;
  }
  </style>
</head>
<body>

<div class="madlib">
This is {{adjective}}.<br>
<br>
I want a <i>{{noun}}</i> for christmas. Programming is {{adjective}}.
<br>
I got so <b>{{adjective}}</b>, I started to {{verb}}.
</div>

</body>
</html>
```
