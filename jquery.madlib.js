/*!
 * jQuery mad lib Plugin v0.0.1
 * https://github.com/rchrd2/jquery-madlib
 *
 * Copyright 2015 Richard Caceres
 * Released under the MIT license
 */
$.fn.madlib = function() {
  var $this = $(this);
  $this.hide();
  var madlibText = $this.html();
  var schema = [];
  var schema_regex = /{{(\w+)}}/g;
  var matches;
  while ((matches = schema_regex.exec(madlibText)) !== null) {
     schema.push(matches[1]);
  }

  var $madlibForm = $('<form>')
      .addClass('madlib-form');

  for (var i = 0; i < schema.length; i++) {
    var name = schema[i];
    var type = schema[i].toLowerCase();
    var wrapper = $("<div>");
    $("<label>")
        .text(type)
        .appendTo(wrapper);
    $("<input>")
        .attr("type", "text")
        .attr("name", name)
        .appendTo(wrapper);
    wrapper.appendTo($madlibForm);
  }

  var submit = $("<input>")
        .attr("type", "submit")
        .appendTo($madlibForm);


  $madlibForm.on('submit', function(e) {
     var inputs = $madlibForm.find("input[type=text]");
     var outputText = madlibText;
     for (var i = 0; i < inputs.length; i++) {
        var $input = $(inputs[i]);
        // Prevent script injection
        var val = $("<div>").text($input.val()).html();
        val = val || "_";
        outputText = outputText.replace("{{"+$input.attr('name')+"}}", val);
     }
     var $output = $("<div>").html(outputText);
     var $startOver = $("<button>")
         .text("Start Over")
         .addClass("madlib-startover");
     $startOver.on("click", function() {
         $this.empty();
         $this.html(madlibText);
         $this.madlib();
     });
     $startOver.appendTo($output);
     $this.html($output);
     e.preventDefault();
  });

  $this.empty();
  $this.append($madlibForm);
  $this.show();
};
